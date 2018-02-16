function initWebGL(){
    canvas=document.getElementById("my-canvas");
    try{
        gl=canvas.getContext("webgl");
    }
    catch(e){

    }

    if(gl){
        setupWebGL();
        initShaders();
        setupBuffers();
        drawScene();

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
    gl.viewport(0, canvas.height/2, canvas.width/2, canvas.height/2);

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
    var triangleVertices=[
        //triangulo de la izquierda
        -0.5, 0.5, 0.0,
        0.0, 0.0, 0.0,
        -0.5, -0.5, 0.0,
        //triangulo derecha
        0.5, 0.5, 0.0,
        0.0, 0.0, 0.0,
        0.5, -0.5, 0.0
        ];
        //crear buffer de vertices y meterle los vertices que hemos creado
        trianglesVerticeBuffer=gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, trianglesVerticeBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);
}

function drawScene(){
    vertexPositionAttribute=gl.getAttribLocation(glProgram, "aVertexPosition");
    gl.enableVertexAttribArray(vertexPositionAttribute);

    gl.bindBuffer(gl.ARRAY_BUFFER, trianglesVerticeBuffer);
    gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);

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