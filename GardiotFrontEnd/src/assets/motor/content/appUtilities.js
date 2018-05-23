/**
 * En appUtilities.js tenemos funciones auxiliares para clarificar el código de otros sitios: compilación de shaders,
 * bucle de animación, transformar los clicks en el canvas en coordenadas de la escena, etc.
  TAG.50	Integración con la aplicación
  TAG.51	Realización de una aplicación que maneje el motor (sólo si no existe)
  TAG.52	Realización de una fachada genérica
 */

/**
 * Realiza la iteracion de dibujado segun fps
 */
function animLoop() {
  let now = Date.now();
  let elapsed = now - then;

  //Si toca dibujar y el motor está corriendo
  if (elapsed > fpsInterval && motor.running) {
    then = now - (elapsed % fpsInterval);
    if(window.transitionToEdit){
      console.log(window.steps);
      window.cont++;
      if(window.cont<=20){
        motor.rotarCamaraOrbital('dynamicCamera', window.steps[0], 'y');
        motor.rotarCamara('dynamicCamera', window.steps[1], 'x');
        motor.moverCamara('dynamicCamera', 0, window.steps[3], window.steps[4]);
      }
      else{
        rotationCamX=-90;
        window.transitionToEdit=false;
        window.cont=0;
      }
    }
    else if(window.transitionToDetail){

    }
    if (!window.mobile)
      motor.drawSombras();
    motor.draw();
  }
  requestAnimationFrame(animLoop, canvas);
}

/**
 * Compilar el shader que le pasemos por parámetro
 * @param  {String} src
 * @param  {number} type 
 */
function makeShader(src, type) {
  //compilar el vertex shader
  let shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert("Error compilando el Shader " + gl.getShaderInfoLog(shader));
  }
  return shader;
}


/**
 * TAG.44	Funciones para crear shaders y gestionarlos
 * Inicializa shaders
 * @param  {string} vertexShaders
 * @param  {string} fragmentShaders
 */
function cargarShaders(vertexShaders, fragmentShaders) {
  let vs = [];
  let fs = [];

  for (let i = 0; i < vertexShaders.length && i < fragmentShaders.length; i++) {
    vs[i] = gestor.getRecurso(vertexShaders[i], 'shader').shader,
      fs[i] = gestor.getRecurso(fragmentShaders[i], 'shader').shader;

    glProgram[i] = gl.createProgram();
    //añadimos los shaders al programa
    vShaders.push(vs[i]);
    fShaders.push(fs[i]);
    gl.attachShader(glProgram[i], makeShader(vs[i], gl.VERTEX_SHADER));
    gl.attachShader(glProgram[i], makeShader(fs[i], gl.FRAGMENT_SHADER));
    gl.linkProgram(glProgram[i]);


    if (!gl.getProgramParameter(glProgram[i], gl.LINK_STATUS)) {
      alert("No se puede inicializar el shader");
    }
  }
  gl.useProgram(glProgram[window.program]);
}
/**
 * Elimina el programa y los shaders que le pasamos por parámetro
 * @param  {number} shader
 */
function deleteShader(shader){
  if(shader>0){
    try{
      gl.useProgram(glProgram[shader]);

      gl.detachShader(glProgram[shader], vShaders[shader]);
      gl.detachShader(glProgram[shader], fShaders[shader]);
      gl.deleteShader(vShaders[shader]);
      gl.deleteShader(fShaders[shader]); 

      gl.useProgram(glProgram[window.program]);

      gl.deleteProgram(glProgram[shader]);   
      glProgram[shader]=undefined;
      return true; 
    }
    catch(e){
      return false;
    }
  }
}

/**
 * Incializa parametros basicos de WebGL
 */
