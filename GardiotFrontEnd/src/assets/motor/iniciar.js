function iniciar(accion, jardinBBDD, sunrise, sunset) {
  //Variable que contiene el canvas
  window.canvas = null;

  window.jardin = jardinBBDD;
  window.loading = [];//array que estará vacío si no hay nada cargándose

  //Variables para el bucle de movimiento
  window.frames = 0;
  window.fpsInterval = 0;
  window.startTime = 0;
  window.now = 0;
  window.then = 0;
  window.elapsed = 0;
  window.frameCount = 0;
  window.interval;


  //Variables para controlar el coloreado de celdas y plantas cuando interaccionen
  window.hovered = -1;
  window.colorCell = [];

  //Rotaciones de la cámara y altura de esta
  window.rotationCamX = -40;
  window.rotationCamY = -45;
  window.camHeight = 6;


  window.mode = 0;
  //0 modo visualización
  //1 modo edición
  //2 modo sombras

  //inicialización de matrices
  window.matrixStack = [];//pila de matrices
  window.matrixModel = mat4.create();//matriz modelo
  matrixStack.push(matrixModel);
  window.projectionMatrix = [];//matriz proyección
  window.lightProjectionMatrix = [];//matriz proyección de la luz (paralela)
  let anchura = 12;
  mat4.ortho(lightProjectionMatrix, -anchura, anchura, -anchura, anchura, 0.1, 150);
  //mat4.frustum(lightProjectionMatrix, -1, 1, -0.7, 0.7, 1, 1000);
  window.alturaLuz=0;


  window.viewMatrix = [];//matriz view
  window.viewLightMatrix = []; //view matrix from light


  //declaramos las variables necesarias para ejecutar el programa
  window.gl = null;
  window.glProgram = [];


  //program 0 = cartoon
  //program 1 = estandar
  //program 2 = shadows
  //window.program = 1;
  window.program = 1;
  window.vertexShaders = ['shaderCartoon.vs', 'shaderP.vs', 'shadow.vs'];
  window.fragmentShaders = ['shaderCartoon.fs', 'shaderP.fs', 'shadow.fs'];

  window.shadowFramebuffer = null;
  window.shadowDepthTexture = null;
  window.renderBuffer = null;
  window.shadowDepthTextureSize = 4096;

  //Índice de texturas
  window.index = 0;
  window.indexShadow = 0;//Índice de la textura de sombras

  //inicializamos el gestor de recursos
  window.gestor = new TGestorRecursos();

  iniciamosWebGL('myCanvas');
  cargarShaders();
  initFramebufferSombras();
  setupWebGL();

  //Se inicia el motor
  window.motor = new TMotor(gestor);

  

  //camara de vista
  motor.crearNodoCamara("dynamicCamera", true, undefined);
  motor.activarCamara("dynamicCamera");

  loadEntities();

  //dependiendo de si estamos en modo visión o modo edición, la cámara estará en un sitio u otro
  //Aquí colocamos la cámara y llamamos al dibujado de la escena
  if (accion == 'detail') {
    window.mode = 0;
    motor.moverCamaraA("dynamicCamera", 0, camHeight, camHeight * 2);
    motor.rotarCamaraOrbital("dynamicCamera", 0, "y");
    motor.rotarCamara("dynamicCamera", rotationCamX, "x");

    motor.startDrawing();
  }

  else if (accion == 'edit') {
    window.mode = 1;
    motor.rotarCamara("dynamicCamera", -90, "x");
    motor.moverCamara("dynamicCamera", 0, camHeight / 2, 0);

    motor.startDrawing();
  }
  else if (accion == 'home') {
    window.mode = 0;
    let altura = Math.min(width, length);
    //motor.rotarCamara("dynamicCamera", -rotationCamX, "x");
    motor.moverCamaraA("dynamicCamera", 0, altura, altura * 2);
    motor.rotarCamaraOrbital("dynamicCamera", 0, "y");
    motor.rotarCamara("dynamicCamera", rotationCamX, "x");

    //motor.rotarCamaraOrbital("dynamicCamera", 45, "y");
    //motor.rotarCamaraOrbital("dynamicCamera", 25, "x");

    motor.startDrawingStatic();
  }

}
