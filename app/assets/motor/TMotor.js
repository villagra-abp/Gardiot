
//Clase de la fachada del motor
class TMotor {

	//TAG.39	Estructura básica de la fachada (constructor, destructor, inicialización motor y openGL)
	//TAG.42	Funciones para crear transformaciones (creación de varios nodos con las transformaciones, manejo de las transformaciones)
	constructor(gestorRecursos) {
		this.escena = new TNodo('Raiz', undefined, undefined);
		this.gestorRecursos = gestorRecursos;
		this.luzRegistro = [];
		this.lucesActivas = 0;
		this.animRegistro = [];

		this.camaraRegistro = [];
		this.camaraActiva = -1;
		this.camaraPosition = [];

		this.mallaRegistro = [];
		this.running = false;
	}

	/**
	 * Empezar el dibujado de la escena, este método se encarga de poner en marcha
	 * el bucle de animación cuando todos los recursos se han cargado
	 */
	startDrawing() {
		this.running = true;

		//Inicialización de WebGL
		if (iniciamosWebGL('myCanvas')) {
			window.interval = setInterval(function () {
				//Cuando esté todo cargado, dibujamos
				if (window.loading.length == 0) {
					let load = document.getElementsByClassName('loadingComponent');
					for (let el of load)
						el.remove();

					motor.draw();
					animLoop();
					motor.allLoaded();
				}
			}, 100);
		}
		else {
			alert("No funciona WebGL");
		}

	}

	/**
	 * Pausa del bucle de dibujado
	 */
	stopDrawing() {
		this.running = false;
	}

	/**
	 * Hace lo mismo que el startDrawing pero solo realiza un dibujado
	 * Con él podemos obtener una imagen estática
	 */
	startDrawingStatic() {

		//Inicialización de WebGL
		if (iniciamosWebGL('myCanvas')) {

			//bucle de animación en utilities.js
			window.interval = setInterval(function () {
				//Cuando esté todo cargado, dibujamos
				if (window.loading.length == 0) {
					let load = document.getElementsByClassName('loadingComponent');
					for (let el of load)
						el.remove();

					if (!mobile)
						motor.drawSombras();
					motor.draw();
					motor.allLoaded();
				}
			}, 100);
		}
		else {
			alert("No funciona WebGL");
		}
	}

	allLoaded() {
		clearInterval(window.interval);
	}

	draw() {
		//Si estamos en el móvil, configuramos viewport y dibujamos las luces
		if (window.mobile) {
			gl.viewport(0, 0, canvas.width, canvas.height);
			this.dibujarLucesMobile();
		}
		//Si se están dibujando sombras, activamos las texturas de sombras y se las pasamos
		//al shader
		else {
			gl.useProgram(glProgram[window.program]);
			//Pass all shadow textures
			for (let i = 0; i < viewLightMatrix.length; i++) {
				gl.activeTexture(gl.TEXTURE0 + i);
				gl.bindTexture(gl.TEXTURE_2D, shadowDepthTexture[i]);
				gl.uniform1i(glProgram[window.program].shadowMapUniform[i], i);
			}

			gl.uniform1i(glProgram[window.program].cont, viewLightMatrix.length);

			gl.viewport(0, 0, canvas.width, canvas.height);
			gl.clearColor(0.98, 0.98, 0.98, 1);
			gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
			gl.enable(gl.DEPTH_TEST);
			//TAG.54	Backface culling
			gl.enable(gl.CULL_FACE);
			gl.cullFace(gl.BACK);

			this.dibujarLucesActivas();
		}

		//inicializar cámara
		this.dibujarCamaraActiva();

		//dibujado del árbol, cuando llegue a la hoja, la dibujará en el canvas
		this.escena.draw();
	}

	//Activamos los framebuffers de cada luz y creamos las texturas de sombras
	drawSombras() {
		gl.useProgram(glProgram[2]);

		this.dibujarLucesActivasSombras();
		for (window.i = 0; i < viewLightMatrix.length; i++) {
			gl.bindFramebuffer(gl.FRAMEBUFFER, shadowFramebuffer[i]);

			gl.viewport(0, 0, shadowDepthTextureSize, shadowDepthTextureSize);
			gl.clearColor(0, 0, 0, 1);
			gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
			gl.clearDepth(1.0);

			this.escena.draw();

			gl.bindFramebuffer(gl.FRAMEBUFFER, null);
		}
	}

	
	/**
	 * Usar shaders por defecto
	 * @param  {string} shader
	 */
	usarShader(shader) {
		let p = -1;
		if (shader == 'cartoon')
			p = 0;
		else if (shader == 'realista')
			p = 1;
		else if (shader == 'sombras') {
			p = 2;
		}
		if (p >= 0) {
			window.program = p;
			setupWebGL();
			gl.useProgram(glProgram[p]);
			return true;
		}
		return false;
	}

