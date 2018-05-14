//bucle de animación
function animLoop() {
    now = Date.now();
    elapsed = now - then;
  
    //Si toca dibujar y el motor está corriendo
    if (elapsed > fpsInterval && motor.running) {
      then = now - (elapsed % fpsInterval);
      motor.drawSombras();
      motor.draw();
     
    }
    requestAnimationFrame(animLoop, canvas);
  }

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


//función para inicializar los shaders
function cargarShaders() {
    //aquí dentro cogemos los recursos del directorio
    let vs = [];
    let fs = [];

    for (let i = 0; i < vertexShaders.length && i < fragmentShaders.length; i++) {
        vs[i] = gestor.getRecurso(vertexShaders[i], 'shader').shader,
        fs[i] = gestor.getRecurso(fragmentShaders[i], 'shader').shader;

        //Ya tenemos los shaders aquí! (formato texto)
        //console.log(vs);
        //console.log(fs);

        //creamos el programa
        glProgram[i] = gl.createProgram();

        //añadimos los shaders al programa
        gl.attachShader(glProgram[i], makeShader(vs[i], gl.VERTEX_SHADER));
        gl.attachShader(glProgram[i], makeShader(fs[i], gl.FRAGMENT_SHADER));
        gl.linkProgram(glProgram[i]);


        if (!gl.getProgramParameter(glProgram[i], gl.LINK_STATUS)) {
            alert("No se puede inicializar el shader");
        }
    }

    gl.useProgram(glProgram[window.program]);

}

//inicializamos parámetros básicos de WebGL
function setupWebGL() {

    glProgram[window.program].shadowMapUniform = gl.getUniformLocation(glProgram[window.program], "uShadowMap");

    //Nos traemos las matrices, projection, model y view al motor
    glProgram[window.program].pMatrixUniform = gl.getUniformLocation(glProgram[window.program], "uPMatrix");
    glProgram[window.program].mMatrixUniform = gl.getUniformLocation(glProgram[window.program], "uMMatrix");
    glProgram[window.program].vMatrixUniform = gl.getUniformLocation(glProgram[window.program], "uVMatrix");
    glProgram[window.program].mvMatrixUniform = gl.getUniformLocation(glProgram[window.program], "uMVMatrix");
    glProgram[window.program].mvpMatrixUniform = gl.getUniformLocation(glProgram[window.program], "uMVPMatrix");
    glProgram[window.program].lmvpMatrixUniform = gl.getUniformLocation(glProgram[window.program], "uMVPMatrixFromLight");
    glProgram[window.program].lpMatrixUniform = gl.getUniformLocation(glProgram[window.program], "uPMatrixFromLight");
    glProgram[window.program].lvMatrixUniform = gl.getUniformLocation(glProgram[window.program], "uVMatrixFromLight");


    glProgram[window.program].samplerUniform = gl.getUniformLocation(glProgram[window.program], "uSampler");
    glProgram[window.program].textured = gl.getUniformLocation(glProgram[window.program], "uTextured");
    glProgram[window.program].lighted = gl.getUniformLocation(glProgram[window.program], "uLighted");
    glProgram[window.program].hovered = gl.getUniformLocation(glProgram[window.program], "uHovered");
    //matriz de normales
    glProgram[window.program].normalMatrixUniform = gl.getUniformLocation(glProgram[window.program], "uNormalMatrix");
    //Backface culling

    glProgram[window.program].ka = gl.getUniformLocation(glProgram[window.program], "material.Ka");
    glProgram[window.program].kd = gl.getUniformLocation(glProgram[window.program], "material.Kd");
    glProgram[window.program].ks = gl.getUniformLocation(glProgram[window.program], "material.Ks");

    glProgram[window.program].shin = gl.getUniformLocation(glProgram[window.program], "propiedades.shininess");
    glProgram[window.program].opac = gl.getUniformLocation(glProgram[window.program], "propiedades.opacity");

}

function initFramebufferSombras(){
    glProgram[2].lmvpMatrixUniform = gl.getUniformLocation(glProgram[2], "uMVPMatrixFromLight");


    shadowFramebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, shadowFramebuffer);

    shadowDepthTexture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0+window.index);
    gl.bindTexture(gl.TEXTURE_2D, shadowDepthTexture);
    window.shadowIndex=parseInt(''+(window.index));
    window.index++;

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, shadowDepthTextureSize, shadowDepthTextureSize, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

    renderBuffer = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, renderBuffer);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, shadowDepthTextureSize, shadowDepthTextureSize);

    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, shadowDepthTexture, 0);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderBuffer);

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
}

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
  
  function get3DPoint(point2D, width, height) {
    let x = (point2D[0] / width)*2-1;
  
    let y = 1-(point2D[1] / height)*2;

    let viewProjectionMatrix = [];
    mat4.multiply(viewProjectionMatrix, projectionMatrix, viewMatrix);
  
    let invert = [];
    mat4.invert(invert, viewProjectionMatrix);
  
    let pointaux = [];
    vec3.transformMat4(pointaux, [0, 0, 0], viewProjectionMatrix);
  
    let point = [x, y, pointaux[2]];
  
    vec3.transformMat4(point, point, invert);
    //console.log(point);
    return point;
  }
  


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

async function iluminarSol(minutes) {
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
    sol.entity.setIntensidad(rgb.red / 100, rgb.green / 100, rgb.blue / 100);
    sol.entity.setIntensidadSpecular(rgb.red / 100, rgb.green / 100, rgb.blue / 100);
  }
  
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
    luna.entity.setIntensidad(rgb.red / 255, rgb.green / 255, rgb.blue / 255);
  }
  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
