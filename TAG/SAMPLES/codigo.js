function initWebGL(){
    canvas=document.getElementById("my-canvas");
    try{
        gl=canvas.getContext("webgl");
    }
    catch(e){

    }

    if(gl){
        initShaders();
        setupBuffers();
        getMatrixUniforms();
        cargarTextura();
        glProgram.uDoLighting=gl.getUniformLocation(glProgram, "uDoLighting");
        gl.uniform1i(glProgram.uDoLighting, 1);

        (function animLoop(){
            if(!paused){
                setupWebGL();
                setupDynamicBuffers();
                
                setMatrixUniforms();
                drawScene();
            }
            requestAnimationFrame(animLoop, canvas);
        })();

    }
    else{
        alert("Error: Tu navegador no soporta WebGL");
    }
}

function setupWebGL(){
    
    //establece el clear color a verde
    gl.clearColor(0.1, 0.5, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
    //profundidad
    gl.enable(gl.DEPTH_TEST);

    //establecemos dimensiones del canvas
    gl.viewport(0, 0, canvas.width, canvas.height);
    if(matriz){mat4.ortho(pMatrix, -5.0, 5.0, -5.0, 5.0, 0.1, 100);}
    else{mat4.perspective(pMatrix, 45, canvas.width/canvas.height, 0.1, 100.0);}
    mat4.identity(mvMatrix);
    mat4.translate(mvMatrix, mvMatrix, [x, y, -2.0]);

    //almacenamos la inversa de la matriz model view en nuestra matriz de normales
    mat3.normalFromMat4(normalMatrix, mvMatrix);


}

function initShaders(){
    var vs_source=document.getElementById('shader-vs').innerHTML,
        fs_source=document.getElementById('shader-fs').innerHTML;

    //compilar shaders
    vertexShader=makeShader(vs_source, gl.VERTEX_SHADER);
    fragmentShader=makeShader(fs_source, gl.FRAGMENT_SHADER);

    //crear programa
    glProgram=gl.createProgram();

    //juntar shader con el programa
    gl.attachShader(glProgram, vertexShader);
    gl.attachShader(glProgram, fragmentShader);
    gl.linkProgram(glProgram);

    if(!gl.getProgramParameter(glProgram, gl.LINK_STATUS)){
        alert("No se puede inicializar el shader");
    }

    gl.useProgram(glProgram);
}

function setupBuffers(){
    


    //AHORA LOS COLORES
    var triangleTexCoords=[
        //cara delantera
        0.0, 0.0,
        1.0, 0.0,
        2.0, 0.0,
        0.5, 1.0,
        1.5, 1.0,
        1.0, 2.0,

        //cara trasera
        0.0, 0.0,
        1.0, 0.0,
        2.0, 0.0,
        0.5, 1.0,
        1.5, 1.0,
        1.0, 2.0
        ];

    //lo mismo con colores
    

    //12 vertices
    var triangleVerticesOriginal=[

    //de abajo a la izquierda a arriba a la derecha
        -1.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        1.0, 0.0, 1.0,
        -0.5, 1.0, 1.0,
        0.5, 1.0, 1.0,
        0.0, 2.0, 1.0,

        //cara trasera
        -1.0, 0.0, -1.0,
        0.0, 0.0, -1.0,
        1.0, 0.0, -1.0,
        -0.5, 1.0, -1.0,
        0.5, 1.0, -1.0,
        0.0, 2.0, -1.0
    ];






    //configurar los buffers de vertices
    //18 triángulos
    var triangleVertexIndices=[
        //cara delantera
        0, 1, 3,
        1, 4, 3,
        1, 2, 4,
        3, 4, 5,

        //cara trasera
        6, 7, 9,
        7, 10, 9,
        7, 8, 10,
        9, 10, 11,

        //cara izquierda
        0, 6, 3,
        3, 6, 9,
        3, 9, 5,
        5, 9, 11,

        //cara derecha
        2, 8, 4,
        4, 8, 10,
        4, 10, 5,
        5, 10, 11,

        //suelo
        0, 6, 8,
        8, 2, 0
    ];

    //crear indices de forma procedural para que no hayan vertices repetidos
    var triangleVertices=[];
    var triangleTexCoords=[];
    for(let i=0; i<triangleVertexIndices.length; ++i){
        let a=triangleVertexIndices[i];

        triangleVertices.push(triangleVerticesOriginal[a*3]);
        triangleVertices.push(triangleVerticesOriginal[a*3+1]);
        triangleVertices.push(triangleVerticesOriginal[a*3+2]);

        if(i >=24){
            triangleTexCoords.push(triangleVerticesOriginal[a*3+2]);
            triangleTexCoords.push(triangleVerticesOriginal[a*3+1]);
        }else{
            triangleTexCoords.push(triangleVerticesOriginal[a*3]);
            triangleTexCoords.push(triangleVerticesOriginal[a*3+1]);
        }
    }
    trianglesVerticeBuffer=gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, trianglesVerticeBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);

    trianglesTexCoordBuffer=gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, trianglesTexCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleTexCoords), gl.STATIC_DRAW);

    //creamos el buffer de índices
    triangleVerticesIndexBuffer=gl.createBuffer();
    triangleVerticesIndexBuffer.number_vertex_points=triangleVertexIndices.length;

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, triangleVerticesIndexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(triangleVertexIndices), gl.STATIC_DRAW);


    //programar nuestros vectores de normales proceduralmente
    var triangleNormals=[];
    //18 triángulos - la normal será la misma para cada vértice del triángulo
    for(var i=0; i<triangleVertexIndices.length; i+=3){
        var a=triangleVertexIndices[i],
            b=triangleVertexIndices[i+1],
            c=triangleVertexIndices[i+2];

        //la normal es el producto vectorial
        var v1=[
            triangleVerticesOriginal[a*3] - triangleVerticesOriginal[b*3],
            triangleVerticesOriginal[a*3+1] - triangleVerticesOriginal[b*3+1],
            triangleVerticesOriginal[a*3+2] - triangleVerticesOriginal[b*3+2]
        ];

        var v2=[
            triangleVerticesOriginal[a*3] - triangleVerticesOriginal[c*3],
            triangleVerticesOriginal[a*3+1] - triangleVerticesOriginal[c*3+1],
            triangleVerticesOriginal[a*3+2] - triangleVerticesOriginal[c*3+2]
        ];
        var cross=[
            v1[1]*v2[2] - v1[2]*v2[1],
            v1[2]*v2[0] - v1[0]*v2[2],
            v1[0]*v2[1] - v1[1]*v2[0]
        ];
        //el mismo valor para cada uno de los tres vértices
        triangleNormals.push.apply(triangleNormals, cross);
        triangleNormals.push.apply(triangleNormals, cross);
        triangleNormals.push.apply(triangleNormals, cross);
    }

    trianglesNormalBuffer=gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, trianglesNormalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleNormals), gl.STATIC_DRAW);
}

