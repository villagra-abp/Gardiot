/**
 * El método iniciar será lo primero que se ejecutará al iniciar el motor/herramienta gráfica
 * Primero hacemos la declaración de todas las variables necesarias: canvas, glPrograms, pilas de matrices, etc.
 * Luego ejecutamos toda la inicialización de WebGL y el motor gráfico. Esta parte se ha modularizado y los métodos
 * que se ejecutan se encuentran en el archivo appLoaders.js. Por último, en función de la interfaz en la que estemos,
 * inicializaremos la cámara y el dibujado de forma distinta. P.ej, para nuestro dashboard principal, como el jardín
 * no será interactivo, simplemente hacemos un dibujado estático del jardín.
 * @param  {String} accion Home, detail o edit
 * @param  {Object} jardinBBDD Datos del jardin y array de plantas
 * @param  {Date} sunrise Hora de amanecer
 * @param  {Date} sunset Hora de anochecer
 */
function iniciar(accion, jardinBBDD, sunrise, sunset) {
  //Variable que contiene el canvas
  window.canvas = null;
  window.jardin = jardinBBDD;
  window.loading = [];//array que estará vacío si no hay nada cargándose
  window.interfaz = accion;
  window.duracionTransicion=20;
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
  window.camHeight = 5;

  window.mode = 0; //0 modo visualización - 1 modo edición - 2 modo sombras
  window.transitionToEdit = false; //Si estamos en transición entre un modo y otro
  window.transitionToDetail = false; //Si estamos en transición entre un modo y otro
  window.cont = 0;
  /**
   * TAG.05	Matrices (model, view, projection) y pila estáticas y su manejo
   */
  window.matrixStack = [];//pila de matrices
  window.matrixModel = mat4.create();//matriz modelo
  matrixStack.push(matrixModel);//añadimos matriz modelo a la pila
  window.projectionMatrix = [];//matriz proyección
  window.lightProjectionMatrix = [];//matriz proyección de la luz (paralela)
  let anchura = 12;
  //creamos la matriz proyección desde la luz
  mat4.ortho(lightProjectionMatrix, -anchura, anchura, -anchura, anchura, 0.1, 150);

  window.velocidadOrbital = 1;//Parámetro de la velocidad del sol y la luna

  window.viewMatrix = [];//matriz view
  window.lightTransformations = []; //Light transformations
  window.viewLightMatrix = []; //view matrix from light
  window.gl = null;
  window.glProgram = []; //Aquí se almacenan los programas
  window.fShaders = [];
  window.vShaders = [];


  window.mobile = typeof window.orientation != 'undefined';
  //program 0 = cartoon
  //program 1 = estandar
  //program 2 = shadows
  mobile ? window.program = 3 : window.program = 1;

  //Variables que almacenan los framebuffers para el shadow mapping
  window.shadowFramebuffer = [];
  window.shadowDepthTexture = [];
  window.renderBuffer = [];
  window.shadowDepthTextureSize = 4096;
  window.index = 0; //Indice de texturas
  window.gestor = new TGestorRecursos();
  window.motor = new TMotor(gestor);

  //Las siguientes funciones se encuentran en el archivo appLoaders.js
  //Iniciamos el canvas
  iniciamosWebGL('myCanvas');
  //Cargamos los shaders y creamos los programas
  cargarShaders(['shaderCartoon.vs', 'shaderP.vs', 'shadow.vs', 'shaderMobile.vs'],
    ['shaderCartoon.fs', 'shaderP.fs', 'shadow.fs', 'shaderMobile.fs']);
  //En el móvil no usaremos las sombras por temas de rendimiento.
  //Si no estamos en un teléfono movil iniciaremos 7 framebuffers de sombras, 1
  //para cada una de las luces que se permiten añadir a la escena
  if (!mobile) {
    for (let i = 0; i < 7; i++) {
      initFramebufferSombras(i);
    }
  }
  setupWebGL();

  //Cargará todos los objetos del jardín
  loadEntities(sunrise, sunset);

  //Camara de vista
  motor.crearNodoCamara("dynamicCamera", true, undefined);
  motor.activarCamara("dynamicCamera");



  //Dependiendo de si estamos en modo visión o modo edición, la cámara estará en un sitio u otro
  //Aquí colocamos la cámara y llamamos al dibujado de la escena
  if (accion == 'detail') {
    window.mode = 0;
    motor.moverCamaraA("dynamicCamera", 0, 5, 10);
    motor.rotarCamaraOrbital("dynamicCamera", 0, "y");
    motor.rotarCamara("dynamicCamera", rotationCamX, "x");
    motor.startDrawing();
  }
  else if (accion == 'edit') {
    window.mode = 1;
    motor.rotarCamara("dynamicCamera", -90, "x");
    motor.moverCamara("dynamicCamera", 0, 5, 0);
    motor.startDrawing();
  }
  else if (accion == 'home') {
    window.mode = 0;
    motor.moverCamaraA("dynamicCamera", 0, 4, 8);
    motor.rotarCamaraOrbital("dynamicCamera", 0, "y");
    motor.rotarCamara("dynamicCamera", rotationCamX, "x");
    motor.startDrawing();
  }
}
