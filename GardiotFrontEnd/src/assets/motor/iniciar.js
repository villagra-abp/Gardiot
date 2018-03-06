function iniciar(){
  window.canvas=null;
window.motor=new TMotor();
window.gestor=new TGestorRecursos();
window.matrixProjection=[];
window.matrixStack=[];
window.matrixModel=mat4.create();

matrixStack.push(matrixModel);

//inicializamos vector de texturas
window.textureImage=[];
//variable que tendrá el programa webgl
window.gl=null;


motor.crearNodoLuz("luz1", false, undefined);

motor.crearNodoCamara("camara1", true, undefined);




motor.crearNodoMalla("malla2", "cubo", undefined);




motor.moverMalla("malla2", 0, -20, 0);
motor.rotarMalla("malla2", 45, "y");
motor.escalarMalla("malla2", 50, 1, 50);


motor.moverLuz("luz1", -10, 25, 7);






motor.moverCamara("camara1", 0, 5, 25);
motor.rotarCamara("camara1", -20, "x");

motor.activarCamara("camara1");

motor.activarLuz("luz1");



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


//declaramos las variables necesarias para ejecutar el programa
//las variables de WebGL empezarán siempre por gl para distinguirlas de
//las variables del motor gráfico
window.glVertexShader=null;
window.glFragmentShader=null;
window.glProgram=null;


//CARLOS, TRATA DE ARRANCARLO (WEBGL)
motor.draw();

}
