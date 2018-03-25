var loadTextResource=function (url, callback){
	var request = new XMLHttpRequest();
    let resURL='';
    if(window.location.toString().indexOf('gardiot')>=0){
        resURL='https://gardiot.ovh/app/assets/motor'+url;
    }
    else if(window.location.toString().indexOf('localhost:4200')>=0){
        resURL='http://localhost:4200/assets/motor'+url;
    }
    else if(window.location.toString().indexOf('localhost:8080')>=0){
        resURL=url;
    }
    console.log(resURL);
    request.open('GET', resURL, false);
    request.onload=function(){
      if(request.status<200 || request.status>299){
        callback('Error: HTTP Status ' + request.status);
      }else{
        callback(null, request.responseText);
      }
    };
    request.send();
};

var loadJSONResource=function(url, callback){
  loadTextResource(url, function (err, result){
    if(err){
      callback(err);
    } else{
      try{
				console.log(JSON.parse(result));
        callback(null, JSON.parse(result));
      } catch(e){
        callback(e);
      }
    }
  });
};

function makeShader(src, type){
    //compilar el vertex shader
    let shader=gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);

    if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
        alert("Error compilando el Shader " + gl.getShaderInfoLog(shader));
    }
    return shader;
}


//función para inicializar los shaders
function cargarShaders(){
    //aquí dentro cogemos los recursos del directorio
		let vs=[];
		let fs=[];

    vs[0]=gestor.getRecurso('shaderP.vs', 'shader').shader,
  	fs[0]=gestor.getRecurso('shaderP.fs', 'shader').shader;

    //Ya tenemos los shaders aquí! (formato texto)
    //console.log(vs);
    //console.log(fs);

    //Aqui viene WebGL
    //compilamos los shaders
    glVertexShader[0]=makeShader(vs[0], gl.VERTEX_SHADER);
    glFragmentShader[0]=makeShader(fs[0], gl.FRAGMENT_SHADER);

    //creamos el programa
    glProgram[0]=gl.createProgram();

    //añadimos los shaders al programa
    gl.attachShader(glProgram[0], glVertexShader[0]);
    gl.attachShader(glProgram[0], glFragmentShader[0]);
    gl.linkProgram(glProgram[0]);

    if(!gl.getProgramParameter(glProgram[0], gl.LINK_STATUS)){
        alert("No se puede inicializar el shader");
    }

    gl.useProgram(glProgram[0]);
}


//inicializamos parámetros básicos de WebGL
function setupWebGL(){

    //establece el clear color a blanco
    gl.clearColor(0.1, 0.8, 0.9, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
    //profundidad
    gl.enable(gl.DEPTH_TEST);

    //Nos traemos las matrices, projection, model y view al motor
    glProgram[0].pMatrixUniform=gl.getUniformLocation(glProgram[0], "uPMatrix");
    glProgram[0].mMatrixUniform=gl.getUniformLocation(glProgram[0], "uMMatrix");
    glProgram[0].vMatrixUniform=gl.getUniformLocation(glProgram[0], "uVMatrix");

    glProgram[0].samplerUniform = gl.getUniformLocation(glProgram[0], "uSampler");
    glProgram[0].textured=gl.getUniformLocation(glProgram[0], "uTextured");
    //matriz de normales
    glProgram[0].normalMatrixUniform=gl.getUniformLocation(glProgram[0], "uNormalMatrix");

		glProgram[0].ka=gl.getUniformLocation(glProgram[0], "material.Ka");
		glProgram[0].kd=gl.getUniformLocation(glProgram[0], "material.Kd");
		glProgram[0].ks=gl.getUniformLocation(glProgram[0], "material.Ks");

		glProgram[0].shin=gl.getUniformLocation(glProgram[0], "propiedades.shininess");
		glProgram[0].opac=gl.getUniformLocation(glProgram[0], "propiedades.opacity");
}


function iniciamosWebGL(idCanvas){
    canvas=document.getElementById(idCanvas);
    try{
        gl=canvas.getContext("webgl");
        if(gl){
            return true;
        }
        return false;
    }

    catch(e){
        return false;
    }
}
