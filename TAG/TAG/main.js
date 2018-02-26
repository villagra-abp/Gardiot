

function initWebGL(){
    canvas=document.getElementById("my-canvas");
    try{
        gl=canvas.getContext("webgl");
    }
    catch(e){

    }

    if(gl){
        console.log("WebGL running");
        

        //inicializamos el árbol
        inicializar();

        
        //configuramos los shaders y le pasamos el nombre de los ficheros 
        //que tenemos en recursos/shaders
        configurarShaders('standardShader.vs', 'standardShader.fs');

        escena.draw();
    }
    else{
        alert("Error: Tu navegador no soporta WebGL");
    }
}





//main donde creamos el árbol
function inicializar(){

<<<<<<< HEAD

    
=======
    var motor = new TMotor("gestorRecursos");
    var camara1 = motor.crearNodoCamara("camara1", true, undefined);
    var camara2 = motor.crearNodoCamara("camara2", true, undefined);
    var camara3 = motor.crearNodoCamara("camara3", true, undefined);
    var camara4 = motor.crearNodoCamara("camara4", true, undefined);

    var luz1 = motor.crearNodoLuz("Luz1", 0.1, undefined);
    var luz2 = motor.crearNodoLuz("Luz2", 0.1, undefined);
    var luz3 = motor.crearNodoLuz("Luz3", 0.1, undefined);
    var luz4 = motor.crearNodoLuz("Luz4", 0.1, undefined);

    var malla1 = motor.crearNodoMalla("Malla1", "recurso", undefined );
    var malla2 = motor.crearNodoMalla("Malla2", "recurso", undefined );
    var malla3 = motor.crearNodoMalla("Malla3", "recurso", undefined );
    var malla4 = motor.crearNodoMalla("Malla4", "recurso", undefined );

    console.log("activaciones camara:")
    console.log(motor.activarCamara("camara1")); 
    console.log(motor.activarCamara("camara3"));
    console.log(motor.activarCamara("camara5"));


    console.log("activaciones luz:");
    console.log(motor.activarLuz("Luz1"));
    console.log(motor.activarLuz("Luz3"));
    console.log(motor.activarLuz("Luz2"));
    console.log(motor.activarLuz("asb"));

    console.log("desactivaciones luz:");
    console.log(motor.desactivarLuz("Luz1"));
    //console.log(motor.desactivarLuz("Luz2"));
    console.log(motor.activarLuz("asb"));

    
    console.log("draw");
    motor.draw();

    /*
>>>>>>> feature/fachada
	//nodo raíz
	escena=new TNodo("escena");

    //Nodo que controlará la rotación de la luz. Su hijo será el nodo
    //que controlará la traslación de la luz
    var rotLuz=new TNodo("rotLuz", new TTransf(), escena);
    var trasLuz=new TNodo("trasLuz", new TTransf(), rotLuz);
    //el nodo luz será hijo de este último nodo
    var luz=new TNodo("luz", new TLuz(), trasLuz);

    //Nodo que controlará la rotación de la cámara
    var rotCamara=new TNodo("rotCamara", new TTransf(), escena);
    //su hijo, la cámara
    var camara=new TNodo("camara", new TCamara(), rotCamara);

	//ahora tendremos una moto en la escena. Primero tendremos el nodo
    //que controlará la rotación de la moto
    var rotMoto=new TNodo("rotMoto", new TTransf(), escena);

    //nodo que controlará la traslación de la moto
    var trasMoto=new TNodo("trasMoto", new TTransf(), rotMoto);



    //voy a sustituir la moto por el cubo que tenemos
    //var cubo=new TNodo("cubo", new TMalla('cubo'), trasMoto);

    var chair=new TNodo("chair", new TMalla('chair'), trasMoto);



    //escena.draw();

    /*
    //el nodo del chasis de la moto (malla) será el hijo de este último nodo
    //Al ser nodo hoja, este nodo no tiene ninguna transformación (ver diapositivas
    //del final del seminario 2 para comprender esto mejor)
<<<<<<< HEAD
    var moto=new TNodo("moto", new TMalla("moto"), trasMoto);
=======
    //var moto=new TNodo("moto", new Tjuh Malla("moto"), trasMoto);
>>>>>>> feature/fachada

    //Ahora, mediante el mismo concepto, las ruedas de la moto tendrán su nodo de rotación,
    //de traslación y de malla. De esta forma, a la malla de la rueda, en WebGL se le aplicarán
    //las siguientes transformaciones en este orden para colocarla correctamente en la escena:
    //1-rotación de la moto, 2-traslación de la moto, 3-rotación de la rueda, 4-traslación de la rueda.
    //De esta forma las ruedas siempre seguirán el movimiento de la moto además de su movimiento propio
    /*
    var rotRueda1=new TNodo("rotRueda1", new TTransf(), trasMoto);
    var trasRueda1=new TNodo("trasRueda1", new TTransf(), rotRueda1);
    var rueda1=new TNodo("rueda1", new TMalla("rueda1"), trasRueda1);

    var rotRueda2=new TNodo("rotRueda2", new TTransf(), trasMoto);
    var trasRueda2=new TNodo("trasRueda2", new TTransf(), rotRueda2);
    var rueda2=new TNodo("rueda2", new TMalla("rueda2"), trasRueda2);
    */

<<<<<<< HEAD
=======

>>>>>>> feature/fachada
    //Podemos probar a eliminar la rotRueda1 del árbol.
    //Entonces la malla rueda1 ya no se dibujará
    //trasMoto.removeChild(rotRueda1);

    //probamos a recorrer el árbol
<<<<<<< HEAD
    //escena.draw();
=======
    escena.draw();
    */
>>>>>>> feature/fachada

}


/* De momento esto nada */
/*function loadModel () {
    if (window.File && window.FileReader && window.FileList && window.Blob) {

    }
}*/
