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
        callback(null, JSON.parse(result));
      } catch(e){
        callback(e);
      }
    }
  });
};

function updateMyPlant(garden, plant, soil, x, y){
	let xhr=new XMLHttpRequest(),
			url;
	if(window.location.toString().indexOf("localhost")>=0){
		url=`http://localhost:3000/api/myPlant/${garden}/${plant.id}`;
	}
	else if(window.location.toString().indexOf("gardiot")>=0){
		url=`https://gardiot.ovh/api/myPlant/${garden}/${plant.id}`;
	}

	xhr.open('PUT', url, true);

	xhr.onload=function(){
		let respuesta=JSON.parse(xhr.responseText);

        if (xhr.status == "200") {
            motor.moverMallaA(plant.id, x, 0, y); //Esta llamada tal vez es innecesaria
						plantsMap.delete(plant.x+'-'+plant.y);//Para la iluminación
            plant.x = x;
            plant.y = y;
						plantsMap.set(x+'-'+y, plant.id);//Para la iluminación
        }
	}


	let params='xCoordinate='+x+'&yCoordinate='+y+'&plant='+plant.plant+'&soil='+soil;

	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.setRequestHeader('Authorization', 'Bearer '+localStorage['Bearer']);
	xhr.send(params);
}

function insertMyPlant(garden, plant, soil, x, y){
    let xhr=new XMLHttpRequest(),
            url;
    if(window.location.toString().indexOf("localhost")>=0){
        url=`http://localhost:3000/api/myPlant/${garden}`;
    }
    else if(window.location.toString().indexOf("gardiot")>=0){
        url=`https://gardiot.ovh/api/myPlant/${garden}`;
    }

    xhr.open('POST', url, true);

    xhr.onload=function(){
        let respuesta=JSON.parse(xhr.responseText);
        //console.log(respuesta.Mensaje);
        if (xhr.status == 200) {
            let value = {
                id: respuesta.myPlant,
                isDragging: false,
                plant: plant,
                x: x,
                y: y,
                model: undefined,
                seed: undefined
            };

						plantsMap.set(x+'-'+y, respuesta.myPlant);//Para la iluminación

            window.jardin.plants.push(value);
            motor.crearNodoMalla(respuesta.myPlant, "lechuga", "lechuga.jpg", undefined);
            motor.moverMallaA(respuesta.myPlant, x, 0, y);
						motor.escalarMalla(respuesta.myPlant, 2.5);
        }
    }

    let params='xCoordinate='+x+'&yCoordinate='+y+'&plant='+plant+'&soil='+soil;

    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', 'Bearer '+localStorage['Bearer']);
    xhr.send(params);
}

function deleteMyPlant(garden, plant){
	let xhr=new XMLHttpRequest(),
			url;
	if(window.location.toString().indexOf("localhost")>=0){
		url=`http://localhost:3000/api/myPlant/${garden}/${plant.id}`;
	}
	else if(window.location.toString().indexOf("gardiot")>=0){
		url=`https://gardiot.ovh/api/myPlant/${garden}/${plant.id}`;
	}

	xhr.open('DELETE', url, true);

	xhr.onload=function(){
		let respuesta=JSON.parse(xhr.responseText);

        if (xhr.status == "200") {
            motor.borrarMalla(plant.id);
            let index = window.jardin.plants.indexOf(plant);

						plantsMap.delete(plant.x+'-'+plant.y);//Para la iluminación

            window.jardin.plants.splice(index, 1);
        }
	}

	xhr.setRequestHeader('Authorization', 'Bearer '+localStorage['Bearer']);
	xhr.send(null);
}

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

		for(let i=0; i<vertexShaders.length && i<fragmentShaders.length; i++){
	    vs[i]=gestor.getRecurso(vertexShaders[i], 'shader').shader,
	  	fs[i]=gestor.getRecurso(fragmentShaders[i], 'shader').shader;

	    //Ya tenemos los shaders aquí! (formato texto)
	    //console.log(vs);
	    //console.log(fs);

	    //Aqui viene WebGL
	    //compilamos los shaders
	    glVertexShader[i]=makeShader(vs[i], gl.VERTEX_SHADER);
	    glFragmentShader[i]=makeShader(fs[i], gl.FRAGMENT_SHADER);

	    //creamos el programa
	    glProgram[i]=gl.createProgram();

	    //añadimos los shaders al programa
	    gl.attachShader(glProgram[i], glVertexShader[i]);
	    gl.attachShader(glProgram[i], glFragmentShader[i]);
	    gl.linkProgram(glProgram[i]);

	    if(!gl.getProgramParameter(glProgram[i], gl.LINK_STATUS)){
	        alert("No se puede inicializar el shader");
	    }
		}

    gl.useProgram(glProgram[window.program]);
}


//inicializamos parámetros básicos de WebGL
function setupWebGL(){

    //establece el clear color a blanco
    gl.clearColor(0.1, 0.8, 0.9, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
    //profundidad
    gl.enable(gl.DEPTH_TEST);

    //Nos traemos las matrices, projection, model y view al motor
    glProgram[window.program].pMatrixUniform=gl.getUniformLocation(glProgram[window.program], "uPMatrix");
    glProgram[window.program].mMatrixUniform=gl.getUniformLocation(glProgram[window.program], "uMMatrix");
    glProgram[window.program].vMatrixUniform=gl.getUniformLocation(glProgram[window.program], "uVMatrix");

    glProgram[window.program].samplerUniform = gl.getUniformLocation(glProgram[window.program], "uSampler");
    glProgram[window.program].textured=gl.getUniformLocation(glProgram[window.program], "uTextured");
		glProgram[window.program].lighted=gl.getUniformLocation(glProgram[window.program], "uLighted");
		glProgram[window.program].hovered=gl.getUniformLocation(glProgram[window.program], "uHovered");
    //matriz de normales
    glProgram[window.program].normalMatrixUniform=gl.getUniformLocation(glProgram[window.program], "uNormalMatrix");

	glProgram[window.program].ka=gl.getUniformLocation(glProgram[window.program], "material.Ka");
	glProgram[window.program].kd=gl.getUniformLocation(glProgram[window.program], "material.Kd");
	glProgram[window.program].ks=gl.getUniformLocation(glProgram[window.program], "material.Ks");

	glProgram[window.program].shin=gl.getUniformLocation(glProgram[window.program], "propiedades.shininess");
	glProgram[window.program].opac=gl.getUniformLocation(glProgram[window.program], "propiedades.opacity");
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
