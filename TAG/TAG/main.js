



/*De esto nada
function verPunteros(){
    var pila={};
    pila.property=['hola', 'que tal'];

    var malla=new TMalla(pila);

    console.log(pila.property);
    console.log(malla.malla);

    malla.suma();

    console.log(pila.property);
    console.log(malla.malla);

}*/


//main donde creamos el árbol
function inicializar(){

    var motor = new TMotor("gestorRecursos");
	//nodo raíz
	var escena=new TNodo("escena");

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

    //el nodo del chasis de la moto (malla) será el hijo de este último nodo
    //Al ser nodo hoja, este nodo no tiene ninguna transformación (ver diapositivas
    //del final del seminario 2 para comprender esto mejor)
    var moto=new TNodo("moto", new Tjuh Malla("moto"), trasMoto);

    //Ahora, mediante el mismo concepto, las ruedas de la moto tendrán su nodo de rotación,
    //de traslación y de malla. De esta forma, a la malla de la rueda, en WebGL se le aplicarán
    //las siguientes transformaciones en este orden para colocarla correctamente en la escena:
    //1-rotación de la moto, 2-traslación de la moto, 3-rotación de la rueda, 4-traslación de la rueda.
    //De esta forma las ruedas siempre seguirán el movimiento de la moto además de su movimiento propio

    var rotRueda1=new TNodo("rotRueda1", new TTransf(), trasMoto);
    var trasRueda1=new TNodo("trasRueda1", new TTransf(), rotRueda1);
    var rueda1=new TNodo("rueda1", new TMalla("rueda1"), trasRueda1);

    var rotRueda2=new TNodo("rotRueda2", new TTransf(), trasMoto);
    var trasRueda2=new TNodo("trasRueda2", new TTransf(), rotRueda2);
    var rueda2=new TNodo("rueda2", new TMalla("rueda2"), trasRueda2);


    /*Podemos probar a eliminar la rotRueda1 del árbol.
    Entonces la malla rueda1 ya no se dibujará*/
    //trasMoto.removeChild(rotRueda1);

    //probamos a recorrer el árbol
    escena.draw();

}


/* De momento esto nada */
/*function loadModel () {
    if (window.File && window.FileReader && window.FileList && window.Blob) {

    }
}*/
