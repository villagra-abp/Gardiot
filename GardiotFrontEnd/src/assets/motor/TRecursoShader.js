class TRecursoShader extends TRecurso {
  constructor(nombre) {
    super(nombre);
    this._shader = '';
  }

  cargarFichero(nombre) {
    let cargado, shader;
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