function setupWebGL() {

  glProgram[2].lmvpMatrixUniform = gl.getUniformLocation(glProgram[2], "uMVPMatrixFromLight");

  glProgram[window.program].shadowMapUniform = [];
  glProgram[window.program].shadowMapUniform[0] = gl.getUniformLocation(glProgram[window.program], "uShadowMap[0]");
  glProgram[window.program].shadowMapUniform[1] = gl.getUniformLocation(glProgram[window.program], "uShadowMap[1]");
  glProgram[window.program].shadowMapUniform[2] = gl.getUniformLocation(glProgram[window.program], "uShadowMap[2]");
  glProgram[window.program].shadowMapUniform[3] = gl.getUniformLocation(glProgram[window.program], "uShadowMap[3]");
  glProgram[window.program].shadowMapUniform[4] = gl.getUniformLocation(glProgram[window.program], "uShadowMap[4]");
  glProgram[window.program].shadowMapUniform[5] = gl.getUniformLocation(glProgram[window.program], "uShadowMap[5]");
  glProgram[window.program].shadowMapUniform[6] = gl.getUniformLocation(glProgram[window.program], "uShadowMap[6]");

  glProgram[window.program].lmvpMatrixUniform = [];
  glProgram[window.program].lmvpMatrixUniform[0] = gl.getUniformLocation(glProgram[window.program], "uMVPMatrixFromLight[0]");
  glProgram[window.program].lmvpMatrixUniform[1] = gl.getUniformLocation(glProgram[window.program], "uMVPMatrixFromLight[1]");
  glProgram[window.program].lmvpMatrixUniform[2] = gl.getUniformLocation(glProgram[window.program], "uMVPMatrixFromLight[2]");
  glProgram[window.program].lmvpMatrixUniform[3] = gl.getUniformLocation(glProgram[window.program], "uMVPMatrixFromLight[3]");
  glProgram[window.program].lmvpMatrixUniform[4] = gl.getUniformLocation(glProgram[window.program], "uMVPMatrixFromLight[4]");
  glProgram[window.program].lmvpMatrixUniform[5] = gl.getUniformLocation(glProgram[window.program], "uMVPMatrixFromLight[5]");
  glProgram[window.program].lmvpMatrixUniform[6] = gl.getUniformLocation(glProgram[window.program], "uMVPMatrixFromLight[6]");


  //Nos traemos las matrices, projection, model y view al motor
  glProgram[window.program].pMatrixUniform = gl.getUniformLocation(glProgram[window.program], "uPMatrix");
  glProgram[window.program].mMatrixUniform = gl.getUniformLocation(glProgram[window.program], "uMMatrix");
  glProgram[window.program].vMatrixUniform = gl.getUniformLocation(glProgram[window.program], "uVMatrix");
  glProgram[window.program].mvMatrixUniform = gl.getUniformLocation(glProgram[window.program], "uMVMatrix");
  glProgram[window.program].mvpMatrixUniform = gl.getUniformLocation(glProgram[window.program], "uMVPMatrix");

  glProgram[window.program].lpMatrixUniform = gl.getUniformLocation(glProgram[window.program], "uPMatrixFromLight");
  glProgram[window.program].lvMatrixUniform = gl.getUniformLocation(glProgram[window.program], "uVMatrixFromLight");

  glProgram[window.program].samplerUniform = gl.getUniformLocation(glProgram[window.program], "uSampler");
  glProgram[window.program].textured = gl.getUniformLocation(glProgram[window.program], "uTextured");
  glProgram[window.program].lighted = gl.getUniformLocation(glProgram[window.program], "uLighted");
  glProgram[window.program].hovered = gl.getUniformLocation(glProgram[window.program], "uHovered");
  glProgram[window.program].factor = gl.getUniformLocation(glProgram[window.program], "uFactor");
  glProgram[window.program].noche = gl.getUniformLocation(glProgram[window.program], "uNight");
  glProgram[window.program].cont = gl.getUniformLocation(glProgram[window.program], "uLightCount");
  //matriz de normales
  glProgram[window.program].normalMatrixUniform = gl.getUniformLocation(glProgram[window.program], "uNormalMatrix");

  glProgram[window.program].ka = gl.getUniformLocation(glProgram[window.program], "material.Ka");
  glProgram[window.program].kd = gl.getUniformLocation(glProgram[window.program], "material.Kd");
  glProgram[window.program].ks = gl.getUniformLocation(glProgram[window.program], "material.Ks");

  glProgram[window.program].shin = gl.getUniformLocation(glProgram[window.program], "propiedades.shininess");
  glProgram[window.program].opac = gl.getUniformLocation(glProgram[window.program], "propiedades.opacity");

  gl.useProgram(glProgram[window.program]);
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0.98, 0.98, 0.98, 1);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.enable(gl.DEPTH_TEST);
  //TAG.54	Backface culling
  gl.enable(gl.CULL_FACE);
  gl.cullFace(gl.BACK);

}

