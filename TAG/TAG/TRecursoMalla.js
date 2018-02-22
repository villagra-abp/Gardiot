class TRecursoMalla extends TRecurso{

  constructor (){
    super();
    this._vertices;
    this._normales;
    this._texturas;
    this._vertTriangulos;
    this._normTriangulos;
    this._texTriangulos;
    this._nTriangulos;
    this._pila= [];

  }
  cargarFichero(nombre){
    //Estructura de buffer de vertices
    
    var triangleVertices=[
    //de abajo a la izquierda a arriba a la derecha
        -0.5, -0.5, 0.0,
        0.5, -0.5, 0.0,
        0.5, 0.5, 0.0,

        0.5, 0.5, 0.0,
        -0.5, 0.5, 0.0,
        -0.5, -0.5, 0.0
    ];
  }
  draw(){
    //volcar datos de los buffers en webgl
  }
}


//http://www.opengl-tutorial.org/es/beginners-tutorials/tutorial-7-model-loading/
