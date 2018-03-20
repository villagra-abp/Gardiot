
//Clase de la fachada del motor de TAG

class TMotor{

 	constructor (gestorRecursos) {
        this.escena = new TNodo('Raiz', undefined, undefined);
        this.gestorRecursos = gestorRecursos;
        this.luzRegistro = [];
        this.luzActiva = [];
        this.animRegistro = [];
        this.lucesActivas=0;
        this.camaraRegistro = [];
        this.camaraActiva = -1;
        this.camaraPosition=[];

        this.mallaRegistro = [];
        this.running=false;
        this.vertexShader;
        this.fragmentShader;
    }

    //empezamos a dibujar con los fps que le pasemos por parámetro
    startDrawing(vs, fs){
    	this.running=true;
    	fpsInterval=1000/50;
    	then=Date.now();
    	startTime=then;
    	if(vs!==undefined && fs!==undefined){
	    	this.vertexShader=vs;
	    	this.fragmentShader=fs;
	    }
    	if(iniciamosWebGL('myCanvas')){
	        //Esto es la inicialización de la librería gráfica
	        //configuramos los shaders y le pasamos el nombre de los ficheros
	        //que tenemos en recursos/shaders
	        //esta función está en content/utilities
	        configurarShaders(this.vertexShader, this.fragmentShader);

	    	  //bucle de animación en utilities.js
	        animLoop();
    	}
    	else{
			alert("No funciona WebGL");
		}
    }

    stopDrawing(){
    	this.running=false;
    }

    startDrawingStatic(vs, fs){
    	if(vs!==undefined && fs!==undefined){
	    	this.vertexShader=vs;
	    	this.fragmentShader=fs;
	    }
    	if(iniciamosWebGL('myCanvas')){
	        configurarShaders(this.vertexShader, this.fragmentShader);
          window.interval=setInterval(function(){
            //Cuando esté todo cargado, dibujamos
            if(window.loading.length==0){
              motor.draw();
              motor.allLoaded();
            }
          }, 100);
    	}
    	else{
  			alert("No funciona WebGL");
  		}
    }

    allLoaded() {
        clearInterval(window.interval);
    }


	draw(){

		//iniciamos los parámetros básicos de webGL
	      setupWebGL();

        //inicializar luces
        this.dibujarLucesActivas();

        //inicializar viewport
		    gl.viewport(0, 0, canvas.width, canvas.height);

		//itera las mallas
		this.siguienteMallaAnimada("animacion");

        //inicializar cámara
        this.dibujarCamaraActiva();

		//dibujado del árbol, cuando llegue a la hoja, la dibujará en el canvas
        this.escena.draw();

	}




//=================================INICIO CÁMARA============================
	/**
	 * Crea una camara con todos los controladores
	 * si hermano se deja a nulo lo crea en la raiz
	 * si no se tiene que indicar un nodo que no sea de
	 * transformacion
	 * @param  {string} nombre
	 * @param  {bool} perspective
	 * @param  {TNodo} hermano
	 * @return {TNodo}
	 */
	crearNodoCamara(nombre, perspective, hermano){

		if( hermano !== undefined){
			//console.log("crea un hermano");
      var orbCamY=new TNodo(nombre+ "_ROY", new TTransf(), hermano.dad);
      var orbCamX=new TNodo(nombre+ "_ROX", new TTransf(), orbCamY);
			var traCam = new TNodo(nombre + "_T",  new TTransf(), orbCamX );
			var rotCam = new TNodo(nombre + "_R", new TTransf(), traCam);
			var cam = new TNodo(nombre, new TCamara(perspective), rotCam);
		}else{
			//console.log("crea en raiz");
      var orbCamY=new TNodo(nombre+ "_ROY", new TTransf(), this.escena);
      var orbCamX=new TNodo(nombre+ "_ROX", new TTransf(), orbCamY);
			var traCam = new TNodo(nombre + "_T",  new TTransf(), orbCamX );
			var rotCam = new TNodo(nombre + "_R", new TTransf(), traCam);
			var cam = new TNodo(nombre, new TCamara(perspective), rotCam);
		}
		cam.entity.setParams(-1, 1, -0.7, 0.7, 1, 1000);
		this.camaraRegistro.push(cam);
		return cam;
	}

