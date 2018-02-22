// Gestor de recursos. Abre cada recurso apuntando
// a la dirección de memoria. Julián Sánchez García y Mariano López Escudero


class TGestorRecursos {

//Se ha creado un tipo map para que sea más sencillo el código de recuperar
//recursos. Con el map le pasamos el nombre (rosa, shader, etc.) y si está
//está en el map, lo devolvemos, si no, lo cargamos
    constructor (nombre) {
      this._nombre=nombre;
      this._recursos=new Map();
    }

    //a getRecurso le pasaremos el nombre del recurso (rosa, shader, suelo...)
    //y el tipo, que podrá ser: malla, material, shader, textura
      getRecurso(nombre, tipo){
        if(this._recursos.get(nombre)===undefined){
          let newRecurso;
          if(tipo=='malla')
            newRecurso=new TRecursoMalla();
          else if(tipo=='material')
            newRecurso=new TRecursoMaterial();
          else if(tipo=='shader')
            newRecurso=new TRecursoShader();
          else if(tipo=='textura')
            newRecurso=new TRecursoTextura();
          newRecurso.cargarFichero(nombre);
          this._recursos.set(nombre, newRecurso);

        }

        return this._recursos.get(nombre);
        

      /*var encontrado = false;
      var recursoNuevo;

      for (var i = 0; i < recursos.length; i++ && !encontrado) {
        if(recursos[i] != null && recursos[i] == nombre){
            console.log("Está el recurso: "+nombre.toString()+" y debemos cargarlo.");
            encontrado = true; // cargar recurso
        }
      }
      if(!encontrado){
        console.log("NO está el recurso: "+nombre.toString()+" y debemos añadirlo.");
        // cargar el fichero
        // recursoNuevo = new TRecurso(nombre);
        // recursos.push(recursoNuevo);

      }
      return nombre;*/
    }
  }
