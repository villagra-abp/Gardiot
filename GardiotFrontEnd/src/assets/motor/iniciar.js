function iniciar(accion){
  window.canvas=null;

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


  //declaramos las variables necesarias para ejecutar el programa
  //las variables de WebGL empezarán siempre por gl para distinguirlas de
  //las variables del motor gráfico
  window.gl=null;
  window.glVertexShader=[];
  window.glFragmentShader=[];
  window.glProgram=[];

  window.vertexShaders=[];
  window.fragmentShaders=[];

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


  window.malla2 = motor.crearNodoMalla("malla2", "Susan", "SusanTexture.png",  undefined);

  //window.malla3 = motor.crearNodoMalla("malla3", "chair", undefined);

  //var malla4=motor.crearNodoMalla("malla4", "perejil", undefined);

  motor.escalarMalla("malla4", 0.2);

//suelo
  for(let i=-1; i<2; i++){
    for(let j=-1; j<2; j++){
      motor.crearNodoMalla("suelo"+i+'-'+j, "cubo", undefined, undefined);
      motor.escalarMallaXYZ("suelo"+i+'-'+j, 60, 0, 60);
      motor.moverMalla("suelo"+i+'-'+j, 120*i, 0, 120*j);
    }
  }

  //perejiles
  for(let i=-4; i<4; i++){
    for(let j=-4; j<4; j++){
      motor.crearNodoMalla("planta"+i+'-'+j, "perejil", "perejil2.jpg", undefined);
      motor.escalarMalla("planta"+i+'-'+j, 0.4);
      motor.rotarMalla("planta"+i+'-'+j, -70, "x");
      motor.rotarMalla("planta"+i+'-'+j, 180*Math.random(), "z");
      motor.moverMalla("planta"+i+'-'+j, 40*i, 10, 40*j);
    }
  }


  //motor.moverMalla("malla1", -9, -15, -30);

  motor.escalarMalla("malla2", 6);
  motor.moverMalla("malla2", 40, 0, 40);

  motor.escalarMalla("animacion", 6);
  motor.moverMalla("animacion", 40, 50, 40);

  motor.moverMalla("malla3", 15, 25, 0);
  motor.escalarMalla("malla3", 6);
  motor.rotarMalla("malla3", 40, "x");



  motor.moverLuz("luz1", 0.0, 80.0, 0.0);
  //motor.moverLuz("luz2", 0.0, 10.0, 0.0);
  //motor.moverLuz("luz3", 0.0, -10.0, 0.0);




  motor.moverCamara("camara1", -106, 140, 100);
  motor.rotarCamara("camara1", -45, "y");
  motor.rotarCamara("camara1", -55, "x");
  motor.moverCamara("camara2", 0,180, 0);
  motor.rotarCamara("camara2", -90, "x");
  //motor.rotarCamaraOrbital("camara2", -90, "x");


  motor.activarLuz("luz1");
  //motor.activarLuz("luz2");
  //motor.activarLuz("luz3");



  //dependiendo de si estamos en modo visión o modo edición, habrá una cámara u otra
  if(accion=='detail'){
    motor.activarCamara("camara1");
    motor.startDrawingStatic('shaderP.vs', 'shaderP.fs');
  }
  else if(accion=='edit'){
    motor.activarCamara("camara2");
    //motor.startDrawingStatic('shaderP.vs', 'shaderP.fs');
    motor.startDrawing('shaderP.vs', 'shaderP.fs');
  }
}