	moverCamara(nombre, x, y, z){
		var pos = -1;

		for (var i = 0; i< this.camaraRegistro.length; i++){
			if(nombre == this.camaraRegistro[i].name){
				pos = i;
				break;
			}
		}
		if(pos>=0){
			this.camaraRegistro[pos].dad.dad.entity.trasladar(x,y,z);
			return true;
		}

	}

  zoomCamara(nombre, factor){
    var pos = -1;

		for (var i = 0; i< this.camaraRegistro.length; i++){
			if(nombre == this.camaraRegistro[i].name){
				pos = i;
				break;
			}
		}
		if(pos>=0){
      let a=this.getPosCamaraActiva().slice(0);
      let traslacion=vec3.fromValues(a[0], a[1], a[2]);
      vec3.scale(traslacion, traslacion, factor);
      console.log(traslacion);
			this.camaraRegistro[pos].dad.dad.entity.trasladar(traslacion[0],traslacion[1],traslacion[2]);
			return true;
		}

  }

	rotarCamara(nombre, grados, eje){
		var pos = -1;

		for (var i = 0; i< this.camaraRegistro.length; i++){
			if(nombre == this.camaraRegistro[i].name){
				pos = i;
				break;
			}
		}
		if(pos>=0){
			this.camaraRegistro[pos].dad.entity.rotar(grados, eje);
			return true;
		}

	}


  rotarCamaraOrbital(nombre, grados, eje){
		var pos = -1;

		for (var i = 0; i< this.camaraRegistro.length; i++){
			if(nombre == this.camaraRegistro[i].name){
				pos = i;
				break;
			}
		}
		if(pos>=0){
      let a=[];
      mat4.getRotation(a, this.camaraRegistro[pos].dad.dad.dad.entity.matrix);
      if(eje=="y"){
			   this.camaraRegistro[pos].dad.dad.dad.dad.entity.rotar(grados, eje);
      }
      else if(eje=="x" && !(grados<0 && a[0]<=0) && !(grados>0 && a[0]>=0.67)){
        this.camaraRegistro[pos].dad.dad.dad.entity.rotar(grados, eje);
      }
			return true;
		}
	}

	/** se le pasa el nombre por parametro y activa dicha camara */
	activarCamara(nombre){
		var pos = -1;

		for (var i = 0; i< this.camaraRegistro.length; i++){
			//console.log(this.camaraRegistro[i].name);
			if(nombre == this.camaraRegistro[i].name){
				pos = i;
				break;
			}
		}
		//console.log("pos " + pos);
		if(pos>=0){
			this.camaraActiva = pos;
			return this.camaraRegistro[this.camaraActiva];
		}else{
			return false;
		}
	}

	getCamaraActiva(){
		return this.camaraRegistro[this.camaraActiva];
	}

  getPosCamaraActiva(){
    let position=vec3.create();
    vec3.transformMat4(position, position, this.camaraPosition);
		return position;
	}