	/**
	 * Activar el shader personalizado que le pasemos por parámetro
	 * @param  {} shader
	 */
	activarShader(shader){
		if(shader>=0){
			window.program=shader;
			setupWebGL();
			gl.useProgram(glProgram[shader]);
			return true;
		}
		return false;
	}

	/**
	 * Aquí cambiamos entre el modo de visualización y modo edición
	 */

	toggleVista() {
		//TAG.74	Animaciones de la aplicación
		if (window.mode == 0) {//visualización
			let pos=motor.getMatPosCamaraActiva();
			let pos2=motor.getPosCamaraActiva();
			rotationCamX=rotationCamX%360;
			rotationCamY=rotationCamY%360;
			if(rotationCamY<-180){rotationCamY+=360}
			window.steps=[-rotationCamY/window.duracionTransicion, -50/window.duracionTransicion, -pos[0]/window.duracionTransicion, (camHeight-pos[1])/window.duracionTransicion, -pos[2]/window.duracionTransicion];
			if(rotationCamY)
			window.transitionToEdit=true;

			window.mode = 1;

		}
		else if (window.mode == 1) {//edición
			window.transitionToDetail=true;
			let pos=motor.getMatPosCamaraActiva();
			rotationCamX=rotationCamX%360;
			rotationCamY=rotationCamY%360;

			window.steps=[(-45-rotationCamY)/window.duracionTransicion, 50/window.duracionTransicion, -pos[0]/window.duracionTransicion, (3.5-pos[1])/window.duracionTransicion, (5-pos[2])/window.duracionTransicion];

			window.mode = 0;

		}
	}

	//=================================INICIO CÁMARA============================
	//TAG.40	Funciones para crear cámaras y gestionarlas (manejo de las cámaras, registro, cálculo de la matriz view)
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
	crearNodoCamara(nombre, perspective, hermano) {
		if (hermano !== undefined) {
			var escCam = new TNodo(nombre + "_S", new TTransf(), hermano.dad);
			var orbCamY = new TNodo(nombre + "_ROY", new TTransf(), escCam);
			var orbCamX = new TNodo(nombre + "_ROX", new TTransf(), orbCamY);
			var traCam = new TNodo(nombre + "_T", new TTransf(), orbCamX);
			var rotCam = new TNodo(nombre + "_R", new TTransf(), traCam);

			var cam = new TNodo(nombre, new TCamara(perspective), rotCam);
		} else {
			var escCam = new TNodo(nombre + "_S", new TTransf(), this.escena);
			var orbCamY = new TNodo(nombre + "_ROY", new TTransf(), escCam);
			var orbCamX = new TNodo(nombre + "_ROX", new TTransf(), orbCamY);
			var traCam = new TNodo(nombre + "_T", new TTransf(), orbCamX);
			var rotCam = new TNodo(nombre + "_R", new TTransf(), traCam);

			var cam = new TNodo(nombre, new TCamara(perspective), rotCam);
		}

		cam.entity.setParams(-1, 1, -0.7, 0.7, 1, 1000);
		this.camaraRegistro.push(cam);
		return cam;
	}

	/**
	 * Movimiento de la cámara nombre en los parámetros x, y z.
	 * Además, tiene en cuenta los límites del jardín
	 * @param  {string} nombre
	 * @param  {number} x
	 * @param  {number} y
	 * @param  {number} z
	 */
	moverCamara(nombre, x, y, z) {
		let camera = this.camaraRegistro.find(x => x.name == nombre);
		if (camera !== undefined) {
			let position = this.getPosCamaraActiva();
			if (window.mode == 1) {
				if (position[0] < (-jardin.width / 2) && x < 0) {
					x = 0;
				} else if (position[0] > (jardin.width / 2) && x > 0) {
					x = 0;
				} if (position[2] > (jardin.length / 2) && z > 0) {
					z = 0;
				} else if (position[2] < (-jardin.length / 2) && z < 0) {
					z = 0;
				}
				camera.dad.dad.entity.trasladar(x, y, z);
			}

			else if(window.mode==0){
				position = this.getCamaraActiva().dad.dad.entity.matrix;
				let length = Math.max(jardin.width / 2, jardin.length / 2);
				if (position[12] < ((-length) - 10) && x < 0) {
					x = 0;
				} else if (position[12] > ((length) + 10) && x > 0) {
					x = 0;
				} if (position[14] > ((length) + 10) && z > 0) {
					z = 0;
				} else if (position[14] < ((-length) - 10) && z < 0) {
					z = 0;
				}
				camera.dad.dad.entity.trasladar(x, y, z);
			}
			else {
				camera.dad.dad.entity.trasladar(x, y, z);
			}
			return true;
		}
	}

