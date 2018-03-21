function iniciar(accion){
  window.canvas=null;

  window.loading=[];
  window.interval;
  //bucle movimiento
  window.frames=0;
  window.fpsInterval=0;
  window.startTime=0;
  window.now=0;
  window.then=0;
  window.elapsed=0;
  window.frameCount=0;

  window.texturas=0;

  //Inicializamos la pila de matriz y la matriz modelo
  window.matrixStack=[];
  window.matrixModel = mat4.create();
  matrixStack.push(matrixModel);
  window.matrixProjection=[];
  window.invertedMView=[];

  //inicializamos vector de texturas
  window.textureImage=[];
  //variable que tendrá el programa webgl
  window.gl=null;


  //inicializamos el gestor de recursos
  window.gestor=new TGestorRecursos();

  iniciamosWebGL('myCanvas');
  configurarShaders('shaderP.vs', 'shaderP.fs');

  //fachada
  window.motor = new TMotor(gestor);

  window.luz = motor.crearNodoLuz("luz1", 1.7, undefined);
  //var luz2 = motor.crearNodoLuz("luz2", 0.7, undefined);
  //var luz3 = motor.crearNodoLuz("luz3", 0.7, undefined);

  //camara de vista
  window.camara = motor.crearNodoCamara("camara1", true, undefined);

  //camara de edición
  window.camaraEdit=motor.crearNodoCamara("camara2", true, undefined);

  window.mallaAnimada = motor.crearNodoAnimacion("animacion", ["chair", "bote", "Susan"], undefined);
  //motor.siguienteMallaAnimada("animacion");


  //window.malla2 = motor.crearNodoMalla("malla2", "Susan", undefined);

  //window.malla3 = motor.crearNodoMalla("malla3", "bote", undefined);

  //var malla4=motor.crearNodoMalla("malla4", "perejil", undefined);

  motor.escalarMalla("malla4", 0.2);

//suelo
  for(let i=-1; i<2; i++){
    for(let j=-1; j<2; j++){
      motor.crearNodoMalla("suelo"+i+'-'+j, "cubo", undefined);
      motor.escalarMallaxyz("suelo"+i+'-'+j, 60, 0, 60);
      motor.moverMalla("suelo"+i+'-'+j, 120*i, 0, 120*j);
    }
  }

  //perejiles
  for(let i=-4; i<4; i++){
    for(let j=-4; j<4; j++){
      motor.crearNodoMalla("planta"+i+'-'+j, "perejil", undefined);
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



  //motor.escalarMalla("malla2", 5)

  //motor.moverMalla("malla3", 0, 0, -7);

  motor.moverLuz("luz1", 0.0, 80.0, 0.0);
  //motor.moverLuz("luz2", 0.0, 10.0, 0.0);
  //motor.moverLuz("luz3", 0.0, -10.0, 0.0);


  //motor.rotarMalla("malla2", 180, "z");

  //motor.rotarMalla("malla2", 180, "y");
  //motor.rotarMalla("malla2", 90, "x");
  //motor.rotarMalla("malla1", 10, "x");

  //motor.escalarMalla("malla2", 0.3);


  motor.moverCamara("camara1", -106, 140, 100);
  motor.rotarCamara("camara1", -45, "y");
  motor.rotarCamara("camara1", -55, "x");
  motor.moverCamara("camara2", 0,180, 0);
  motor.rotarCamara("camara2", -90, "x");
  //motor.rotarCamaraOrbital("camara2", -90, "x");




  motor.activarLuz("luz1");
  //motor.activarLuz("luz2");
  //motor.activarLuz("luz3");

  /*

  //plantas
  motor.crearNodoMalla("maceta1", "maceta", undefined);
  motor.crearNodoMalla("maceta2", "maceta", undefined);
  for(let i=0; i<6; i++){
      for(let j=0; j<4; j++){
          motor.crearNodoMalla("calabaza"+i+"-"+j, "calabaza", undefined);
          motor.escalarMalla("calabaza"+i+"-"+j, 3, 3, 3);
          motor.moverMalla("calabaza"+i+"-"+j, -30+(i*10), -15, -20+(j*10));

      }
  }


  motor.moverMalla("maceta1", 6, -18, -35);
  motor.moverMalla("maceta2", -10, -18, -35);
*/




  //declaramos las variables necesarias para ejecutar el programa
  //las variables de WebGL empezarán siempre por gl para distinguirlas de
  //las variables del motor gráfico
  window.glVertexShader=null;
  window.glFragmentShader=null;
  window.glProgram=null;


  if(accion=='detail'){
    motor.activarCamara("camara1");
    motor.startDrawingStatic('shaderP.vs', 'shaderP.fs');
  }
  else if(accion=='edit'){
    motor.activarCamara("camara2");
    //motor.startDrawingStatic('shaderP.vs', 'shaderP.fs');
    motor.startDrawing('shaderP.vs', 'shaderP.fs');
  }









  /*$(document).keydown(function(evt){
      switch(evt.keyCode){
          case 83: //down
              motor.moverCamara("camara1", 0, -0.5, 0);
              break;
          case 87: //up
              motor.moverCamara("camara1", 0, 0.5, 0);
              break;
          case 65: //left
              motor.moverCamara("camara1", -0.5, 0, 0);
              break;
          case 68: //right
              motor.moverCamara("camara1", 0.5, 0, 0);
              break;
          case 40: //down
              motor.rotarCamara("camara1", 2, "x");
              break;
          case 38: //up
              motor.rotarCamara("camara1", -2, "x");
              break;
          case 37: //left
              motor.rotarCamara("camara1", 2, "y");
              break;
          case 39: //right
              motor.rotarCamara("camara1", -2, "y");
              break;
          default:

              break;
          }
      });*/

}
