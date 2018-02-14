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
        (function animLoop(){
            setupWebGL();
            setupDynamicBuffers();
            drawScene();
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
    gl.clear(gl.COLOR_BUFFER_BIT);

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
    


    //AHORA LOS COLORES
    var triangleVerticeColors=[
        //triangulo de la izquierda rojo
        1.0, 0.0, 0.0,
        1.0, 1.0, 1.0,
        1.0, 0.0, 0.0,
        //triangulo derecha azul
        0.0, 0.0, 1.0,
        1.0, 1.0, 1.0,
        0.0, 0.0, 1.0
        ];

    //lo mismo con colores
    trianglesColorBuffer=gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, trianglesColorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVerticeColors), gl.STATIC_DRAW);
}

//buffers para la animación
function setupDynamicBuffers(){
    let x_translation=Math.sin(angle)/2.0;

    var triangleVertices=[
        //triangulo de la izquierda
        -0.5+x_translation, 0.5, 0.0,
        0.0+x_translation, 0.0, 0.0,
        -0.5+x_translation, -0.5, 0.0,
        //triangulo derecha
        0.5+x_translation, 0.5, 0.0,
        0.0+x_translation, 0.0, 0.0,
        0.5+x_translation, -0.5, 0.0
        ];
        angle+=0.01;
    //crear buffer de vertices y meterle los vertices que hemos creado
    trianglesVerticeBuffer=gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, trianglesVerticeBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.DYNAMIC_DRAW);
}

function drawScene(){
    //posicion de los vértices
    vertexPositionAttribute=gl.getAttribLocation(glProgram, "aVertexPosition");
    gl.enableVertexAttribArray(vertexPositionAttribute);
    gl.bindBuffer(gl.ARRAY_BUFFER, trianglesVerticeBuffer);
    gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);

    //colores de los vértices
    vertexColorAttribute=gl.getAttribLocation(glProgram, "aVertexColor");
    gl.enableVertexAttribArray(vertexColorAttribute);
    gl.bindBuffer(gl.ARRAY_BUFFER, trianglesColorBuffer);
    gl.vertexAttribPointer(vertexColorAttribute, 3, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLES, 0, 6);


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