
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
	crearNodo(nombre, entidad, padre){
		var nodo = undefined;
		if(padre !== undefined){
			nodo = new TNodo(nombre, entidad, padre);
		}
		return nodo;
	}

	/**
	 * Crea una camara con todos los controladores
	 * si hermano se deja a nulo lo crea en la raiz
	 * si no se tiene que indicar un nodo que no sea de
	 * transformacion 
	 * @param  {strubg} nombre  Nombre de la planta
	 * @param  {TRecurso | null} hermano 
	 * @param  {Boolean} entidad 
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
		return cam;
	}

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
		return luz;
	}

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

		return malla;
	}

	
}