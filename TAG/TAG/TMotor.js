
//Clase de la fachada del motor de TAG

class TMotor{

 	constructor (gestorRecursos) {
        this.escena = new TNodo('Raiz', undefined, undefined);
        this.gestorRecursos = gestorRecursos;
    }
	/**
	 * Crea un nodo asociandolo a un padre, se le tiene que especificar el
	 * tipo (tform, luz, malla, camara)
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



	
}