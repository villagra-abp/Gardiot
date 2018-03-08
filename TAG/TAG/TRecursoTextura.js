class TRecursoTextura extends TRecurso{

  constructor (nombre){
    super(nombre);
    this._img=new Image();
  }

  cargarFichero(nombre){
  	this._img.onload=function(){
  		console.log(this);
  		console.log("Textura cargada");
  	}
    this._img.src="/recursos/texturas/"+nombre;
  }
}
