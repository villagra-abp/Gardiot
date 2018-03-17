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
	    gl.bindTexture(gl.TEXTURE_2D, this.texture);
      	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this);

	    //activar por defecto las texturas activadas


	    if( !gl.isTexture(this.texture) )
	    {
	        console.error("Error: Texture is invalid");
	    }

  	}
    let relURL='';
    if(window.location.toString().indexOf('gardiot')>=0){
        relURL='https://gardiot.ovh/app/assets/motor/recursos/texturas/'+nombre;
    }
    else if(window.location.toString().indexOf('localhost:4200')>=0){
        relURL='http://localhost:4200/assets/motor/recursos/texturas/'+nombre;
    }
    else if(window.location.toString().indexOf('localhost:8080')>=0){
        relURL='/recursos/texturas/'+nombre;;
    }
    this._img.src=relURL;
  }

  get index(){
  	console.log(this._nombre);
  	return this._index;
  }
}
