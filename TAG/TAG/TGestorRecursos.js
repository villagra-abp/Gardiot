// Gestor de recursos. Abre cada recurso apuntando
// a la dirección de memoria. Julián Sánchez García y Mariano López Escudero

// aquí debemos de llamar al RECURSO
class TGestorRecursos {
  //lo que de verdad se quiere es un array
    //var recursos = new TRecurso('caca');
    constructor (nombre) {
      this._nombre=nombre;
      this.recursos=[];
    }

      getRecurso(nombre){

      var encontrado = false;
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
      return nombre;
    }
  }



/*
function loadResource(malla){

  console.log("llamada al gestor "+malla.toString());

  var object;
  // comprobar que existe en memoria

  for(var i = 0; i <= arrayResource.length; i++){
    // si existe devolver la dirección de memoria
    if(arrayResource.length != 0 && arrayResource[i] == malla){
      console.log("Ya está en Memoria "+malla.toString());
    }else{
      // si no existe cargar el recursos
      console.log("Cargo el fichero y lo meto Memoria "+malla.toString());
      object = malla;
    }

  }
  arrayResource.push(object);
  console.log(arrayResource.length);

  return 0;

}
*/