	/**
	 * @param  {string} nombre
	 * @param  {number} x
	 * @param  {number} y
	 * @param  {number} z
	 */
	moverCamaraA(nombre, x, y, z) {
		let camera = this.camaraRegistro.find(x => x.name == nombre);
		if (camera !== undefined) {
			let matrix = camera.dad.dad.entity.matrix;
			matrix[12] = x;
			matrix[13] = y;
			matrix[14] = z;
			return true;
		}
	}

	/**
	 * Rotar la orientación de la cámara
	 * @param  {string} nombre
	 * @param  {number} grados
	 * @param  {string} eje
	 */
	rotarCamara(nombre, grados, eje) {
		let camera = this.camaraRegistro.find(x => x.name == nombre);
		if (camera !== undefined) {
			if(eje=='x')
				rotationCamX+=grados;
			if (eje == 'z')
				rotationCamY += grados;
			camera.dad.entity.rotar(grados, eje);
			return true;
		}
	}

	/**
	 * Rotar la orientación de la cámara a una orientación exacta
	 * @param  {string} nombre
	 * @param  {number} grados
	 * @param  {string} eje
	 */
	rotarCamaraA(nombre, grados, eje) {
		let camera = this.camaraRegistro.find(x => x.name == nombre);
		if (camera !== undefined) {
			let dir = [];
			if (eje == 'x') {
				dir = [1.0, 0.0, 0.0];
			} else if (eje == 'y') {
				dir = [0.0, 1.0, 0.0];
			} else if (eje == 'z') {
				dir = [0.0, 0.0, 1.0];
			}
			let rad = Math.PI * grados / 180;
			mat4.fromRotation(camera.dad.entity.matrix, rad, dir);
			return true;
		}
	}

	/**
	 * Rotar la cámara alrededor del punto 0, 0, 0
	 * @param  {string} nombre
	 * @param  {number} grados
	 * @param  {string} eje
	 */
	rotarCamaraOrbital(nombre, grados, eje) {
		let camera = this.camaraRegistro.find(x => x.name == nombre);
		if (camera !== undefined) {
			if (eje == 'x') {
				rotationCamX += grados;
				grados > 0 ? rotationCamX = Math.min(rotationCamX, 70) : rotationCamX = Math.max(rotationCamX, 0);
				let rad = Math.PI * rotationCamX / 180;
				mat4.fromRotation(camera.dad.dad.dad.entity.matrix, rad, [1.0, 0.0, 0.0]);
			}
			else if (eje == 'y') {
				rotationCamY += grados;
				let rad = Math.PI * rotationCamY / 180;
				mat4.fromRotation(camera.dad.dad.dad.dad.entity.matrix, rad, [0.0, 1.0, 0.0]);
			}
			return true;
		}
	}

	/**
	 * Rotar la cámara a un ángulo alrededor del punto 0, 0, 0 en el eje y
	 * @param  {string} nombre
	 * @param  {number} grados
	 */
	rotarCamaraOrbitalA(nombre, grados) {
		let camera = this.camaraRegistro.find(x => x.name == nombre);
		if (camera !== undefined) {
			let rad = Math.PI * grados / 180;
			mat4.fromRotation(camera.dad.dad.dad.dad.entity.matrix, rad, [0.0, 1.0, 0.0]);

			return true;
		}
	}

	/**
	 * Reestablecer la rotación orbital de la cámara
	 * @param  {string} nombre
	 */
	resetOrbital(nombre) {
		let camera = this.camaraRegistro.find(x => x.name == nombre);
		if (camera !== undefined) {
			mat4.fromRotation(camera.dad.dad.dad.entity.matrix, 0, [1.0, 0.0, 0.0]);
			mat4.fromRotation(camera.dad.dad.dad.dad.entity.matrix, 0, [0.0, 1.0, 0.0]);
			return true;
		}
	}

	/**
	 * Escalar
	 * @param  {string} nombre
	 * @param  {number} q
	 */
	escalarCamara(nombre, q) {
		let camera = this.camaraRegistro.find(x => x.name == nombre);
		if (camera !== undefined) {
			camera.dad.dad.dad.dad.dad.entity.escalar(q, q, q);
			return true;
		}
	}

