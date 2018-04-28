function iniciar(accion, jardinBBDD){
  console.log(jardinBBDD);
  window.canvas=null;

  window.jardin=jardinBBDD;
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


  window.hovered=-1;
  window.colorCell=[];

  window.rotationCamX=-40;
  window.rotationCamY=-45;
  window.step=[0, 0, 0];
  window.transition=false;
  window.escala=1;
  window.cont=19;
  window.camHeight=4;


  window.mode=0;//0 modo visualización
                //1 modo edición

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


  //program 0 = cartoon
  //program 1 = estandar
  window.program=1;
  window.vertexShaders=['shaderCartoon.vs', 'shaderP.vs'];
  window.fragmentShaders=['shaderCartoon.fs', 'shaderP.fs'];

  //inicializamos el gestor de recursos
  window.gestor=new TGestorRecursos();

  iniciamosWebGL('myCanvas');
  cargarShaders();

  //fachada
  window.motor = new TMotor(gestor);


  motor.crearNodoLuzDirigida("luz1", 10, [0.0, -10.0, 0.0], 1.7, undefined);
  motor.crearNodoLuz("sol", 1.7, undefined);
  //var luz3 = motor.crearNodoLuz("luz3", 0.7, undefined);

  //camara de vista
  motor.crearNodoCamara("dynamicCamera", true, undefined);

  //camara de edición
  //motor.crearNodoCamara("dynamicCamera", true, undefined);

  //window.mallaAnimada = motor.crearNodoAnimacion("animacion", ["chair", "bote", "Susan"], undefined);
  //motor.siguienteMallaAnimada("animacion");


  //window.malla2 = motor.crearNodoMalla("malla2", "bote", "madera.jpg",  undefined);

  //window.malla3 = motor.crearNodoMalla("malla3", "chair", undefined);

  //var malla4=motor.crearNodoMalla("malla4", "perejil", undefined);

  motor.escalarMalla("malla4", 0.2);

//suelo
let adjustX=0, adjustY=0;
let width=Math.floor(jardin.width/2), length=Math.floor(jardin.length/2);


motor.crearNodoMalla("around", "around", undefined, undefined);
motor.escalarMallaXYZ("around", 500, 0.1, 500);
motor.moverMalla("around", 0, -0.11, 0);
  for(let i=-width; i<=width; i++){
    for(let j=-length; j<=length; j++){
      motor.crearNodoMalla("suelo"+i+'-'+j, "sueloPolly", "cespedDef.jpg", undefined);
      motor.escalarMallaXYZ("suelo"+i+'-'+j, 0.5, 0.1, 0.5);
      motor.moverMalla("suelo"+i+'-'+j, i, -0.1, j);//POR FAVOR NO TOCAR EL SUELO, SI QUERÉIS AJUSTAR LAS ALTURAS
      //HACEDLO CON LAS PLANTAS
    }
  }


  // plantas dragables
  window.plantsMap=new Map();
  for(let i=0; i<jardin.plants.length; i++){
    plantsMap.set(jardin.plants[i].x+'-'+jardin.plants[i].y, jardin.plants[i].id);
    motor.crearNodoMalla(jardin.plants[i].id, "lechuga", "lechuga.jpg", undefined);
    motor.escalarMalla(jardin.plants[i].id, 2.5);
    motor.moverMalla(jardin.plants[i].id, jardin.plants[i].x, 0, jardin.plants[i].y);
  }

  /* OBJETOS DE PRUEBA */
  // LECHUGA
  // for(let i=-2; i<0; i++){
  //   for(let j=-2; j<0; j++){
  //     motor.crearNodoMalla("lechuga2"+i+'-'+j, "lechuga", "lechuga.jpg", undefined);
  //     motor.escalarMalla("lechuga2"+i+'-'+j, 1.5);
  //     //motor.rotarMalla("planta"+i+'-'+j, -70, "x");
  //     // motor.moverMalla("lechuga"+i+'-'+j, 0.5*Math.random(), 0, 0.5*Math.random());
  //     motor.moverMalla("lechuga2"+i+'-'+j, 2*i, 0, 2*j);
  //   }
  // }
//   // CALABAZA
//   motor.crearNodoMalla("calabaza", "calabaza", "calabaza.jpg", undefined);
//   motor.escalarMalla("calabaza", 0.3);
//   motor.rotarMalla("calabaza", -90, "x");
//   motor.rotarMalla("calabaza", 90, "z");
//   motor.moverMalla("calabaza", 0, 0.1, 0);

//   // TOMATERA
//   for(let i=1; i<3; i++){
//     for(let j=1; j<3; j++){
//       motor.crearNodoMalla("tomatera"+i+'-'+j, "tomatera", "tomatera.png", undefined);
//       motor.escalarMalla("tomatera"+i+'-'+j, 0.006);
//       //motor.rotarMalla("planta"+i+'-'+j, -70, "x");
//       // motor.moverMalla("lechuga"+i+'-'+j, 0.5*Math.random(), 0, 0.5*Math.random());
//       motor.moverMalla("tomatera"+i+'-'+j, 2*i, 0, 2*j);
//     }
//   }
//   // MACETAS
//   for(let i=1; i<3; i++){
//     for(let j=1; j<3; j++){
//       motor.crearNodoMalla("maceta"+i+'-'+j, "maceta", "maceta.jpg", undefined);
//       motor.escalarMalla("maceta"+i+'-'+j, 0.05);
//       //motor.rotarMalla("planta"+i+'-'+j, -70, "x");
//       // motor.moverMalla("lechuga"+i+'-'+j, 0.5*Math.random(), 0, 0.5*Math.random());
//       motor.moverMalla("maceta"+i+'-'+j, 2*i, 0.1, 2*j);
//     }
//   }
//   // PEREGIL
//   motor.crearNodoMalla("peregil", "peregil", "peregil.jpg", undefined);
//   motor.escalarMalla("peregil", 0.004);
//   motor.rotarMalla("peregil", -90, "x");
//   motor.moverMalla("peregil", 3, 0.1, -1);

//   // ROSAS
//   motor.crearNodoMalla("rosa", "rosa", "rosa.jpg", undefined);
//   motor.escalarMalla("rosa", 0.01);
//   motor.rotarMalla("rosa", -90, "x");
//   motor.rotarMalla("rosa", 10, "y");
//   motor.moverMalla("rosa", 1, 0.1, 3);

//   // MARGARITAS
//   motor.crearNodoMalla("margarita", "margarita", "margarita.jpg", undefined);
//   motor.escalarMalla("margarita", 0.06);
//   motor.rotarMalla("margarita", -90, "x");
//   motor.moverMalla("margarita", 0, 0.5, 3);


//   // CICA
//   motor.crearNodoMalla("cyca2", "cyca2", "cyca2.jpg", undefined);
//   motor.escalarMalla("cyca2", 0.1);
//   motor.rotarMalla("cyca2", -90, "x");
//   motor.moverMalla("cyca2", -1, 0.2, 6);

//   // Arbol
//   motor.crearNodoMalla("arbol", "arbol", "arbol.jpg", undefined);
//   motor.escalarMalla("arbol", 0.3);
//   motor.rotarMalla("arbol", -90, "x");
//   motor.moverMalla("arbol", 0.5, 0.2, 3);
  if(accion!='home'){
    //ANIMACION
  /*  motor.crearNodoAnimacion("pajaro", "pajaro", 80, undefined);
    motor.crearNodoAnimacion("alaA", "ala", 80, undefined);
    motor.crearNodoAnimacion("alaB", "alab", 80, undefined);

    motor.moverMalla("pajaro", 0.2, 0.2, 0.2);
    motor.moverMalla("alaA", 0.2, 0.2, 0.2);
    motor.moverMalla("alaB", 0.2, 0.2, 0.2);*/
  }

  // bandera
 // motor.crearNodoMalla("bandera_000001", "bandera_000001", "bandera.jpg", undefined);
  //motor.crearNodoMalla("bandera_000150", "bandera_000150", "bandera.jpg", undefined);
  //motor.crearNodoMalla("bandera_000250", "bandera_000250", "bandera.jpg", undefined);


  // motor.escalarMalla("pajaro2_000000", 2.1);
  // motor.rotarMalla("pajaro2_000000", -90, "x");
  // motor.moverMalla("pajaro2_000000", 30, -15, 15);

//luces
motor.moverLuz("luz1", 10.0, 10.0, 0.0);
motor.moverLuz("sol", 0.0, 500.0, 0.0);
//motor.moverLuz("luz3", 0.0, -10.0, 0.0);
motor.activarLuz("luz1");
motor.activarLuz("sol");
//motor.activarLuz("luz3");



  //motor.moverMalla("malla1", -9, -15, -30);

  motor.escalarMalla("malla2", 0.5);
  motor.moverMalla("malla2", 0, 1, 0);

  motor.moverMalla("malla3", 15, 25, 0);
  motor.escalarMalla("malla3", 6);
  motor.rotarMalla("malla3", 40, "x");




  //motor.rotarCamaraOrbital("dynamicCamera", 45, "y");
  //motor.rotarCamaraOrbital("dynamicCamera", -45, "x");

  //motor.moverCamaraA("dynamicCamera", 0,10, 0);


  //motor.rotarCamaraOrbital("dynamicCamera", -90, "x");

  motor.activarCamara("dynamicCamera");

  //dependiendo de si estamos en modo visión o modo edición, habrá una cámara u otra
  if(accion=='detail'){
    window.mode=0;
    //motor.rotarCamara("dynamicCamera", -rotationCamX, "x");
    motor.moverCamaraA("dynamicCamera", -camHeight, camHeight, camHeight);
    motor.rotarCamara("dynamicCamera", rotationCamY, "y");
    motor.rotarCamara("dynamicCamera", rotationCamX, "x");

    //motor.rotarCamaraOrbital("dynamicCamera", 45, "y");
    //motor.rotarCamaraOrbital("dynamicCamera", 25, "x");

    motor.startDrawing('shaderP.vs', 'shaderP.fs');
  }
  else if(accion=='edit'){
    window.mode=1;
    motor.rotarCamara("dynamicCamera", -90, "x");
    motor.moverCamara("dynamicCamera", 0, 20, 0);

    motor.startDrawing('shaderP.vs', 'shaderP.fs');
  }
  else if(accion=='home'){
    window.mode=0;
    //motor.rotarCamara("dynamicCamera", -rotationCamX, "x");
    motor.moverCamaraA("dynamicCamera", -camHeight, camHeight, camHeight);
    motor.rotarCamara("dynamicCamera", rotationCamY, "y");
    motor.rotarCamara("dynamicCamera", rotationCamX, "x");

    //motor.rotarCamaraOrbital("dynamicCamera", 45, "y");
    //motor.rotarCamaraOrbital("dynamicCamera", 25, "x");

    motor.startDrawingStatic('shaderP.vs', 'shaderP.fs');
  }


  //motor.startDrawingStatic('shaderP.vs', 'shaderP.fs');

}
