/**
   * TAG.24	Estructura básica del gestor de recursos (constructor, destructor, vectores de recursos)
	 * Gestor de recursos. Abre cada recurso apuntando
   * a la dirección de memoria.
	 */
class TGestorRecursos {
  //Se ha creado un tipo map para que sea más sencillo el código de recuperar
  //recursos. Con el map le pasamos el nombre (rosa, shader, etc.) y si está
  //está en el map, lo devolvemos, si no, lo cargamos
  constructor() {
    this._recursos = new Map();
  }

  /**
   * TAG.25	Obtener recurso (gestión adecuada de memoria)
	 * Obtiene un recurso bajo los parametros especificados. Lo hemos resuelto con
   * un mapa, cuya key es el nombre de la malla y el valor es el recurso en si.
   * De esta forma es sencillo acceder y comprobar si existe un recurso en memoria.
	 * @param  {String} nombre Nombre del recurso
	 * @param  {String} tipo Malla, material, shader o textura
   * @param  {String} textura
   * @return {TRecurso} 
	 */
  getRecurso(nombre, tipo, textura) {
    //Si no encuentra el recurso (es igual a undefined), lo cargamos de memoria
    if (this._recursos.get(nombre) === undefined) {
      //creamos el recurso, del tipo que sea
      let newRecurso;
      if (tipo == 'malla')
        newRecurso = new TRecursoMalla(nombre);
      else if (tipo == 'material')
        newRecurso = new TRecursoMaterial(nombre);
      else if (tipo == 'shader')
        newRecurso = new TRecursoShader(nombre);
      else if (tipo == 'textura')
        newRecurso = new TRecursoTextura(nombre);
      //cargamos el fichero
      newRecurso.cargarFichero(nombre, textura);

      //lo anyadimos al vector (mapa) de recursos
      this._recursos.set(nombre, newRecurso);
    }
    //devolvemos recurso
    return this._recursos.get(nombre);

  }
}