/**
 * Inicializa los framebuffers de sombras
 * @param  {number} i Iterador 
 */
function initFramebufferSombras(i) {

  shadowFramebuffer[i] = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, shadowFramebuffer[i]);

  let ind = parseInt('' + window.index);
  window.index++;
  shadowDepthTexture[i] = gl.createTexture();
  gl.activeTexture(gl.TEXTURE0 + ind);
  gl.bindTexture(gl.TEXTURE_2D, shadowDepthTexture[i]);
  shadowDepthTexture[i].index = ind;


  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, shadowDepthTextureSize, shadowDepthTextureSize, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

  renderBuffer[i] = gl.createRenderbuffer();
  gl.bindRenderbuffer(gl.RENDERBUFFER, renderBuffer[i]);
  gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, shadowDepthTextureSize, shadowDepthTextureSize);

  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, shadowDepthTexture[i], 0);
  gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderBuffer[i]);

  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.bindTexture(gl.TEXTURE_2D, null);
  gl.bindRenderbuffer(gl.RENDERBUFFER, null);
}

/**
 * Obtiene el punto x, y de la pantalla a partir de una coordenada 3D
 * @param  {Array} point3D
 * @param  {number} width  
 * @param  {number} height 
 * @returns {Array} 
 */
function get2DPoint(point3D, width, height) {
  let viewProjectionMatrix = [];
  mat4.multiply(viewProjectionMatrix, projectionMatrix, viewMatrix);
  vec3.transformMat4(point3D, point3D, viewProjectionMatrix);

  let invert = [];
  mat4.invert(invert, viewProjectionMatrix);
  vec3.transformMat4(point3D, point3D, invert);

  let winX = point3D[0] + 1;
  winX = winX / 2.0;
  winX = winX * width;

  let winY = 1 - point3D[1];
  winY = winY / 2.0;
  winY = winY * height;

  return [winX, winY];
}

/**
 * Transforma un click en 2D en la coordenada 3D del mundo (siempre en altura y=0, al nivel del suelo)
 * @param  {Array} point2D
 * @param  {number} width  
 * @param  {number} height 
 * @returns {Array} 
 */
function get3DPoint(point2D, width, height) {
  let x = (point2D[0] / width) * 2 - 1;
  let y = 1 - (point2D[1] / height) * 2;
  let viewProjectionMatrix = [];
  mat4.multiply(viewProjectionMatrix, projectionMatrix, viewMatrix);
  let invert = [];
  mat4.invert(invert, viewProjectionMatrix);
  let pointaux = [];
  vec3.transformMat4(pointaux, [0, 0, 0], viewProjectionMatrix);
  let point = [x, y, pointaux[2]];
  vec3.transformMat4(point, point, invert);
  return point;
}

/**
 * Inicia el contexto WebGl
 * @param  {number} idCanvas
 */
