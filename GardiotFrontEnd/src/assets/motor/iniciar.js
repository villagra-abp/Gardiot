function iniciar(accion, jardin){
  console.log(jardin);
  window.canvas=null;

  window.jardin=jardin;
  //console.log(window.plantas);
  window.loading=[];//array que estará vacío si no hay nada cargándose

  //bucle movimiento
  window.frames=0;
  window.fpsInterval=0;
  window.startTime=0;
  window.now=0;
  window.then=0;
  window.elapsed=0;
  window.frameCount=0;
  window.interval;


  //inicialización de matrices
  window.matrixStack=[];//pila de matrices
  window.matrixModel = mat4.create();//matriz modelo
  matrixStack.push(matrixModel);
  window.matrixProjection=[];//matriz proyección
  window.invertedMView=[];//matriz view

  //DragAndDrop
  window.dragging = false;
  //window.plants = [];
  for (let value of window.jardin.plants) {
    value.isDragging = false;
    //window.plants.push(value);
  }

  //declaramos las variables necesarias para ejecutar el programa
  //las variables de WebGL empezarán siempre por gl para distinguirlas de
  //las variables del motor gráfico
  window.gl=null;
  window.glVertexShader=[];
  window.glFragmentShader=[];
  window.glProgram=[];

  window.vertexShaders=['shader.vs', 'shaderP.vs'];
  window.fragmentShaders=['shader.fs', 'shaderP.fs'];

  //inicializamos el gestor de recursos
  window.gestor=new TGestorRecursos();

  iniciamosWebGL('myCanvas');
  cargarShaders();

  //fachada
  window.motor = new TMotor(gestor);


  window.luz = motor.crearNodoLuz("luz1", 1.7, undefined);
  //var luz2 = motor.crearNodoLuz("luz2", 0.7, undefined);
  //var luz3 = motor.crearNodoLuz("luz3", 0.7, undefined);

  //camara de vista
  window.camara = motor.crearNodoCamara("camara1", true, undefined);

  //camara de edición
  window.camaraEdit=motor.crearNodoCamara("camara2", true, undefined);

  //window.mallaAnimada = motor.crearNodoAnimacion("animacion", ["chair", "bote", "Susan"], undefined);
  //motor.siguienteMallaAnimada("animacion");


  // window.malla2 = motor.crearNodoMalla("malla2", "bote", "madera.jpg",  undefined);

  //window.malla3 = motor.crearNodoMalla("malla3", "chair", undefined);

  //var malla4=motor.crearNodoMalla("malla4", "perejil", undefined);

  motor.escalarMalla("malla4", 0.2);

//suelo
let adjustX=0, adjustY=0;
let width=Math.floor(jardin.width/2), length=Math.floor(jardin.length/2);
if(jardin.width%2==0){
  adjustX=0.5;
  width=Math.ceil(jardin.width/2);
}

if(jardin.length%2==0){
  adjustY=0.5;
  length=Math.ceil(jardin.length/2);
}

  for(let i=-width+adjustX; i<=width; i++){
    for(let j=-length+adjustY; j<=length; j++){
      motor.crearNodoMalla("suelo"+i+'-'+j, "sueloPolly", "suelocesped.jpg", undefined);
      motor.escalarMallaXYZ("suelo"+i+'-'+j, 0.5, 0.1, 0.5);
      motor.moverMalla("suelo"+i+'-'+j, i, 0, j);
    }
  }

  // lechugas dragables
  for(let i=0; i<jardin.plants.length; i++){
    motor.crearNodoMalla(jardin.plants[i].id, "lechuga", "lechuga.jpg", undefined);
    motor.moverMalla(jardin.plants[i].id, jardin.plants[i].x, 0, jardin.plants[i].y);
  }

  /* OBJETOS DE PRUEBA */
  // LECHUGA
  for(let i=-2; i<0; i++){
    for(let j=-2; j<0; j++){
      motor.crearNodoMalla("lechuga2"+i+'-'+j, "lechuga", "lechuga.jpg", undefined);
      motor.escalarMalla("lechuga2"+i+'-'+j, 1.5);
      //motor.rotarMalla("planta"+i+'-'+j, -70, "x");
      // motor.moverMalla("lechuga"+i+'-'+j, 0.5*Math.random(), 0, 0.5*Math.random());
      motor.moverMalla("lechuga2"+i+'-'+j, 2*i, 0, 2*j);
    }
  }
  // CALABAZA
  motor.crearNodoMalla("calabaza", "calabaza", "calabaza.jpg", undefined);
  motor.escalarMalla("calabaza", 0.3);
  motor.rotarMalla("calabaza", -90, "x");
  motor.moverMalla("calabaza", 0, 0.1, 0);

  // TOMATERA
  for(let i=1; i<3; i++){
    for(let j=1; j<3; j++){
      motor.crearNodoMalla("tomatera"+i+'-'+j, "tomatera", "tomatera.png", undefined);
      motor.escalarMalla("tomatera"+i+'-'+j, 0.006);
      //motor.rotarMalla("planta"+i+'-'+j, -70, "x");
      // motor.moverMalla("lechuga"+i+'-'+j, 0.5*Math.random(), 0, 0.5*Math.random());
      motor.moverMalla("tomatera"+i+'-'+j, 2*i, 0, 2*j);
    }
  }
  // MACETAS
  for(let i=1; i<3; i++){
    for(let j=1; j<3; j++){
      motor.crearNodoMalla("maceta"+i+'-'+j, "maceta", "maceta.jpg", undefined);
      motor.escalarMalla("maceta"+i+'-'+j, 0.05);
      //motor.rotarMalla("planta"+i+'-'+j, -70, "x");
      // motor.moverMalla("lechuga"+i+'-'+j, 0.5*Math.random(), 0, 0.5*Math.random());
      motor.moverMalla("maceta"+i+'-'+j, 2*i, 0.1, 2*j);
    }
  }
  // PEREGIL
  motor.crearNodoMalla("peregil", "peregil", "peregil.jpg", undefined);
  motor.escalarMalla("peregil", 0.004);
  motor.rotarMalla("peregil", -90, "x");
  motor.moverMalla("peregil", 3, 0.1, -1);

  // ROSAS
  motor.crearNodoMalla("rosa", "rosa", "rosa.jpg", undefined);
  motor.escalarMalla("rosa", 0.01);
  motor.rotarMalla("rosa", -90, "x");
  motor.rotarMalla("rosa", 10, "y");
  motor.moverMalla("rosa", 1, 0.1, 3);

  // MARGARITAS
  motor.crearNodoMalla("margarita", "margarita", "margarita.jpg", undefined);
  motor.escalarMalla("margarita", 0.06);
  motor.rotarMalla("margarita", -90, "x");
  motor.moverMalla("margarita", 0, 0.5, 3);

  // CICA
  motor.crearNodoMalla("cyca2", "cyca2", "cyca2.jpg", undefined);
  motor.escalarMalla("cyca2", 0.1);
  motor.rotarMalla("cyca2", -90, "x");
  motor.moverMalla("cyca2", -1, 0.2, 6);

  // Arbol
  motor.crearNodoMalla("arbol", "arbol", "arbol.jpg", undefined);
  motor.escalarMalla("arbol", 0.3);
  motor.rotarMalla("arbol", -90, "x");
  motor.moverMalla("arbol", 0.5, 0.2, 3);







  //motor.moverMalla("malla1", -9, -15, -30);

  motor.escalarMalla("malla2", 0.5);
  motor.moverMalla("malla2", 0, 1, 0);

  motor.escalarMalla("animacion", 6);
  motor.moverMalla("animacion", 40, 50, 40);

  motor.moverMalla("malla3", 15, 25, 0);
  motor.escalarMalla("malla3", 6);
  motor.rotarMalla("malla3", 40, "x");



  motor.moverLuz("luz1", 0.0, 10.0, 10.0);
  //motor.moverLuz("luz2", 0.0, 10.0, 0.0);
  //motor.moverLuz("luz3", 0.0, -10.0, 0.0);



  //motor.rotarCamaraOrbital("camara1", 45, "y");
  //motor.rotarCamaraOrbital("camara1", -45, "x");

  //motor.moverCamaraA("camara2", 0,10, 0);
  motor.rotarCamara("camara1", -90, "x");
  motor.moverCamaraA("camara1", 0, 10, 0);
  motor.rotarCamaraOrbital("camara1", 45, "y");
  motor.rotarCamaraOrbital("camara1", 25, "x");


  motor.rotarCamara("camara2", -90, "x");
  motor.moverCamara("camara2", 0, 20, 0);
  //motor.rotarCamaraOrbital("camara2", -90, "x");


  motor.activarLuz("luz1");
  //motor.activarLuz("luz2");
  //motor.activarLuz("luz3");



  //dependiendo de si estamos en modo visión o modo edición, habrá una cámara u otra
  if(accion=='detail'){
    motor.activarCamara("camara1");
    motor.startDrawing('shaderP.vs', 'shaderP.fs');
  }
  else if(accion=='edit'){
    motor.activarCamara("camara2");
    //motor.startDrawingStatic('shaderP.vs', 'shaderP.fs');
    motor.startDrawing('shaderP.vs', 'shaderP.fs');
  }
}
