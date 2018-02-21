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
        //getMatrixUniforms();
        cargarTextura();
        textureImage.onload=function(){
            setupTexture();
            setupWebGL();
            //setupDynamicBuffers();
            //setMatrixUniforms();
            drawScene();
            //requestAnimationFrame(animLoop, canvas);
        }

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
    

    //12 vertices
    var triangleVertices=[
    //de abajo a la izquierda a arriba a la derecha
        -0.5, -0.5, 0.0,
        0.5, -0.5, 0.0,
        0.5, 0.5, 0.0,

        0.5, 0.5, 0.0,
        -0.5, 0.5, 0.0,
        -0.5, -0.5, 0.0
    ];
    trianglesVerticeBuffer=gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, trianglesVerticeBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);

    //configurar los buffers de vertices
    //18 triángulos
   
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
        mat4.translate(mvMatrix, mvMatrix, [-1.0, -1.0, -7.0]);
        mat4.rotate(mvMatrix, mvMatrix, angle, [0.0, 1.0, 0.0]);
        angle+=0.01;
    //crear buffer de vertices y meterle los vertices que hemos creado
    /*trianglesVerticeBuffer=gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, trianglesVerticeBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.DYNAMIC_DRAW);*/
}

function drawScene(){
    //posicion de los vértices
    vertexPositionAttribute=gl.getAttribLocation(glProgram, "aVertexPosition");
    gl.enableVertexAttribArray(vertexPositionAttribute);
    gl.bindBuffer(gl.ARRAY_BUFFER, trianglesVerticeBuffer);
    gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);

   /* //colores de los vértices
    vertexColorAttribute=gl.getAttribLocation(glProgram, "aVertexColor");
    gl.enableVertexAttribArray(vertexColorAttribute);
    gl.bindBuffer(gl.ARRAY_BUFFER, trianglesColorBuffer);
    gl.vertexAttribPointer(vertexColorAttribute, 3, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, triangleVerticesIndexBuffer);
    gl.drawElements(gl.TRIANGLES, triangleVerticesIndexBuffer.number_vertex_points, gl.UNSIGNED_SHORT, 0);
*/
    gl.drawArrays(gl.TRIANGLES, 0, 2*3);


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
}

function setMatrixUniforms(){
    gl.uniformMatrix4fv(glProgram.pMatrixUniform, false, pMatrix);
    gl.uniformMatrix4fv(glProgram.mvMatrixUniform, false, mvMatrix);
}


//cargartextura
function cargarTextura(){
    textureImage=new Image();
    textureImage.src="tex.jpg";
}

function setupTexture(){
    glProgram.samplerUniform=gl.getUniformLocation(glProgram, "uSampler");
    gl.uniform1i(glProgram.samplerUniform, 0);

    texture=gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureImage);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);

    if(!gl.isTexture(texture)){
        console.log("Error: Texture is invalid");
    }

    
}