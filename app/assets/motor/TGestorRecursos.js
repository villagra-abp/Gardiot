// Gestor de recursos. Abre cada recurso apuntando
// a la dirección de memoria. Julián Sánchez García y Mariano López Escudero


class TGestorRecursos {

//Se ha creado un tipo map para que sea más sencillo el código de recuperar
//recursos. Con el map le pasamos el nombre (rosa, shader, etc.) y si está
//está en el map, lo devolvemos, si no, lo cargamos
    constructor () {
      this._recursos=new Map();
    }

    //a getRecurso le pasaremos el nombre del recurso (rosa, shader.fs, suelo...)
    //y el tipo, que podrá ser: malla, material, shader o textura
      getRecurso(nombre, tipo, textura){
        //Si no encuentra el recurso (es igual a undefined), lo cargamos de memoria
        if(this._recursos.get(nombre)===undefined){
          console.log('Cargamos fichero '+nombre+' a memoria');
          //creamos el recurso, del tipo que sea
          let newRecurso;
          if(tipo=='malla')
            newRecurso=new TRecursoMalla(nombre);
          else if(tipo=='material')
            newRecurso=new TRecursoMaterial(nombre);
          else if(tipo=='shader')
            newRecurso=new TRecursoShader(nombre);
          else if(tipo=='textura')
            newRecurso=new TRecursoTextura(nombre);
          //cargamos el fichero
          if(textura!==undefined)
            newRecurso.cargarFichero(nombre, textura);
          else
            newRecurso.cargarFichero(nombre);


          //lo anyadimos al vector (mapa) de recursos
          this._recursos.set(nombre, newRecurso);
        }
        else{
          console.log('El/la '+nombre+' ya estaba en memoria y se sirve');
        }
        //devolvemos recurso
        return this._recursos.get(nombre);

    }
  }
