function iniciar(accion, jardinBBDD, sunrise, sunset) {
  //Variable que contiene el canvas
  window.canvas = null;
  window.jardin = jardinBBDD;
  window.loading = [];//array que estará vacío si no hay nada cargándose

  //Variables para el bucle de movimiento
  window.fpsInterval = 1000 / 30;
  window.startTime = 0;
  window.then = Date.now();

  //Variables para controlar el coloreado de celdas y plantas cuando interaccionen
  window.hovered = -1;
  window.colorCell = [];

  //Rotaciones de la cámara y altura de esta
  window.rotationCamX = -40;
  window.rotationCamY = -45;
  window.camHeight = 6;

  window.mode = 0; //0 modo visualización - 1 modo edición - 2 modo sombras

  //inicialización de matrices
  window.matrixStack = [];//pila de matrices
  window.matrixModel = mat4.create();//matriz modelo
  matrixStack.push(matrixModel);
  window.projectionMatrix = [];//matriz proyección
  window.lightProjectionMatrix = [];//matriz proyección de la luz (paralela)
  let anchura = 12;
  mat4.ortho(lightProjectionMatrix, -anchura, anchura, -anchura, anchura, 0.1, 150);
  //mat4.frustum(lightProjectionMatrix, -1, 1, -0.7, 0.7, 1, 1000);
  window.velocidadOrbital=1;

  window.viewMatrix = [];//matriz view
  window.lightTransformations = []; //Light transformations
  window.viewLightMatrix = []; //view matrix from light
  window.gl = null;
  window.glProgram = [];


  //program 0 = cartoon
  //program 1 = estandar
  //program 2 = shadows
  //window.program = 1;
  window.program = 1;


  window.shadowFramebuffer = [];
  window.shadowDepthTexture = [];
  window.renderBuffer = [];
  window.shadowDepthTextureSize = 4096; 
  window.index = 0; //Indice de texturas
  window.shadowIndex = [];//Indice de la textura de sombras
  window.gestor = new TGestorRecursos(); 

  iniciamosWebGL('myCanvas');

  cargarShaders(['shaderCartoon.vs', 'shaderP.vs', 'shadow.vs'],
                ['shaderCartoon.fs', 'shaderP.fs', 'shadow.fs']);
  for(let i=0; i<7; i++){
    initFramebufferSombras(i);
  }
  
  setupWebGL();
  window.motor = new TMotor(gestor);

  //Camara de vista
  motor.crearNodoCamara("dynamicCamera", true, undefined);
  motor.activarCamara("dynamicCamera");

  loadEntities(sunrise, sunset);

  //Dependiendo de si estamos en modo visión o modo edición, la cámara estará en un sitio u otro
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
    let altura = Math.min(camHeight/2, camHeight);
    //motor.rotarCamara("dynamicCamera", -rotationCamX, "x");
    motor.moverCamaraA("dynamicCamera", 0, altura, altura * 2);
    motor.rotarCamaraOrbital("dynamicCamera", 0, "y");
    motor.rotarCamara("dynamicCamera", rotationCamX, "x");
    //motor.rotarCamaraOrbital("dynamicCamera", 45, "y");
    //motor.rotarCamaraOrbital("dynamicCamera", 25, "x");
    motor.startDrawingStatic();
  }
}
