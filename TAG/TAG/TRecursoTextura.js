class TRecursoTextura extends TRecurso{

  constructor (nombre){
    super(nombre);
    this._img;
  }



  cargarFichero(nombre){
    this._img=new Image();
    this._img.src="/recursos/texturas/"+nombre;
    console.log(this._img);
  }
}
