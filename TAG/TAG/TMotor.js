
//Clase de la fachada del motor de TAG

class TMotor{

 	constructor (gestorRecursos) {
        this.escena = new TNodo('Raiz', undefined, undefined);
        this.gestorRecursos = gestorRecursos;
    }
	/**
	 * Crea un nodo asociandolo a un padre
	 * 
	 * @param  {string} nombre
	 * @param  {TNodo} padre
	 * @param  {TRecurso | null} entidad
	 * @return {TNodo}
	 */
	crearNodo(nombre, padre, entidad){
		var nodo = undefined;
		if(padre !== undefined){
			nodo = new TNodo(nombre, entidad, padre);
		}
		return nodo;
	}

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



	
}