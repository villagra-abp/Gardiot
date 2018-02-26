
//Clase de la fachada del motor de TAG

class TMotor{

 	constructor (gestorRecursos) {
        this.escena = new TNodo('Raiz', undefined, undefined);
        this.gestorRecursos = gestorRecursos;
        this.luzRegistro = [];
        this.luzActiva = [];
        this.camaraRegistro = [];
        this.camaraActiva = -1;
        this.mallaRegistro = [];
    }
	/**
	 * Crea un nodo asociandolo a un padre
	 * 
	 * @param  {string} nombre
	 * @param  {TNodo} padre
	 * @param  {TRecurso | null} entidad
	 * @return {TNodo}
	 */
	crearNodo(nombre, entidad, padre){
		var nodo = undefined;
		if(padre !== undefined){
			nodo = new TNodo(nombre, entidad, padre);
		}
		return nodo;
	}

<<<<<<< HEAD
	draw(){
		canvas=document.getElementById("my-canvas");
	    try{
	        gl=canvas.getContext("webgl");
	    }
	    catch(e){

	    }

	    if(gl){
	        console.log("Start drawing");
	        

	        //inicializamos el árbol (esto no se hará aquí)
	        inicializar();

	        //Esto ya si, es la inicialización de la librería gráfica
	        //configuramos los shaders y le pasamos el nombre de los ficheros 
	        //que tenemos en recursos/shaders
	        //esta función está en content/utilities
	        configurarShaders('standardShader.vs', 'standardShader.fs');


	        //Esto es algo así como coger los parámetros de matriz proyección y matriz
	        //view del shader. Una vez los hemos cogido, podemos hacer las transformaciones
	        //En setupWebGL, para este ejemplo, inicializo las matrices de modelo y proyección y
	        //le aplico algunas transformaciones
	        glProgram.pMatrixUniform=gl.getUniformLocation(glProgram, "uPMatrix");
	        glProgram.mvMatrixUniform=gl.getUniformLocation(glProgram, "uMVMatrix");

	        setupWebGL();

	        //entonces aquí le vuelvo a pasar las matrices al shader para que se pueda visualizar bien
	        gl.uniformMatrix4fv(glProgram.pMatrixUniform, false, pMatrix);
    		gl.uniformMatrix4fv(glProgram.mvMatrixUniform, false, matrixModel);


	        
    		//dibujado del árbol, cuando llegue a la hoja, la dibujará en el canvas
	        escena.draw();
	    }
	    else{
	        alert("Error: Tu navegador no soporta WebGL");
	    }
	}

=======
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
			console.log("crea un hermano");
			var rotCam = this.crearNodo(nombre + "_R",  new TTransf(), hermano.dad);
			var traCam = this.crearNodo(nombre + "_T",  new TTransf(), rotCam);
			var cam = this.crearNodo(nombre, new TCamara(perspective), traCam);
		}else{
			console.log("crea en raiz");
			var rotCam = this.crearNodo(nombre + "_R", new TTransf(), this.escena);
			var traCam = this.crearNodo(nombre + "_T",  new TTransf(), rotCam);
			var cam = this.crearNodo(nombre, new TCamara(perspective), traCam);
		}
		this.camaraRegistro.push(cam);
		
		return cam;
	}
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

		if( hermano !== undefined){
			console.log("crea un hermano");
			var rotLuz = this.crearNodo(nombre + "_R",  new TTransf(), hermano.dad);
			var traLuz = this.crearNodo(nombre + "_T",  new TTransf(), rotLuz);
			var luz = this.crearNodo(nombre, new TLuz(intensidad), traLuz);
		}else{
			console.log("crea en raiz");
			var rotLuz = this.crearNodo(nombre + "_R", new TTransf(), this.escena);
			var traLuz = this.crearNodo(nombre + "_T",  new TTransf(), rotLuz);
			var luz = this.crearNodo(nombre, new TLuz(intensidad), traLuz);
		}
		this.luzRegistro.push(luz);
		this.luzActiva.push(0);
		return luz;
	}

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
			console.log("crea un hermano");

			var rotMalla = this.crearNodo(nombre + "_R", new TTransf(), hermano.dad);
			var traMalla = this.crearNodo(nombre + "_T", new TTransf(), rotMalla);
			var escMalla = this.crearNodo(nombre + "_S", new TTransf(), traMalla);
			var malla = this.crearNodo(nombre, new TMalla(recurso), escMalla);
		}else{
			console.log("crea en raiz");
			var rotMalla = this.crearNodo(nombre + "_R", new TTransf(), this.escena);
			var traMalla = this.crearNodo(nombre + "_T",  new TTransf(), rotMalla);
			var escMalla = this.crearNodo(nombre + "_S", new TTransf(), traMalla);
			var malla = this.crearNodo(nombre, new TMalla(recurso), escMalla);
		}
		this.mallaRegistro.push(malla);
		return malla;
	}
/** se le pasa el ?? por parametro y activa dicha camara */
	/*activarCamara(pos){
		if(pos>=0 && pos<=this.camaraActiva.length){
			var lastPos= this.camaraRegistro.indexOf(1);
			this.camaraActiva[lastPos] = 0;
			this.camaraActiva[pos] = 1;
			return this.camaraRegistro[pos];
		}else{
			return "no existe";
		}
	}*/
>>>>>>> feature/fachada

	/** se le pasa el nombre por parametro y activa dicha camara */
	activarCamara(nombre){

		var pos = -1;
		
		for (var i = 0; i< this.camaraRegistro.length; i++){
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
			return undefined;
		}

	}

	activarLuz(nombre){
		var pos = -1;
		
		for (var i = 0; i< this.luzRegistro.length; i++){
			if(nombre == this.luzRegistro[i].name){
				pos = i;
				break;
			}
		}
		if(pos>=0){
			this.luzActiva[pos] = 1;
			return this.luzRegistro[pos];
		}else{
			return undefined;
		}
	}

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
			return this.luzRegistro[pos];
		}else{
			return undefined;
		}
	}


	draw(){
		console.log("draw camara");
		console.log(this.camaraRegistro[this.camaraActiva]);
		console.log("draw Luces");
		for(var i = 0; i<this.luzActiva.length; i++){
			if(this.luzActiva[i]==1){
				console.log(this.luzRegistro[i]);
			}
		}
		console.log("draw Mallas");
		for(var i = 0; i<this.luzActiva.length; i++){
			console.log(this.mallaRegistro[i]);
		}
	}

	
}