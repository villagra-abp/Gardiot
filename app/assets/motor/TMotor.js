
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


    //empezamos a dibujar con los shaders que le pasemos por parámetro
    startDrawing(vs, fs){
    	this.running=true;
    	fpsInterval=1000/60;
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
	        cargarShaders();

	    	  //bucle de animación en utilities.js
          window.interval=setInterval(function(){
            //Cuando esté todo cargado, dibujamos
            if(window.loading.length==0){
              animLoop();
              motor.allLoaded();
            }
          }, 100);
    	}
    	else{
  			alert("No funciona WebGL");
  		}
    }

    //pausa del bucle de dibujado
    stopDrawing(){
    	this.running=false;
    }

    //igual que startDrawing pero solo hace un draw
    startDrawingStatic(vs, fs){
    	if(vs!==undefined && fs!==undefined){
	    	this.vertexShader=vs;
	    	this.fragmentShader=fs;
	    }
    	if(iniciamosWebGL('myCanvas')){
	        cargarShaders();
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
		    //parámetros básicos de webGL
	      setupWebGL();

        //dibujar las luces
        this.dibujarLucesActivas();

        //inicializar viewport
		    gl.viewport(0, 0, canvas.width, canvas.height);

		    this.iterar();

        //inicializar cámara
        this.dibujarCamaraActiva();

		      //dibujado del árbol, cuando llegue a la hoja, la dibujará en el canvas
		this.escena.draw();

	}


  usarShader(shader){
    let p=-1;
    if(shader=='cartoon')
      p=0;
    else if(shader=='realista')
      p=1;
    if(p>=0){
      window.program=p;
      gl.useProgram(glProgram[p]);

      return true;
    }
    return false;
  }


  toggleVista(){

		if(window.mode==0){//visualización
			motor.resetOrbital("dynamicCamera");
			window.rotationCamX=-40;
      window.rotationCamY=-45;
			window.mode=1;
			motor.rotarCamaraA("dynamicCamera", -90, "x");
			//motor.rotarCamara("dynamicCamera", rotationCamY, "z");
			motor.moverCamaraA("dynamicCamera", 0, camHeight, 0);

			
      //motor.resetOrbital("dynamicCamera");
      //motor.rotarCamaraA("dynamicCamera", -90, "x");
      /*let pos=motor.getCamaraActiva().dad.dad.entity.matrix;
      window.escala=motor.getCamaraActiva().dad.dad.dad.dad.dad.entity.matrix.slice(0)[0];
      //console.log(pos[12], pos[13], pos[14]);
      //console.log(esc);
      //rotationCamY%=360;

      window.step=[-pos[12]/20, -pos[14]/20, (1-escala)/20, (-90-rotationCamX)/20, (camHeight-pos[13])/20];
      window.transition=true;*/
      //window.now=[rotationCamX, rotationCamY];
      //console.log(now);
      //motor.moverCamaraA("dynamicCamera", 0, 10, 0);
    }
    else if(window.mode==1){//edición
			motor.resetOrbital("dynamicCamera");
      window.mode=0;
      window.rotationCamX=-40;
      window.rotationCamY=-45;
      motor.rotarCamaraA("dynamicCamera", 0, "x");
      //motor.rotarCamara("dynamicCamera", -rotationCamX, "x");
			motor.moverCamaraA("dynamicCamera", 0, camHeight, camHeight*2);
			motor.rotarCamaraOrbital("dynamicCamera", 0, "y");
			motor.rotarCamara("dynamicCamera", rotationCamX, "x");
      //window.transition=true;
      //window.now=[rotationCamX, rotationCamY];
      //console.log(now);
      //motor.moverCamaraA("dynamicCamera", 0, 10, 0);

    }
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
	      var escCam = new TNodo(nombre + "_S", new TTransf(), hermano.dad);
	      var orbCamY=new TNodo(nombre+ "_ROY", new TTransf(), escCam);
	      var orbCamX=new TNodo(nombre+ "_ROX", new TTransf(), orbCamY);
			var traCam = new TNodo(nombre + "_T",  new TTransf(), orbCamX );
			var rotCam = new TNodo(nombre + "_R", new TTransf(), traCam);

			var cam = new TNodo(nombre, new TCamara(perspective), rotCam);
		}else{
			//console.log("crea en raiz");
	      var escCam = new TNodo(nombre + "_S", new TTransf(), this.escena);
	      var orbCamY=new TNodo(nombre+ "_ROY", new TTransf(), escCam);
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
			let position=motor.getPosCamaraActiva();
			if(window.mode==1 && !window.transition){
				if(position[0]<(-jardin.width/2) && x<0){
					x=0;
				}else if(position[0]>(jardin.width/2) && x>0){
					x=0;
				}if(position[2]>(jardin.length/2) && z>0){
					z=0;
				}else if(position[2]<(-jardin.length/2) && z<0){
					z=0;
				}
				
				this.camaraRegistro[pos].dad.dad.entity.trasladar(x,y,z);

			}
			
			else if(!window.transition){
				position=motor.getCamaraActiva().dad.dad.entity.matrix;
				let length=Math.max(jardin.width/2, jardin.length/2);
				if(position[12]<((-length)-2) && x<0){
					x=0;
				}else if(position[12]>((length)+2) && x>0){
					x=0;
				}if(position[14]>((length)+2) && z>0){
					z=0;
				}else if(position[14]<((-length)-2) && z<0){
					z=0;
				}

				this.camaraRegistro[pos].dad.dad.entity.trasladar(x,y,z);
				
			}
			else{
				this.camaraRegistro[pos].dad.dad.entity.trasladar(x,y,z);
			}
			


			return true;
		}

	}
  moverCamaraA(nombre, x, y, z){
    var pos = -1;

		for (var i = 0; i< this.camaraRegistro.length; i++){
			if(nombre == this.camaraRegistro[i].name){
				pos = i;
				break;
			}
		}
		if(pos>=0){
			let matrix=this.camaraRegistro[pos].dad.dad.entity.matrix;
      matrix[12]=x;
      matrix[13]=y;
      matrix[14]=z;
      //this.camaraRegistro[pos].dad.dad.entity.matrix=matrix;

			return true;
		}
  }