	/**
	 * Cambiar la cámara activa
	 * @param  {string} nombre
	 */
	activarCamara(nombre) {
		let camera = this.camaraRegistro.find(x => x.name == nombre);
		if (camera !== undefined) {
			this.camaraActiva = this.camaraRegistro.indexOf(camera);
			return this.camaraRegistro[this.camaraActiva];
		} else {
			return false;
		}
	}
	/**
	 * Obtener la cámara activa
	 */
	getCamaraActiva() {
		return this.camaraRegistro[this.camaraActiva];
	}

	/**
	 * Obtener la posición de la cámara activa aplicándole transformaciones
	 */
	getPosCamaraActiva() {
		let position = vec3.create();
		vec3.transformMat4(position, position, this.camaraPosition);
		return position;
	}
	getMatPosCamaraActiva(){
		let pos= this.getCamaraActiva().dad.dad.entity.matrix;
		return [pos[12], pos[13], pos[14]];
	}

	/**
	 * Dibujar la cámara activa, obteniendo la matrix proyección y vista
	 */
	dibujarCamaraActiva() {
		let camera = this.getCamaraActiva();
		//TAG.10	Rellenar matriz paralela (con glm)
		if (!camera.entity._isPerspective) {
			mat4.ortho(projectionMatrix, camera.entity._left * 10, camera.entity._right * 10, camera.entity._bottom * 10, camera.entity._top * 10, camera.entity._near, camera.entity._far * 100);
		}
		//TAG.11	Rellenar matriz perspectiva (con glm)
		else {
			mat4.frustum(projectionMatrix, camera.entity._left, camera.entity._right, camera.entity._bottom, camera.entity._top, camera.entity._near, camera.entity._far);
		}

		//recorrer al árbol a la inversa desde la cámara a la raíz
		let auxStack = [];
		let auxCamara = camera;
		while (auxCamara = auxCamara.dad) {
			if (auxCamara.entity !== undefined)
				auxStack.push(auxCamara.entity.matrix);
		}

		//tenemos el recorrido de la cámara a la raíz en auxStack
		//recorremos la lista auxiliar invertida
		let auxMatrix = mat4.create();
		for (let i = auxStack.length - 1; i >= 0; i--) {
			mat4.multiply(auxMatrix, auxMatrix, auxStack[i]);
		}
		this.camaraPosition = auxMatrix.slice(0);
		//el resultado lo invertimos y tenemos la matrix View
		mat4.invert(auxMatrix, auxMatrix);
		viewMatrix = auxMatrix;
		//pasar matrices a WebGL
		gl.uniformMatrix4fv(glProgram[window.program].vMatrixUniform, false, viewMatrix);
	}
	//=================================FIN CÁMARA============================