//buffers para la animación
function setupDynamicBuffers(){
    /*let x_translation=Math.sin(angle)/2.0;

    var triangleVertices=[
        //triangulo de la izquierda
        -0.5+x_translation, 0.5, -0.5,
        0.0+x_translation, 0.0, -0.5,
        -0.5+x_translation, -0.5, -0.5,
        //triangulo derecha
        0.5+x_translation, 0.5, 0.5,
        0.0+x_translation, 0.0, 0.5,
        0.5+x_translation, -0.5, 0.5
        ];*/
        mat4.identity(mvMatrix);
        mat4.translate(mvMatrix, mvMatrix, [x, y, -7.0]);
        mat4.rotate(mvMatrix, mvMatrix, angle, sentido);
        angle+=0.02;
    //crear buffer de vertices y meterle los vertices que hemos creado
    /*trianglesVerticeBuffer=gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, trianglesVerticeBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.DYNAMIC_DRAW);*/
}

function moveView(x, y){

    mat4.translate(mvMatrix, mvMatrix, [x, y, 5]);
}

function drawScene(){
    //posicion de los vértices
    vertexPositionAttribute=gl.getAttribLocation(glProgram, "aVertexPosition");
    gl.enableVertexAttribArray(vertexPositionAttribute);
    gl.bindBuffer(gl.ARRAY_BUFFER, trianglesVerticeBuffer);
    gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);

    //colores de los vértices
    vertexTexCoordAttribute=gl.getAttribLocation(glProgram, "aVertexTexCoord");
    gl.enableVertexAttribArray(vertexTexCoordAttribute);
    gl.bindBuffer(gl.ARRAY_BUFFER, trianglesTexCoordBuffer);
    gl.vertexAttribPointer(vertexTexCoordAttribute, 2, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, triangleVerticesIndexBuffer);

    //iluminación de los vértices
    vertexNormalAttribute=gl.getAttribLocation(glProgram, "aVertexNormal");
    gl.enableVertexAttribArray(vertexNormalAttribute);
    gl.bindBuffer(gl.ARRAY_BUFFER, trianglesNormalBuffer);
    gl.vertexAttribPointer(vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0);
    //gl.drawElements(gl.TRIANGLES, triangleVerticesIndexBuffer.number_vertex_points, gl.UNSIGNED_SHORT, 0);

    gl.drawArrays(gl.TRIANGLES, 0, triangleVerticesIndexBuffer.number_vertex_points);

}

function makeShader(src, type){
    //compilar el vertex shader
    var shader=gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);

    if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
        alert("Error compilando el Shader "+gl.getShaderInfoLog(shader));
    }
    return shader;
}

//helpers, get es siempre la misma y set la llamamos porque en cada
//iteración el resultado es diferente

function getMatrixUniforms(){
    glProgram.pMatrixUniform=gl.getUniformLocation(glProgram, "uPMatrix");
    glProgram.mvMatrixUniform=gl.getUniformLocation(glProgram, "uMVMatrix");
    glProgram.samplerUniform=gl.getUniformLocation(glProgram, "uSampler");
    glProgram.samplerUniform2=gl.getUniformLocation(glProgram, "uSampler2");
    glProgram.normalMatrixUniform=gl.getUniformLocation(glProgram, "uNormalMatrix");
}

function setMatrixUniforms(){
    gl.uniformMatrix4fv(glProgram.pMatrixUniform, false, pMatrix);
    gl.uniformMatrix4fv(glProgram.mvMatrixUniform, false, mvMatrix);
    gl.uniformMatrix3fv(glProgram.normalMatrixUniform, false, normalMatrix);
}


//texture functions
function cargarTextura(){
    textureImage[STONE_TEXTURE]=new Image();
    textureImage[STONE_TEXTURE].onload=function(){
        setupTexture(STONE_TEXTURE);

    }
    textureImage[STONE_TEXTURE].src="tex.jpg";

    textureImage[GARDIOT_LOGO]=new Image();
    textureImage[GARDIOT_LOGO].onload=function(){
        setupTexture(GARDIOT_LOGO);

    }
    textureImage[GARDIOT_LOGO].src="logo.png";

    gl.uniform1i(glProgram.uDoTexturing, 1);

}

function setupTexture(i){
    gl.activeTexture(gl.TEXTURE0+i);
    texture[i] = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture[i]);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    console.log(textureImage[i]);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureImage[i]);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);

    //activar por defecto las texturas activadas


    if( !gl.isTexture(texture[i]) )
    {
        console.error("Error: Texture is invalid");
    }
}