	dibujarCamaraActiva(){
		let camaraActiva=this.getCamaraActiva();
		//crear matriz projection a partir de la info almacenada
		if(!camaraActiva.entity._isPerspective){
            mat4.ortho(matrixProjection, camaraActiva.entity._left*90, camaraActiva.entity._right*90, camaraActiva.entity._bottom*90, camaraActiva.entity._top*90, camaraActiva.entity._near, camaraActiva.entity._far*100);
        }
        else{
            mat4.frustum(matrixProjection, camaraActiva.entity._left, camaraActiva.entity._right, camaraActiva.entity._bottom, camaraActiva.entity._top, camaraActiva.entity._near, camaraActiva.entity._far);
        }

        //recorrer al árbol a la inversa desde la cámara a la raíz
        let auxStack=[];
        let auxCamara=camaraActiva;
        while(auxCamara=auxCamara.dad){
        	if(auxCamara.entity!==undefined)
        		auxStack.push(auxCamara.entity.matrix);
        }
        //tenemos el recorrido de la cámara a la raíz en auxStack
        //console.log(auxStack);

        //recorremos la lista auxiliar invertida
        let auxMatrix=mat4.create();
        for(let i=auxStack.length-1; i>=0; i--){
        	mat4.multiply(auxMatrix, auxMatrix, auxStack[i]);
        }
        this.camaraPosition=auxMatrix.slice(0);
        //el resultado lo invertimos y tenemos la matrix View
        mat4.invert(auxMatrix, auxMatrix);
        invertedMView=auxMatrix.slice(0);

        //pasar matrices a WebGL
        gl.uniformMatrix4fv(glProgram.vMatrixUniform, false, auxMatrix);
        gl.uniformMatrix4fv(glProgram.pMatrixUniform, false, matrixProjection);
	}
//=================================FIN CÁMARA============================


//=================================INICIO LUCES============================
	/**
	 * Crea una luz, se tiene que definir su nombre,
	 * intensidad y si quieres que cuelgue de un hermano
	 * si no, se deja en undefined
	 * @param  {string} nombre
	 * @param  {double} intensidad
	 * @param  {TNodo | undefined} hermano
	 * @return {TNodo}
	 */
	crearNodoLuz(nombre, intensidad, hermano){
		let i=intensidad;

		if( hermano !== undefined){
			//console.log("crea un hermano");
			var traLuz = new TNodo(nombre + "_T",  new TTransf(), hermano.dad);
			var rotLuz = new TNodo(nombre + "_R",  new TTransf(), traLuz);
			var luz = new TNodo(nombre, new TLuz(i, i, i, i, i, i), rotLuz);
		}else{
			//console.log("crea en raiz");
			var traLuz = new TNodo(nombre + "_T",  new TTransf(), this.escena);
			var rotLuz = new TNodo(nombre + "_R",  new TTransf(), traLuz);
			var luz = new TNodo(nombre, new TLuz(i, i, i, i, i, i), rotLuz);
		}

		this.luzRegistro.push(luz);
		this.luzActiva.push(0);
		return luz;
	}

	//True if can activate, false otherwise
	activarLuz(nombre){
		if(this.lucesActivas<5){
			var pos = -1;

			for (var i = 0; i< this.luzRegistro.length; i++){
				if(nombre == this.luzRegistro[i].name){
					pos = i;
					break;
				}
			}
			if(pos>=0){
				this.luzActiva[pos] = 1;
				this.lucesActivas++;
				if(this.running){
					configurarShaders(this.vertexShader, this.fragmentShader);
				}
				return this.luzRegistro[pos];
			}else{
				return false;
			}
		}
		else{
			return false;
		}
	}

