class TRecursoShader extends TRecurso {
  constructor(nombre) {
    super(nombre);
    this._shader = '';
  }
  /**
   * TAG.37	Estructura básica del shader (constructor, destructor)
   * @param  {String} nombre Ruta del archivo sin extension
   * @return {boolean} Booleano segun si se ha cargado
   */
  cargarFichero(nombre) {
    let cargado, shader;
    //TAG.38	Lectura de disco (con parser propio) y guardarlo
    loadTextResource('/recursos/shaders/' + nombre + '.glsl', function (vsErr, vsText) {
      if (vsErr) {
        cargado = false;
      }
      else {
        shader = vsText;
        cargado = true;
      }
    });
    this._shader = shader;
    return cargado;
  }

  get shader() {
    return this._shader;
  }
}


