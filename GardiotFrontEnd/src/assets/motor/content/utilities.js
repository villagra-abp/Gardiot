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
function configurarShaders(vertexShader, fragmentShader){
    //aquí dentro cogemos los recursos del directorio
    let vs=gestor.getRecurso(vertexShader, 'shader').shader,
        fs=gestor.getRecurso(fragmentShader, 'shader').shader;

    //Ya tenemos los shaders aquí! (formato texto)
    //console.log(vs);
    //console.log(fs);

    //Aqui viene WebGL
    //compilamos los shaders
    glVertexShader=makeShader(vs, gl.VERTEX_SHADER);
    glFragmentShader=makeShader(fs, gl.FRAGMENT_SHADER);

    //creamos el programa
    glProgram=gl.createProgram();

    //añadimos los shaders al programa
    gl.attachShader(glProgram, glVertexShader);
    gl.attachShader(glProgram, glFragmentShader);
    gl.linkProgram(glProgram);

    if(!gl.getProgramParameter(glProgram, gl.LINK_STATUS)){
        alert("No se puede inicializar el shader");
    }

    gl.useProgram(glProgram);
}


//inicializamos parámetros básicos de WebGL (como el viewport)
function setupWebGL(){

    //establece el clear color a blanco
    gl.clearColor(0.1, 0.8, 0.9, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
    //profundidad
    gl.enable(gl.DEPTH_TEST);

    //Nos traemos las matrices, projection, model y view al motor
    glProgram.pMatrixUniform=gl.getUniformLocation(glProgram, "uPMatrix");
    glProgram.mMatrixUniform=gl.getUniformLocation(glProgram, "uMMatrix");
    glProgram.vMatrixUniform=gl.getUniformLocation(glProgram, "uVMatrix");

    glProgram.samplerUniform = gl.getUniformLocation(glProgram, "uSampler");
    glProgram.textured=gl.getUniformLocation(glProgram, "uTextured");
    //matriz de normales
    glProgram.normalMatrixUniform=gl.getUniformLocation(glProgram, "uNormalMatrix");

		glProgram.ka=gl.getUniformLocation(glProgram, "material.Ka");
		glProgram.kd=gl.getUniformLocation(glProgram, "material.Kd");
		glProgram.ks=gl.getUniformLocation(glProgram, "material.Ks");

		glProgram.shin=gl.getUniformLocation(glProgram, "propiedades.shininess");
		glProgram.opac=gl.getUniformLocation(glProgram, "propiedades.opacity");




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

function animLoop(){
    now=Date.now();
    elapsed=now-then;

    if(elapsed>fpsInterval && motor.running){
        then=now-(elapsed%fpsInterval);
        motor.draw();

    }

    requestAnimationFrame(animLoop, canvas);
}


function mouse_move(e){

    let cv=e.target,
        x=e.offsetX,
        y=e.offsetY,
				dimx=cv.offsetWidth/41,
				dimy=cv.offsetHeight/27,
        fila=Math.ceil(y/dimy),
        columna=Math.ceil(x/dimx);

    //console.log(`Posición: ${x} - ${y}`);
    //lo de arriba es igual a
    // console.log('Posición: '+x+', '+y+');


				if(cv.getAttribute('data-down')){
        //ARRASTRANDO FICHA
	        console.log(`MOUSEMOVE-> Posición: ${fila} - ${columna}`);
					if(window.x === undefined || window.y === undefined){
						window.x=fila;
						window.y=columna;
					}
	        else if(window.x!=fila || window.y!=columna){
	            motor.moverMalla("malla2", ((columna-window.y)*4.3), 0, (fila-window.x)*6.8);
							window.x=fila;
							window.y=columna;
	        }

    		}


}

function mouse_click(e){
    let cv=e.target,
        x=e.offsetX,
        y=e.offsetY,
        dimx=cv.offsetWidth/41,
				dimy=cv.offsetHeight/27,
        fila=Math.ceil(y/dimy),
        columna=Math.ceil(x/dimx);


    if(x<1 || x>cv.width-1 || y<1 || y>cv.height-1)
        return;
			window.x=undefined;
			window.y=undefined;
    console.log(`Posición: ${fila} - ${columna}`);
		console.log(motor.getMallaPos("malla2"));
}



function mouse_down(e){
     let cv=e.target,
        x=e.offsetX,
        y=e.offsetY,
				dimx=cv.offsetWidth/41,
				dimy=cv.offsetHeight/27,
        fila=Math.ceil(y/dimy),
        columna=Math.ceil(x/dimx);

        console.log(`DOWN-> Posición: ${fila} - ${columna}`);
				cv.setAttribute('data-down', 'true');

}

function mouse_up(e){
     let cv=e.target,
        x=e.offsetX,
        y=e.offsetY,
				dimx=cv.offsetWidth/41,
				dimy=cv.offsetHeight/27,
        fila=Math.ceil(y/dimy),
        columna=Math.ceil(x/dimx);

        console.log(`UP-> Posición: ${fila} - ${columna}`);
				cv.removeAttribute('data-down');

}