	//=================================INICIO LUCES============================
	//TAG.41	Funciones para crear luces y gestionarlas (manejo de las luces registro, cálculo de la matriz light)
	/**
	 * Crea una luz, se tiene que definir su nombre,
	 * intensidad y si quieres que cuelgue de un hermano
	 * si no, se deja en undefined
	 * @param  {string} nombre
	 * @param  {double} intensidad
	 * @param  {TNodo | undefined} hermano
	 * @return {TNodo}
	 */
	crearNodoLuz(nombre, intensidad, hermano) {
		let i = intensidad;
		if (hermano !== undefined) {
			var rotOrb = new TNodo(nombre + "_RO", new TTransf(), hermano.dad);
			var traLuz = new TNodo(nombre + "_T", new TTransf(), rotOrb);
			var rotLuz = new TNodo(nombre + "_R", new TTransf(), traLuz);
			var luz = new TNodo(nombre, new TLuz("puntual", i, i, i, i, i, i, undefined, undefined), rotLuz);
		} else {
			var rotOrb = new TNodo(nombre + "_RO", new TTransf(), this.escena);
			var traLuz = new TNodo(nombre + "_T", new TTransf(), rotOrb);
			var rotLuz = new TNodo(nombre + "_R", new TTransf(), traLuz);
			var luz = new TNodo(nombre, new TLuz("puntual", i, i, i, i, i, i, undefined, undefined), rotLuz);
		}
		//this.crearNodoMalla("sol", "sol", "sol.jpg", luz);
		//this.escalarMalla("sol", 0.5);
		this.luzRegistro.push(luz);
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
	crearNodoLuzDirigida(nombre, amplitud, direccion, intensidad, hermano) {
		let i = intensidad;

		if (hermano !== undefined) {
			var traLuz = new TNodo(nombre + "_T", new TTransf(), hermano.dad);
			var rotLuz = new TNodo(nombre + "_R", new TTransf(), traLuz);
			var luz = new TNodo(nombre, new TLuz("dirigida", i, i, i, i, i, i, amplitud, direccion), rotLuz);
		} else {
			var traLuz = new TNodo(nombre + "_T", new TTransf(), this.escena);
			var rotLuz = new TNodo(nombre + "_R", new TTransf(), traLuz);
			var luz = new TNodo(nombre, new TLuz("dirigida", i, i, i, i, i, i, amplitud, direccion), rotLuz);
		}

		this.luzRegistro.push(luz);
		return luz;
	}

	/**TAG.14	Datos y funciones luz puntual
	 * TAG.15	Datos y funciones luz dirigida
	 * Muchas de las funciones sirven para ambos tipos de luz
	 */

	//True if can activate, false otherwise
	/**
	 * Activar una luz si se puede
	 * @param  {string} nombre
	 */
	activarLuz(nombre) {
		if (this.lucesActivas < 5) {
			let luz = this.luzRegistro.find(x => x.name == nombre);
			if (luz !== undefined) {
				luz.activa = true;
				this.lucesActivas++;
				return luz;
			} else {
				return false;
			}
		}
		else {
			return false;
		}
	}

	/**
	 * Desactivar la luz que le pasemos por parámetro
	 * @param  {string} nombre
	 */
	desactivarLuz(nombre) {
		let luz = this.luzRegistro.find(x => x.name == nombre);
		if (luz !== undefined) {
			luz.activa = false;
			this.lucesActivas--;
			return luz;
		} else {
			return false;
		}
	}

	/**
	 * Mover la luz "nombre" en x, y, z
	 * @param  {string} nombre
	 * @param  {number} x
	 * @param  {number} y
	 * @param  {number} z
	 */
	moverLuz(nombre, x, y, z) {
		let luz = this.luzRegistro.find(x => x.name == nombre);
		if (luz !== undefined) {
			luz.dad.dad.entity.trasladar(x, y, z);
			return true;
		}
	}

	/**
	 * Rotar la orientación de la luz
	 * @param  {string} nombre
	 * @param  {number} grados
	 * @param  {string} eje
	 */
	rotarLuz(nombre, grados, eje) {
		let luz = this.luzRegistro.find(x => x.name == nombre);
		if (luz !== undefined) {
			luz.dad.entity.rotar(grados, eje);
			if (typeof luz.entityorigin !== 'undefined') {
				let lDir = luz.entity.origin.slice(0);
				vec4.transformMat4(lDir, lDir, luz.dad.entity.matrix);
				luz.entity.direccion = lDir;
			}

			return true;
		}
	}

	/**
	 * Movimiento de la luz del sol entorno al 0,0,0
	 * @param  {string} nombre
	 * @param  {number} grados
	 */
	rotarLuzOrbital(nombre, grados, eje) {
		let luz = this.luzRegistro.find(x => x.name == nombre);
		if (luz !== undefined) {
			luz.dad.dad.dad.entity.rotar(grados, eje);

			return true;
		}
	}

	/**
	 * Movimiento de la luz del sol entorno al 0,0,0 a unos grados exactos
	 * @param  {string} nombre
	 * @param  {number} grados
	 */
	rotarLuzOrbitalA(nombre, grados) {
		let luz = this.luzRegistro.find(x => x.name == nombre);
		if (luz !== undefined) {
			mat4.fromRotation(luz.dad.dad.dad.entity.matrix, grados * Math.PI / 180, [0.0, 0.0, 1.0]);
			return true;
		}
	}

	/**
	 * DibujarLucesMobile hace el recorrido del árbol de todas las luces activas y las representa en la escena.
	 * Se ha creado este método porque como no se dibujan sombras en el móvil, necesitábamos un método que
	 * hiciera los cálculos necesarios y los estrictamente necesarios
	 */

	dibujarLucesMobile() {
		let contLuces = 0;
		for (let i = 0; i < this.luzRegistro.length; i++) {
			let luz = this.luzRegistro[i];
			if (luz.activa) {

				let auxStack = [];
				let auxLuz = luz;
				while (auxLuz = auxLuz.dad) {
					if (auxLuz.entity !== undefined)
						auxStack.push(auxLuz.entity.matrix);
				}
				//tenemos el recorrido de la cámara a la raíz en auxStack
				//recorremos la lista auxiliar invertida
				let auxMatrix = mat4.create();
				for (let i = auxStack.length - 1; i >= 0; i--) {
					let au = [];
					mat4.multiply(auxMatrix, auxMatrix/*.slice(0)*/, auxStack[i]);
				}

				//calculamos la posición de la luz
				let lPos = vec4.fromValues(1.0, 1.0, 1.0, 1.0);
				let aux = vec4.fromValues(1.0, 1.0, 1.0, 0.0);

				vec4.transformMat4(lPos, lPos, auxMatrix);
				vec4.subtract(lPos, lPos, aux);


				//se la pasamos al shader

				let isActive, lightPosUniformLocation, lightIntUniformLocation,
					lightSpecUniformLocation, lightDirUniformLocation, lightAmpUniformLocation;
				if (luz.entity.tipo == "puntual") {
					isActive = gl.getUniformLocation(glProgram[window.program], `uLight[${contLuces}].isActive`);
					lightPosUniformLocation = gl.getUniformLocation(glProgram[window.program], `uLight[${contLuces}].position`);
					lightIntUniformLocation = gl.getUniformLocation(glProgram[window.program], `uLight[${contLuces}].color`);
					lightSpecUniformLocation = gl.getUniformLocation(glProgram[window.program], `uLight[${contLuces}].specColor`);
				}
				else if (luz.entity.tipo == "dirigida") {
					isActive = gl.getUniformLocation(glProgram[window.program], `uSpotLight[${contLuces}].isActive`);
					lightPosUniformLocation = gl.getUniformLocation(glProgram[window.program], `uSpotLight[${contLuces}].position`);
					lightIntUniformLocation = gl.getUniformLocation(glProgram[window.program], `uSpotLight[${contLuces}].color`);
					lightSpecUniformLocation = gl.getUniformLocation(glProgram[window.program], `uSpotLight[${contLuces}].specColor`);
					lightDirUniformLocation = gl.getUniformLocation(glProgram[window.program], `uSpotLight[${contLuces}].direction`);
					lightAmpUniformLocation = gl.getUniformLocation(glProgram[window.program], `uSpotLight[${contLuces}].amplitude`);
					gl.uniform4fv(lightDirUniformLocation, luz.entity.direccion);
					gl.uniform1f(lightAmpUniformLocation, luz.entity.amplitud);
				}

				gl.uniform1i(isActive, 1);
				gl.uniform4fv(lightPosUniformLocation, lPos);
				gl.uniform3fv(lightIntUniformLocation, luz.entity.intensidad);
				gl.uniform3fv(lightSpecUniformLocation, luz.entity.intensidadSpecular);

				contLuces++;
			}
		}
	}

	/**
	 * DibujarLucesActivasSombras realiza el recorrido a través del árbol de las luces y calcula
	 * las matrices view desde cada luz
	 */
	dibujarLucesActivasSombras() {
		//dibujar ambient light
		let contLuces = 0;
		lightTransformations = [];
		for (let i = 0; i < this.luzRegistro.length; i++) {
			let luz = this.luzRegistro[i];
			if (luz.activa) {

				let auxStack = [];
				let auxLuz = luz;
				while (auxLuz = auxLuz.dad) {
					if (auxLuz.entity !== undefined)
						auxStack.push(auxLuz.entity.matrix);
				}
				//tenemos el recorrido de la cámara a la raíz en auxStack
				//recorremos la lista auxiliar invertida
				let auxMatrix = mat4.create();
				for (let i = auxStack.length - 1; i >= 0; i--) {
					let au = [];
					mat4.multiply(auxMatrix, auxMatrix/*.slice(0)*/, auxStack[i]);
				}

				lightTransformations.push([luz.entity, auxMatrix]);

				//el resultado lo invertimos y tenemos la matrix View desde la luz
				viewLightMatrix[contLuces] = [];
				mat4.invert(viewLightMatrix[contLuces], auxMatrix.slice(0));
				contLuces++;
			}
		}

	}

	/**
	 * Dibujar en la escena las luces que tengamos activas, para ello recore las matrices calculadas
	 * en el dibujarLucesActivasSombras
	 */
	dibujarLucesActivas() {
		let contLuces = 0;
		for (contLuces in lightTransformations) {

			//calculamos la posición de la luz
			let lPos = vec4.fromValues(1.0, 1.0, 1.0, 1.0);
			let aux = vec4.fromValues(1.0, 1.0, 1.0, 0.0);

			vec4.transformMat4(lPos, lPos, lightTransformations[contLuces][1]);
			vec4.subtract(lPos, lPos, aux);

			//se la pasamos al shader
			let isActive, lightPosUniformLocation, lightIntUniformLocation,
				lightSpecUniformLocation, lightDirUniformLocation, lightAmpUniformLocation;
			if (lightTransformations[contLuces][0].tipo == "puntual") {
				isActive = gl.getUniformLocation(glProgram[window.program], `uLight[${contLuces}].isActive`);
				lightPosUniformLocation = gl.getUniformLocation(glProgram[window.program], `uLight[${contLuces}].position`);
				lightIntUniformLocation = gl.getUniformLocation(glProgram[window.program], `uLight[${contLuces}].color`);
				lightSpecUniformLocation = gl.getUniformLocation(glProgram[window.program], `uLight[${contLuces}].specColor`);
			}
			else if (lightTransformations[contLuces][0].tipo == "dirigida") {
				isActive = gl.getUniformLocation(glProgram[window.program], `uSpotLight[${contLuces}].isActive`);
				lightPosUniformLocation = gl.getUniformLocation(glProgram[window.program], `uSpotLight[${contLuces}].position`);
				lightIntUniformLocation = gl.getUniformLocation(glProgram[window.program], `uSpotLight[${contLuces}].color`);
				lightSpecUniformLocation = gl.getUniformLocation(glProgram[window.program], `uSpotLight[${contLuces}].specColor`);
				lightDirUniformLocation = gl.getUniformLocation(glProgram[window.program], `uSpotLight[${contLuces}].direction`);
				lightAmpUniformLocation = gl.getUniformLocation(glProgram[window.program], `uSpotLight[${contLuces}].amplitude`);
				gl.uniform4fv(lightDirUniformLocation, lightTransformations[contLuces][0].direccion);
				gl.uniform1f(lightAmpUniformLocation, lightTransformations[contLuces][0].amplitud);
			}

			gl.uniform1i(isActive, 1);
			gl.uniform4fv(lightPosUniformLocation, lPos);
			gl.uniform3fv(lightIntUniformLocation, lightTransformations[contLuces][0].intensidad);
			gl.uniform3fv(lightSpecUniformLocation, lightTransformations[contLuces][0].intensidadSpecular);

			contLuces++;
		}
	}
	//=================================FIN LUCES============================

	//=================================INICIO SHADERS=======================
	anyadirShader(vs, fs){
		cargarShaders()
	}


	//=================================FIN SHADERS=======================

	//=================================INICIO MALLAS============================
	//TAG.43	Funciones para crear mallas y animaciones
	/**
	 * Se le pasa un recurso y un hermano si queremos que
	 * cuelgue de la estructura de alguno de ellos.
	 * @param  {string} nombre
	 * @param  {[type]} recurso
	 * @param  {TNodo | undefined} hermano
	 * @return {TNodo}
	 */
	crearNodoMalla(nombre, recurso, textura, hermano) {
		if (hermano !== undefined) {
			var traMalla = new TNodo(nombre + "_T", new TTransf(), hermano.dad);
			var rotMalla = new TNodo(nombre + "_R", new TTransf(), traMalla);
			var escMalla = new TNodo(nombre + "_S", new TTransf(), rotMalla);
			var malla = new TNodo(nombre, new TMalla(recurso, textura), escMalla);
		} else {
			var traMalla = new TNodo(nombre + "_T", new TTransf(), this.escena);
			var rotMalla = new TNodo(nombre + "_R", new TTransf(), traMalla);
			var escMalla = new TNodo(nombre + "_S", new TTransf(), rotMalla);
			var malla = new TNodo(nombre, new TMalla(recurso, textura), escMalla);
		}
		this.mallaRegistro.push(malla);
		return malla;
	}

	/**
	 * Mover la malla en x, y, z
	 * @param  {string} nombre
	 * @param  {nombre} x
	 * @param  {nombre} y
	 * @param  {nombre} z
	 */
	moverMalla(nombre, x, y, z) {
		let malla = this.mallaRegistro.find(x => x.name == nombre);
		if (malla !== undefined) {
			malla.dad.dad.dad.entity.trasladar(x, y, z);
			return true;
		}
	}
	/**
	 * Mover la malla a la posición x, y, z
	 * @param  {string} nombre
	 * @param  {nombre} x
	 * @param  {nombre} y
	 * @param  {nombre} z
	 */
	moverMallaA(nombre, x, y, z) {
		let malla = this.mallaRegistro.find(x => x.name == nombre);
		if (malla !== undefined) {
			let matrix = malla.dad.dad.dad.entity.matrix;
			matrix[12] = x;
			matrix[13] = y;
			matrix[14] = z;
			return true;
		}
	}
	/**
	 * Rotar una malla en un eje
	 * @param  {string} nombre
	 * @param  {number} grados
	 * @param  {string} eje
	 */
	rotarMalla(nombre, grados, eje) {
		let malla = this.mallaRegistro.find(x => x.name == nombre);
		if (malla !== undefined) {
			malla.dad.dad.entity.rotar(grados, eje);
			return true;
		}
	}
	/**
	 * Escalar la malla con el factor q
	 * @param  {string} nombre
	 * @param  {number} q
	 */
	escalarMalla(nombre, q) {
		let malla = this.mallaRegistro.find(x => x.name == nombre);
		if (malla !== undefined) {
			malla.dad.entity.escalar(q, q, q);
			return true;
		}
	}

	/**
	 * Escalar la malla especificando los parámetros x, y, z
	 * @param  {string} nombre
	 * @param  {number} x
	 * @param  {number} y
	 * @param  {number} z
	 */
	escalarMallaXYZ(nombre, x, y, z) {
		let malla = this.mallaRegistro.find(x => x.name == nombre);
		if (malla !== undefined) {
			malla.dad.entity.escalar(x, y, z);
			return true;
		}
	}

	/**
	 * Eliminar la malla de la escena que pasemos por parámetro
	 * @param  {string} nombre
	 */
	borrarMalla(nombre) {
		let malla = this.mallaRegistro.find(x => x.name == nombre);
		if (malla !== undefined) {
			malla.dad.dad.dad.dad.removeChild(malla.dad.dad.dad);
			malla.dad.dad = undefined;
			malla.dad = undefined;
			malla = undefined;
		}
	}
	//=================================FIN MALLAS============================

	//============================Animaciones==========================
	//
	//TAG.20	Estructura básica de la animación (Constructor, destructor)
	//TAG.23	Dibujado (begindraw, enddraw, matriz model…)
	//El dibujado es el mismo que el de las mallas, ya que son un conjunto de 
	//mallas hermanas
	/**
	 * Crear nodo animación
	 * @param  {string} nombre
	 * @param  {string} recurso
	 * @param  {number} numeroFrames
	 * @param  {TNodo} hermano
	 */
	crearNodoAnimacion(nombre, recurso, numeroFrames, hermano) {
		if (hermano !== undefined) {
			var traMalla = new TNodo(nombre + "_T", new TTransf(), hermano.dad);
			var rotMalla = new TNodo(nombre + "_R", new TTransf(), traMalla);
			var escMalla = new TNodo(nombre + "_S", new TTransf(), rotMalla);

			var animacion = new TNodo(nombre, new TTransf(), escMalla);

			//TAG.21	Datos de animaciones, mallas, texturas, materiales (multiples, con llamadas al gestor de recursos)
			for (var i = 0; i < numeroFrames; i++) {
				var malla = new TNodo(nombre + "_" + i, new TMalla(recurso + "" + i, undefined), animacion);
				if (i != 0) {
					malla._active = 0;
				}
			}
		} else {
			var traMalla = new TNodo(nombre + "_T", new TTransf(), this.escena);
			var rotMalla = new TNodo(nombre + "_R", new TTransf(), traMalla);
			var escMalla = new TNodo(nombre + "_S", new TTransf(), rotMalla);

			var animacion = new TNodo(nombre, new TTransf(), escMalla);

			//TAG.21	Datos de animaciones, mallas, texturas, materiales (multiples, con llamadas al gestor de recursos)
			for (var i = 0; i < numeroFrames; i++) {
				var malla = new TNodo(nombre + "_" + i, new TMalla(recurso + "" + i, undefined), animacion);
				if (i != 0) {
					malla._active = 0;
				}
			}
		}
		this.animRegistro.push(animacion);
		this.mallaRegistro.push(animacion);
		return malla;
	}

	//TAG.22	Getión temporal de las animaciones (frames…)
	iterar() {
		for (var i = 0; i < this.animRegistro.length; i++) {
			this.siguienteMallaAnimada(this.animRegistro[i]._name);
		}
	}

	siguienteMallaAnimada(nombre) {
		var pos = -1;

		for (var i = 0; i < this.animRegistro.length; i++) {
			if (nombre == this.animRegistro[i].name) {
				pos = i;
				break;
			}
		}

		var numMallas = this.animRegistro[pos]._childs.length;
		var activa = -1;
		for (var i = 0; i < numMallas; i++) {
			if (1 == this.animRegistro[pos]._childs[i]._active) {
				activa = i;
				break;
			}
		}
		this.animRegistro[pos]._childs[activa]._active = 0;
		activa++;
		if (activa >= numMallas) {
			activa = 0;
		}
		this.animRegistro[pos]._childs[activa]._active = 1;
	}

	borrarRegistro(nombre) {
		let animacion = this.animRegistro.find(x => x.name == nombre);
		if (animacion !== undefined) {
			animacion.dad.dad.dad.dad.removeChild(animacion.dad.dad.dad);
			animacion = undefined;
		}
	}
	//=================================FIN ANIMACION============================

}