function iniciamosWebGL(idCanvas) {
  canvas = document.getElementById(idCanvas);
  try {
    gl = canvas.getContext("webgl");
    if (gl) {
      return true;
    }
    return false;
  }
  catch (e) {
    return false;
  }
}
/*
async function rotarSol() {
  await sleep(300000); //5 min
  let now = new Date();
  let minutesDiff = Math.abs(now - window.lastTime) / 60000;
  let relationNowDay = minutesDiff / (24 * 60);
  let gradeSunPosition = relationNowDay * 360;
  motor.rotarLuzOrbital('sol', gradeSunPosition, 'z');
  motor.rotarLuzOrbital('luna', gradeSunPosition, 'z');
  window.lastTime = now;
  iluminarAstro(now.getHours() * 60 + now.getMinutes());
  rotarSol();
}*/

/**
 * Rota los astros cada X tiempo recursivamente
 * TAG.73	Movimiento y configuración de luces (mañana/tarde)
 */
async function rotarSol() {
  console.log('rotarsol');
  await sleep(300000); //5 min
  let now = new Date();
  calcularPosicionAstros(now);
  rotarSol();
}

/**
 * Demo para comprobar el ciclo de un dia en pocos segundos
 * TAG.73	Movimiento y configuración de luces (mañana/tarde)
 * @param i Iterador recursivo
 */
function demoSol(i) {
  setTimeout(function () {
    let now = new Date(window.lastTime);
    let inc = 20;
    now.setMinutes(now.getMinutes() + inc);
    calcularPosicionAstros(now);
    if (((24 * 60) / inc) - 1 > i) {
      i++;
      demoSol(i);
    }
    else
      rotarSol();
  }, 100);
}

/**
 * Calcula cuantos grados rotar en funcion del tiempo transcurrido desde la ultima vez
 * @param  {Date} now
 */
