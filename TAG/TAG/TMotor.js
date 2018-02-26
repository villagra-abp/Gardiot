
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
		
	}

	
}