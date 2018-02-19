
//Clase de la fachada del motor de TAG

class TMotorTAG{

 	constructor (escena, gestorRecursos) {
        this.escena = escena;
        this.gestorRecursos = gestorRecursos;
    }
	/**
		crea un nodo, se le tiene que pasar por parametro
		un padre y la entidad que se queiere almacenar
	*/
	crearNodo(nombre, padre, entidad){
		var nodo = new TNodo(nombre, padre, entidad);

		return nodo;
	}

	
}