	//True if can deactivate, false otherwise
	desactivarLuz(nombre){
		var pos = -1;

		for (var i = 0; i< this.luzRegistro.length; i++){
			if(nombre == this.luzRegistro[i].name){
				pos = i;
				break;
			}
		}
		if(pos>=0){
			this.luzActiva[pos] = 0;
			this.lucesActivas--;
			if(this.running){
					configurarShaders(this.vertexShader, this.fragmentShader);
				}
			return this.luzRegistro[pos];
		}else{
			return false;
		}

	}
	//TODO
	moverLuz(nombre, x, y, z){
		var pos = -1;

		for (var i = 0; i< this.luzRegistro.length; i++){
			if(nombre == this.luzRegistro[i].name){
				pos = i;
				break;
			}
		}
		if(pos>=0){
			this.luzRegistro[pos].dad.dad.entity.trasladar(x,y,z);
			return true;
		}
	}
	dibujarLucesActivas(){
		//dibujar ambient light
		let contLuces=0;
		for(let i=0; i<this.luzRegistro.length; i++){
			if(this.luzActiva[i]==1){

				let auxStack=[];
		        let auxLuz=this.luzRegistro[i];
		        while(auxLuz=auxLuz.dad){
		        	if(auxLuz.entity!==undefined)
		        		auxStack.push(auxLuz.entity.matrix);
		        }

		        //tenemos el recorrido de la cámara a la raíz en auxStack
        		//console.log(auxStack);

        		//recorremos la lista auxiliar invertida
		        let auxMatrix=mat4.create();
		        for(let i=auxStack.length-1; i>=0; i--){
		        	mat4.multiply(auxMatrix, auxMatrix, auxStack[i]);
		        }

		        //calculamos la posición de la luz
				let lPos=vec4.fromValues(1.0, 1.0, 1.0, 1.0);
				let aux=vec4.fromValues(1.0, 1.0, 1.0, 0.0);

				vec4.transformMat4(lPos, lPos, auxMatrix);
				vec4.subtract(lPos, lPos, aux);



				//se la pasamos al shader
				var lightPosUniformLocation=gl.getUniformLocation(glProgram, `uLight[${contLuces}].position`);
				var lightIntUniformLocation=gl.getUniformLocation(glProgram, `uLight[${contLuces}].color`);
				var lightSpecUniformLocation=gl.getUniformLocation(glProgram, `uLight[${contLuces}].specColor`);

				gl.uniform4fv(lightPosUniformLocation, lPos);
				gl.uniform3fv(lightIntUniformLocation, this.luzRegistro[i].entity.intensidad);
				gl.uniform3fv(lightSpecUniformLocation, this.luzRegistro[i].entity.intensidadSpecular);

				contLuces++;
			}
		}
	}
//=================================FIN LUCES============================

//=================================INICIO MALLAS============================
	/**
	 * se le pasa un recurso y un hermano si queremos que
	 * cuelgue de la estructura de alguno de ellos.
	 * @param  {string} nombre
	 * @param  {[type]} recurso
	 * @param  {TNodo | undefined} hermano
	 * @return {TNodo}
	 */
	crearNodoMalla(nombre, recurso, hermano){

		if( hermano !== undefined){
			//console.log("crea un hermano");

			var traMalla = new TNodo(nombre + "_T", new TTransf(),  hermano.dad);
			var rotMalla = new TNodo(nombre + "_R", new TTransf(), traMalla);
			var escMalla = new TNodo(nombre + "_S", new TTransf(), rotMalla);
			var malla = new TNodo(nombre, new TMalla(recurso), escMalla);
		}else{
			//console.log("crea en raiz");
			var traMalla = new TNodo(nombre + "_T", new TTransf(), this.escena);
			var rotMalla = new TNodo(nombre + "_R", new TTransf(), traMalla);
			var escMalla = new TNodo(nombre + "_S", new TTransf(), rotMalla);
			var malla = new TNodo(nombre, new TMalla(recurso), escMalla);
		}
		this.mallaRegistro.push(malla);
		return malla;
	}





	moverMalla(nombre, x, y, z){
		var pos = -1;

		for (var i = 0; i< this.mallaRegistro.length; i++){
			if(nombre == this.mallaRegistro[i].name){
				pos = i;
				break;
			}
		}
		if(pos>=0){
			this.mallaRegistro[pos].dad.dad.dad.entity.trasladar(x,y,z);
			return true;
		}

	}

	rotarMalla(nombre, grados, eje){
		var pos = -1;

		for (var i = 0; i< this.mallaRegistro.length; i++){
			if(nombre == this.mallaRegistro[i].name){
				pos = i;
				break;
			}
		}
		if(pos>=0){
			this.mallaRegistro[pos].dad.dad.entity.rotar(grados, eje);
			return true;
		}

	}

