class TRecursoTextura extends TRecurso{

  constructor (nombre){
    super(nombre);
    this._img=new Image();
    this._img.texture;
    this._img.index=JSON.parse(JSON.stringify(texturas++));
  }

  cargarFichero(nombre){
  	console.log(this._nombre);
  	this._img.onload=function(){
	    this.texture = gl.createTexture();
	 
	    //activar por defecto las texturas activadas


	    if( !gl.isTexture(this.texture) )
	    {
	        console.error("Error: Texture is invalid");
	    }

  	}
    this._img.src="/recursos/texturas/"+nombre;
  }

  get index(){
  	console.log(this._nombre);
  	return this._index;
  }
}