function calcularPosicionAstros(now) {
  let minuteOfDay = now.getHours() * 60 + now.getMinutes();
  let minutesDiff = Math.abs(now - window.lastTime) / 20000;
  let relationNowDay = minutesDiff / (24 * 60);
  let gradeSunPosition = relationNowDay * 110 * velocidadOrbital;
  console.log("Roto el sol " + gradeSunPosition + ' grados a las ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds());
  motor.rotarLuzOrbital('sol', gradeSunPosition, 'z');
  motor.rotarLuzOrbital('luna', gradeSunPosition, 'z');
  //Cogemos la luz activa
  let luz = motor.luzRegistro.find(x => x.activa == true);
  if (luz.name == 'sol') {
    //Si es el sol y acabamos de pasar la hora de la puesta, hacemos salir la luna
    if (minuteOfDay >= window.minuteOfSunset) {
      motor.rotarLuzOrbitalA('sol', -100);
      motor.rotarLuzOrbitalA('luna', 100);
      motor.desactivarLuz('sol');
      motor.activarLuz('luna');
      iluminarLuna(minuteOfDay);
    }
    //Si no, actualizamos el color del sol para dibujar
    else {
      iluminarSol(minuteOfDay);
    }
  }
  else if (luz.name == 'luna') {
    //Idem Sol. Si es de noche y llegamos a la hora de amanecer, sacamos el sol
    if (minuteOfDay >= window.minuteOfSunrise && now.getHours() < 14) {
      motor.rotarLuzOrbitalA('luna', 100);
      motor.rotarLuzOrbitalA('sol', -80);
      //inclinación lateral para evitar errores
      motor.rotarLuzOrbital('sol', 10, 'x');
      motor.desactivarLuz('luna');
      motor.activarLuz('sol');
      iluminarSol(minuteOfDay);
    }
    //De noche, el color de la luna es uniforme durante el paso del tiempo
  }
  window.lastTime = now;
}

/**
 * Ilumina sol o luna en funcion de los minutos transcurridos en el dia
 * @param  {number} minuteOfDay
 */
function iluminarAstro(minuteOfDay) {
  if (minuteOfDay >= window.minuteOfSunrise && minuteOfDay <= window.minuteOfSunset) {
    motor.activarLuz("sol");
    motor.desactivarLuz("luna");
    iluminarSol(minuteOfDay);
    gl.uniform1i(glProgram[window.program].noche, -1);
  }
  else {
    motor.activarLuz("luna");
    motor.desactivarLuz("sol");
    iluminarLuna(minuteOfDay);
    gl.uniform1i(glProgram[window.program].noche, 0);
  }
}

/**
 * Ilumina el sol en funcion de los minutos transcurridos en el dia
 * @param  {number} minutes
 */
function iluminarSol(minutes) {
  let rgb = {};
  let minutesSinceSunrise = minutes - window.minuteOfSunrise;
  if (minutesSinceSunrise < window.minutesOfSun / 2) {
    let percent = minutesSinceSunrise / (window.minutesOfSun / 2);
    let rgbMoment = { red: rgbDiffSun.red * percent, green: rgbDiffSun.green * percent, blue: rgbDiffSun.blue * percent };
    rgb = { red: rgbMoment.red + rgbInit.red, green: rgbMoment.green + rgbInit.green, blue: rgbMoment.blue + rgbInit.blue }
  }
  else {
    let percent = (minutesSinceSunrise - (window.minutesOfSun / 2)) / (window.minutesOfSun / 2);
    let rgbMoment = { red: rgbDiffSun.red * percent, green: rgbDiffSun.green * percent, blue: rgbDiffSun.blue * percent };
    rgb = { red: rgbNoon.red - rgbMoment.red, green: rgbNoon.green - rgbMoment.green, blue: rgbNoon.blue - rgbMoment.blue }
  }
  window.factorIlumination = 1 - Math.abs((minutes - (window.minutesOfSun)) / (window.minutesOfSun));
  gl.uniform1i(glProgram[window.program].noche, -1);
  window.velocidadOrbital = (60 * 24 / 2) / minutesOfSun;
  sol.entity.setIntensidad(rgb.red / 70, rgb.green / 70, rgb.blue / 70);
  sol.entity.setIntensidadSpecular(rgb.red / 70, rgb.green / 70, rgb.blue / 70);
}

/**
 * Ilumina la luna en funcion de los minutos transcurridos en el dia. Pasadas las doce, suma un dia entero a los minutos transcurridos
 * @param  {number} minutes
 */
function iluminarLuna(minutes) {
  let minutesOfNight = (24 * 60) - window.minutesOfSun;
  window.velocidadOrbital = (60 * 24 / 2) / minutesOfNight;
  luna.entity.setIntensidad(0.3, 0.3, 0.3);
  luna.entity.setIntensidadSpecular(0.3, 0.3, 0.3);
  gl.uniform1i(glProgram[window.program].noche, 0);
  window.factorIlumination = 0.2;
}
/*
async function iluminarLuna(minutes) {
  let rgb = {};
  let minutesOfNight = (24 * 60) - window.minutesOfSun;
  let minutesSinceSunset = '';
  if (minutes > window.minuteOfSunset)
    minutesSinceSunset = minutes - window.minuteOfSunset;
  else
    minutesSinceSunset = minutes + ((24 * 60) - window.minuteOfSunset);

  if (minutesSinceSunset < minutesOfNight / 2) {
    let percent = minutesSinceSunset / (minutesOfNight / 2);
    rgb = { red: (window.rgbDiffMoon.red * percent) + window.rgbInit.red, green: (window.rgbDiffMoon.green * percent) + window.rgbInit.green, blue: (window.rgbDiffMoon.blue * percent) + window.rgbInit.blue };
  }
  else {
    let percent = (minutesSinceSunset - (minutesOfNight / 2)) / (minutesOfNight / 2);
    rgb = { red: window.rgbMoon.red - (window.rgbDiffMoon.red * percent), green: window.rgbMoon.green - (window.rgbDiffMoon.green * percent), blue: window.rgbMoon.blue - (window.rgbDiffMoon.blue * percent) };
  }
  window.velocidadOrbital=(60*24/2)/minutesOfNight;
  luna.entity.setIntensidad(0.1, 0.1, 0.1);
}*/

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