	escalarMalla(nombre, q){
		var pos = -1;

		for (var i = 0; i< this.mallaRegistro.length; i++){
			if(nombre == this.mallaRegistro[i].name){
				pos = i;
				break;
			}
		}
		if(pos>=0){
			this.mallaRegistro[pos].dad.entity.escalar(q, q, q);
			return true;
		}

	}

	escalarMallaxyz(nombre, x, y, z){
		var pos = -1;

		for (var i = 0; i< this.mallaRegistro.length; i++){
			if(nombre == this.mallaRegistro[i].name){
				pos = i;
				break;
			}
		}
		if(pos>=0){
			this.mallaRegistro[pos].dad.entity.escalar(x, y, z);
			return true;
		}

	}

  getMallaPos(nombre){
    var pos = -1;

		for (var i = 0; i< this.mallaRegistro.length; i++){
			if(nombre == this.mallaRegistro[i].name){
				pos = i;
				break;
			}
		}
		if(pos>=0){
      console.log(this.mallaRegistro[pos].dad.dad.dad.entity.matrix[12]);
			 return [this.mallaRegistro[pos].dad.dad.dad.entity.matrix[12], this.mallaRegistro[pos].dad.dad.dad.entity.matrix[14]];
		}
  }
//=================================FIN MALLAS============================
//============================Animaciones==========================
//
//Nombre, nombre del recurso y si tiene un hermano o no
//se maneja igual que una malla y tiene el mismo tipo tambien
crearNodoAnimacion(nombre, arrayRecursos, hermano){
		console.log(arrayRecursos);
		if( hermano !== undefined){
			//console.log("crea un hermano");
		

			var traMalla = new TNodo(nombre + "_T", new TTransf(), hermano.dad);
			var rotMalla = new TNodo(nombre + "_R", new TTransf(), traMalla);
			var escMalla = new TNodo(nombre + "_S", new TTransf(), rotMalla);
			
			var animacion = new TNodo(nombre, new TTransf(), escMalla);

			for(var i = 0; i < arrayRecursos.length; i++){
				var malla = new TNodo(nombre + "_" + i, new TMalla(arrayRecursos[i]), animacion);
			}
		}else{
			//console.log("crea en raiz");
			
			var traMalla = new TNodo(nombre + "_T", new TTransf(), this.escena);
			var rotMalla = new TNodo(nombre + "_R", new TTransf(), traMalla);
			var escMalla = new TNodo(nombre + "_S", new TTransf(), rotMalla);

			var animacion = new TNodo(nombre, new TTransf(), escMalla);

			for(var i = 0; i < arrayRecursos.length; i++){
				var malla = new TNodo(nombre + "_" + i, new TMalla(arrayRecursos[i]), animacion);
				if(i!=0){
					console.log("mallas a no poner activa");
					console.log(malla);
					malla._active = 0;
				}
			}

			

		}
		this.animRegistro.push(animacion);
		this.mallaRegistro.push(animacion);
		console.log(this.animRegistro);
		return malla;
	}

	siguienteMallaAnimada(nombre){
		var pos = -1;

		for (var i = 0; i< this.animRegistro.length; i++){
			if(nombre == this.animRegistro[i].name){
				pos = i;
				break;
			}
		}
		//console.log("mallaAnimada para ver");
		//console.log(this.animRegistro[pos]);
		//sacamos la malla que esta activa
		
		var numMallas = this.animRegistro[pos]._childs.length;
		var activa = -1;
		for (var i = 0; i< numMallas; i++){
			if(1 ==  this.animRegistro[pos]._childs[i]._active){
				activa = i;
				break;
			}
		}
		//console.log("malla activa");
		this.animRegistro[pos]._childs[activa]._active = 0;
		//console.log(this.animRegistro[pos]._childs[activa]);
		activa++;
		if(activa >= numMallas){
			activa = 0;
		}

		this.animRegistro[pos]._childs[activa]._active = 1;
		//console.log(this.animRegistro[pos]._childs[activa]);









	}



	
//=================================FIN ANIMACION============================

}