/*
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

  zoomCamaraParalela(nombre, factor){
    var pos = -1;

		for (var i = 0; i< this.camaraRegistro.length; i++){
			if(nombre == this.camaraRegistro[i].name){
				pos = i;
				break;
			}
		}
		if(pos>=0){
      let a=this.camaraRegistro[pos].entity.getParams();
      console.log(a);
			this.camaraRegistro[pos].entity.setParams(a[0]-factor, a[1]+factor,
      a[2]-factor, a[3]+factor, a[4], a[5]);
      console.log(this.camaraRegistro[pos].entity.getParams());
			return true;
		}

  }
*/
  //Orientación de la cámara
	rotarCamara(nombre, grados, eje){
		var pos = -1;

		for (var i = 0; i< this.camaraRegistro.length; i++){
			if(nombre == this.camaraRegistro[i].name){
				pos = i;
				break;
			}
		}
		if(pos>=0){
      if(eje=='z')
        rotationCamY+=grados;
			this.camaraRegistro[pos].dad.entity.rotar(grados, eje);
			return true;
		}

	}

  rotarCamaraA(nombre, grados, eje){
		var pos = -1;

		for (var i = 0; i< this.camaraRegistro.length; i++){
			if(nombre == this.camaraRegistro[i].name){
				pos = i;
				break;
			}
		}
		if(pos>=0){
      let dir=[];
      if(eje=='x'){
        dir=[1.0, 0.0, 0.0];
      }else if(eje=='y'){
        dir=[0.0, 1.0, 0.0];
      }else if(eje=='z'){
        dir=[0.0, 0.0, 1.0];
      }
      let rad=Math.PI*grados/180;

			mat4.fromRotation(this.camaraRegistro[pos].dad.entity.matrix, rad, dir);
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
      if(eje == 'x'){
        rotationCamX+=grados;
        grados > 0 ? rotationCamX = Math.min(rotationCamX, 70) : rotationCamX = Math.max(rotationCamX, 0);
        let rad=Math.PI*rotationCamX/180;
        mat4.fromRotation(this.camaraRegistro[pos].dad.dad.dad.entity.matrix, rad, [1.0, 0.0, 0.0]);
      }
      else if(eje == 'y'){
        rotationCamY+=grados;
        let rad=Math.PI*rotationCamY/180;
        mat4.fromRotation(this.camaraRegistro[pos].dad.dad.dad.dad.entity.matrix, rad, [0.0, 1.0, 0.0]);
      }

			return true;
		}
	}

  resetOrbital(nombre){
    var pos = -1;

		for (var i = 0; i< this.camaraRegistro.length; i++){
			if(nombre == this.camaraRegistro[i].name){
				pos = i;
				break;
			}
		}
		if(pos>=0){

        mat4.fromRotation(this.camaraRegistro[pos].dad.dad.dad.entity.matrix, 0, [1.0, 0.0, 0.0]);

        mat4.fromRotation(this.camaraRegistro[pos].dad.dad.dad.dad.entity.matrix, 0, [0.0, 1.0, 0.0]);

			return true;
		}
  }

  escalarCamara(nombre, q){
    var pos = -1;

		for (var i = 0; i< this.camaraRegistro.length; i++){
			if(nombre == this.camaraRegistro[i].name){
				pos = i;
				break;
			}
		}
		if(pos>=0){
      this.camaraRegistro[pos].dad.dad.dad.dad.dad.entity.escalar(q, q, q);

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
            mat4.ortho(matrixProjection, camaraActiva.entity._left*10, camaraActiva.entity._right*10, camaraActiva.entity._bottom*10, camaraActiva.entity._top*10, camaraActiva.entity._near, camaraActiva.entity._far*100);
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
        invertedMView=auxMatrix;

        let aux=[];
        mat4.invert(aux, invertedMView);
        //gl.uniform3f(glProgram[0].eyePos, aux[12], aux[13], aux[14]);
        //console.log(aux[12], aux[13], aux[14]);

        //pasar matrices a WebGL
        gl.uniformMatrix4fv(glProgram[window.program].vMatrixUniform, false, auxMatrix);
        gl.uniformMatrix4fv(glProgram[window.program].pMatrixUniform, false, matrixProjection);
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
      var rotOrb = new TNodo(nombre + "_RO", new TTransf(), hermano.dad);
			var traLuz = new TNodo(nombre + "_T",  new TTransf(), rotOrb);
			var rotLuz = new TNodo(nombre + "_R",  new TTransf(), traLuz);
			var luz = new TNodo(nombre, new TLuz("puntual", i, i, i, i, i, i, undefined, undefined), rotLuz);
		}else{
			//console.log("crea en raiz");
      var rotOrb = new TNodo(nombre + "_RO", new TTransf(), this.escena);
			var traLuz = new TNodo(nombre + "_T",  new TTransf(), rotOrb);
			var rotLuz = new TNodo(nombre + "_R",  new TTransf(), traLuz);
			var luz = new TNodo(nombre, new TLuz("puntual", i, i, i, i, i, i, undefined, undefined), rotLuz);
		}
    this.crearNodoMalla("sol", "sol", "sol.jpg", luz);
    motor.escalarMalla("sol", 10);
		this.luzRegistro.push(luz);
		this.luzActiva.push(0);
		return luz;
	}

  /**
	 * Crea una luz dirigida (spotlight), se tiene que definir su nombre,
	 * intensidad y si quieres que cuelgue de un hermano
	 * si no, se deja en undefined
   * También se le pasa la amplitud del foco (de 0 a 100) y
   * la dirección de la luz, en forma de vec3
	 * @param  {string} nombre
	 * @param  {double} intensidad
   * @param  {int} amplitud
   * @param  {[double, double, double]} direccion
	 * @param  {TNodo | undefined} hermano
	 * @return {TNodo}
	 */
  crearNodoLuzDirigida(nombre, amplitud, direccion, intensidad, hermano){
    let i=intensidad;

		if( hermano !== undefined){
			//console.log("crea un hermano");
			var traLuz = new TNodo(nombre + "_T",  new TTransf(), hermano.dad);
			var rotLuz = new TNodo(nombre + "_R",  new TTransf(), traLuz);
			var luz = new TNodo(nombre, new TLuz("dirigida", i, i, i, i, i, i, amplitud, direccion), rotLuz);
		}else{
			//console.log("crea en raiz");
			var traLuz = new TNodo(nombre + "_T",  new TTransf(), this.escena);
			var rotLuz = new TNodo(nombre + "_R",  new TTransf(), traLuz);
			var luz = new TNodo(nombre, new TLuz("dirigida", i, i, i, i, i, i, amplitud, direccion), rotLuz);
		}
    //this.crearNodoMalla("cubo", "cubo", undefined, luz);
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
			/*if(this.running){
					configurarShaders(this.vertexShader, this.fragmentShader);
				}*/
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

  rotarLuz(nombre, grados, eje){
		var pos = -1;

		for (var i = 0; i< this.luzRegistro.length; i++){
			if(nombre == this.luzRegistro[i].name){
				pos = i;
				break;
			}
		}
		if(pos>=0){
			this.luzRegistro[pos].dad.entity.rotar(grados, eje);



      let lDir=this.luzRegistro[i].entity.origin.slice(0);
      vec4.transformMat4(lDir, lDir, this.luzRegistro[i].dad.entity.matrix);

      this.luzRegistro[i].entity.direccion=lDir;
			return true;
		}

	}
  rotarLuzOrbital(nombre, grados){
		var pos = -1;

		for (var i = 0; i< this.luzRegistro.length; i++){
			if(nombre == this.luzRegistro[i].name){
				pos = i;
				break;
			}
		}
		if(pos>=0){

			this.luzRegistro[pos].dad.dad.dad.entity.rotar(grados, "z");

			return true;
		}
  }
  rotarLuzOrbitalA(nombre, grados){
		var pos = -1;

		for (var i = 0; i< this.luzRegistro.length; i++){
			if(nombre == this.luzRegistro[i].name){
				pos = i;
				break;
			}
		}
		if(pos>=0){
      let mat=this.luzRegistro[pos].dad.dad.dad.entity.matrix;
			mat4.fromRotation(mat, grados * Math.PI / 180, [0.0, 0.0, 1.0]);

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
              		let au=[];
		        	mat4.multiply(auxMatrix, auxMatrix/*.slice(0)*/, auxStack[i]);
		        }


		        //calculamos la posición de la luz
				let lPos=vec4.fromValues(1.0, 1.0, 1.0, 1.0);
				let aux=vec4.fromValues(1.0, 1.0, 1.0, 0.0);

				vec4.transformMat4(lPos, lPos, auxMatrix);
				vec4.subtract(lPos, lPos, aux);


				//se la pasamos al shader
				//console.log(this.luzRegistro[i].entity.tipo);
				let isActive, lightPosUniformLocation, lightIntUniformLocation,
            lightSpecUniformLocation, lightDirUniformLocation, lightAmpUniformLocation;
				if(this.luzRegistro[i].entity.tipo=="puntual"){
					isActive=gl.getUniformLocation(glProgram[window.program], `uLight[${contLuces}].isActive`);
					lightPosUniformLocation=gl.getUniformLocation(glProgram[window.program], `uLight[${contLuces}].position`);
					lightIntUniformLocation=gl.getUniformLocation(glProgram[window.program], `uLight[${contLuces}].color`);
					lightSpecUniformLocation=gl.getUniformLocation(glProgram[window.program], `uLight[${contLuces}].specColor`);
				}
				else if(this.luzRegistro[i].entity.tipo=="dirigida"){
					isActive=gl.getUniformLocation(glProgram[window.program], `uSpotLight[${contLuces}].isActive`);
					lightPosUniformLocation=gl.getUniformLocation(glProgram[window.program], `uSpotLight[${contLuces}].position`);
					lightIntUniformLocation=gl.getUniformLocation(glProgram[window.program], `uSpotLight[${contLuces}].color`);
					lightSpecUniformLocation=gl.getUniformLocation(glProgram[window.program], `uSpotLight[${contLuces}].specColor`);
          lightDirUniformLocation=gl.getUniformLocation(glProgram[window.program], `uSpotLight[${contLuces}].direction`);
          lightAmpUniformLocation=gl.getUniformLocation(glProgram[window.program], `uSpotLight[${contLuces}].amplitude`);
          gl.uniform4fv(lightDirUniformLocation, this.luzRegistro[i].entity.direccion);
          gl.uniform1f(lightAmpUniformLocation, this.luzRegistro[i].entity.amplitud);
				}

				gl.uniform1i(isActive, 1);
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
	crearNodoMalla(nombre, recurso, textura , hermano){

		if( hermano !== undefined){
			//console.log("crea un hermano");

			var traMalla = new TNodo(nombre + "_T", new TTransf(),  hermano.dad);
			var rotMalla = new TNodo(nombre + "_R", new TTransf(), traMalla);
			var escMalla = new TNodo(nombre + "_S", new TTransf(), rotMalla);
			var malla = new TNodo(nombre, new TMalla(recurso, textura), escMalla);
		}else{
			//console.log("crea en raiz");
			var traMalla = new TNodo(nombre + "_T", new TTransf(), this.escena);
			var rotMalla = new TNodo(nombre + "_R", new TTransf(), traMalla);
			var escMalla = new TNodo(nombre + "_S", new TTransf(), rotMalla);
			var malla = new TNodo(nombre, new TMalla(recurso, textura), escMalla);
		}
		this.mallaRegistro.push(malla);
		return malla;
	}

	moverMalla(nombre, x, y, z){
		var pos = -1;

		for (var i = 0; i< this.mallaRegistro.length; i++){
			if(this.mallaRegistro[i] != undefined){
				if(nombre == this.mallaRegistro[i].name){
					pos = i;
					break;
				}
			}
		}
		if(pos>=0){
			this.mallaRegistro[pos].dad.dad.dad.entity.trasladar(x,y,z);
			return true;
		}

	}

	moverMallaA(nombre, x, y, z){
        var pos = -1;

        for (var i = 0; i< this.mallaRegistro.length; i++){
            if(this.mallaRegistro[i] != undefined){
				if(nombre == this.mallaRegistro[i].name){
					pos = i;
					break;
				}
			}
        }
        if(pos>=0){
            let matrix=this.mallaRegistro[pos].dad.dad.dad.entity.matrix;
              matrix[12]=x;
              matrix[13]=y;
              matrix[14]=z;
              this.mallaRegistro[pos].dad.dad.dad.entity.matrix=matrix;
            return true;
        }

    }

	rotarMalla(nombre, grados, eje){
		var pos = -1;

		for (var i = 0; i< this.mallaRegistro.length; i++){
			if(this.mallaRegistro[i] != undefined){
				if(nombre == this.mallaRegistro[i].name){
					pos = i;
					break;
				}
			}
		}
		if(pos>=0){
			this.mallaRegistro[pos].dad.dad.entity.rotar(grados, eje);
			return true;
		}

	}

  //Escalado general de la malla
	escalarMalla(nombre, q){
		var pos = -1;

		for (var i = 0; i< this.mallaRegistro.length; i++){
			if(this.mallaRegistro[i]!= undefined){
				if(nombre == this.mallaRegistro[i].name){
					pos = i;
					break;
				}
			}
		}
		if(pos>=0){
			this.mallaRegistro[pos].dad.entity.escalar(q, q, q);
			return true;
		}

	}

  //Escalado de la malla especificando los parámetros x, y, z
	escalarMallaXYZ(nombre, x, y, z){
		var pos = -1;

		for (var i = 0; i< this.mallaRegistro.length; i++){
			if(this.mallaRegistro[i]!= undefined){
				if(nombre == this.mallaRegistro[i].name){
					pos = i;
					break;
				}
			}
		}
		if(pos>=0){
			this.mallaRegistro[pos].dad.entity.escalar(x, y, z);
			return true;
		}

	}


	borrarMalla(nombre){
		var pos = -1;

		for (var i = 0; i< this.mallaRegistro.length; i++){
			if(this.mallaRegistro[i] != undefined){
				if(nombre == this.mallaRegistro[i].name){
					pos = i;
					break;
				}
			}
		}

		if(pos>=0){
			console.log("borrado");
			this.mallaRegistro[pos].dad.dad.dad.dad.removeChild(this.mallaRegistro[pos].dad.dad.dad);
			this.mallaRegistro[pos] = undefined;
		}
	}


//=================================FIN MALLAS============================


//============================Animaciones==========================
//
//Nombre, nombre del recurso y si tiene un hermano o no
//se maneja igual que una malla y tiene el mismo tipo tambien
crearNodoAnimacion(nombre, recurso, numeroFrames, hermano){

		if( hermano !== undefined){
			//console.log("crea un hermano");


			var traMalla = new TNodo(nombre + "_T", new TTransf(), hermano.dad);
			var rotMalla = new TNodo(nombre + "_R", new TTransf(), traMalla);
			var escMalla = new TNodo(nombre + "_S", new TTransf(), rotMalla);

			var animacion = new TNodo(nombre, new TTransf(), escMalla);

			for(var i = 0; i < numeroFrames; i++){
				var malla = new TNodo(nombre + "_" + i, new TMalla(recurso+""+i, undefined), animacion);
				if(i!=0){
					malla._active = 0;
				}
			}
		}else{
			//console.log("crea en raiz");

			var traMalla = new TNodo(nombre + "_T", new TTransf(), this.escena);
			var rotMalla = new TNodo(nombre + "_R", new TTransf(), traMalla);
			var escMalla = new TNodo(nombre + "_S", new TTransf(), rotMalla);

			var animacion = new TNodo(nombre, new TTransf(), escMalla);

			for(var i = 0; i < numeroFrames; i++){
				var malla = new TNodo(nombre + "_" + i, new TMalla(recurso+""+i, undefined), animacion);
				if(i!=0){
					malla._active = 0;
				}
			}



		}
		this.animRegistro.push(animacion);
		this.mallaRegistro.push(animacion);
		console.log(this.animRegistro);
		return malla;
	}
	iterar(){
		for(var i = 0; i<this.animRegistro.length; i++){
			this.siguienteMallaAnimada(this.animRegistro[i]._name);
		}
	}


	siguienteMallaAnimada(nombre){
		var pos = -1;

		for (var i = 0; i< this.animRegistro.length; i++){
			if(nombre == this.animRegistro[i].name){
				pos = i;
				break;
			}
		}

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
