/**
 * TAG.26	Estructura básica del recurso (constructor, destructor. Es virtual, vacío)
 */
class TRecurso {

  constructor(nombre) {
    this._nombre = nombre;
  }

  get nombre() {
    return this._nombre;
  }
}
