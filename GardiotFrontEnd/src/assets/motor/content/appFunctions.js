//bucle de animación
function animLoop() {
  now = Date.now();
  elapsed = now - then;

  //Si toca dibujar y el motor está corriendo
  if (elapsed > fpsInterval && motor.running) {
    then = now - (elapsed % fpsInterval);
    if (window.transition) {
      motor.moverCamara("dynamicCamera", window.step[0], window.step[4], window.step[1]);
      //motor.escalarMalla("dynamicCamera", 1+window.step[2]);
      window.escala += window.step[2];
      console.log(escala, step[2]);
      let sc = [];
      mat4.fromScaling(sc, vec3.fromValues(escala, escala, escala));
      motor.getCamaraActiva().dad.dad.dad.dad.dad.entity.matrix = sc;

      motor.rotarCamara("dynamicCamera", window.step[3], "x");

      let pos = motor.getPosCamaraActiva();
      //console.log(pos);

      if (window.cont == 0) {
        motor.moverCamaraA("dynamicCamera", 0, camHeight, 0);
        motor.resetOrbital("dynamicCamera");
        window.transition = false;
        window.rotY = true;
      }
      window.cont--;
    }
    else if (cont < 0 && cont >= -10) {
      //motor.rotarCamara("dynamicCamera", window.step[4], "z");
      cont--;
    }
    else {
      cont = 19;

    }

    //motor.drawSombras();
    motor.draw();
  }
  requestAnimationFrame(animLoop, canvas);
}


function drag(e) {
  console.log('draggin');
  console.log(e.target.id);
  e.dataTransfer.setData("text", e.target.id);
}

function allowDrop(e) {
  e.preventDefault();
  e.stopPropagation();
}

function drop(e) {
  console.log('dropping');
  e.preventDefault();
  e.stopPropagation();
  let plant = e.dataTransfer.getData("text").split('-');
  let cv = e.target;
  let point = get3DPoint([e.clientX, e.clientY], cv.offsetWidth, cv.offsetHeight);
  let coordX = Math.round(point[0]);
  let coordY = Math.round(point[2]);

  if (coordX <= jardin.width * 1.0 / 2 && coordX >= jardin.width * (-1.0) / 2 && coordY <= jardin.length * 1.0 / 2 && coordY >= jardin.length * (-1.0) / 2) {
    let occupied = false;
    for (let value of window.jardin.plants) {
      if (value.x == coordX && value.y == coordY) {
        occupied = true;
        break;
      }
    }
    if (!occupied)
      insertMyPlant(window.jardin.id, plant[0], window.jardin.soil, coordX, coordY, plant[1]);
  }
}


function mouse_move(e) {
  if (typeof projectionMatrix !== 'undefined') {
    let cv = document.querySelector('#myCanvas'),
      x = e.clientX,
      y = e.clientY;

    if (cv.getAttribute('moviendo-camara')) {
      //console.log(`MOUSEMOVE-> Posición: ${fila} - ${columna}`);
      let ejeY = window.originClickY - (y / cv.offsetHeight);
      let ejeX = window.originClickX - (x / cv.offsetWidth);
      //esto será lo bueno
      let pos = motor.getPosCamaraActiva();
      let movPosible = pos[1] * 0.6;

      if (window.mode == 0) {//modo visualización
        //antigua rotación
        //motor.rotarCamaraOrbital("dynamicCamera", ejeX*150, "y");
        //motor.rotarCamaraOrbital("dynamicCamera", ejeY*150, "x");
        e.preventDefault();
        e.stopPropagation();
        //nuevo movimiento

        motor.moverCamara("dynamicCamera", ejeX * 10, 0, ejeY * 10);
        //motor.moverCamara("dynamicCamera", -ejeY*10, 0, ejeY*10);
      }
      else {
        let dir = vec3.fromValues(ejeX * 10, 0, ejeY * 10);
        let rad = Math.PI * rotationCamY / 180;
        vec3.rotateY(dir, dir, vec3.fromValues(0.0, 0.0, 0.0), rad);
        vec3.rotateY(dir, dir, vec3.fromValues(0.0, 0.0, 0.0), Math.PI * 45 / 180);

        motor.moverCamara("dynamicCamera", dir[0], 0, dir[2]);
      }


      //Necesarios para calcular la dirección de la cámara cuando arrastremos (variables ejeX y ejeY)
      //de mouse_move
      window.originClickX = x / cv.offsetWidth;
      window.originClickY = y / cv.offsetHeight;
    }

    else if (cv.getAttribute('rotando-camara')) {
      let ejeY = window.originClickY - (y / cv.offsetHeight);
      let ejeX = window.originClickX - (x / cv.offsetWidth);
      if (window.mode == 1) {

        motor.rotarCamara("dynamicCamera", ejeX * 150, "z");
      } else {
        motor.rotarCamaraOrbital("dynamicCamera", ejeX * 150, "y");
      }
      //motor.rotarCamara("dynamicCamera", ejeY*50, "z");
      window.originClickX = x / cv.offsetWidth;
      window.originClickY = y / cv.offsetHeight;
    }

    if (window.mode != 0) {
      let point = get3DPoint([e.clientX, e.clientY], cv.offsetWidth, cv.offsetHeight);
      let p = [Math.round(point[0]), Math.round(point[2])];
      if (window.dragging) {
        e.preventDefault();
        e.stopPropagation();

        if (plantsMap.has(p[0] + '-' + p[1]))
          colorCell = ["suelo" + p[0] + '-' + p[1], "red"];
        else
          colorCell = ["suelo" + p[0] + '-' + p[1], "green"];


        for (let plant of window.jardin.plants) {
          if (plant.isDragging) {
            motor.moverMallaA(plant.id, point[0], 0, point[2]);
            break;
          }
        }
      }
      else if (plantsMap.has(p[0] + '-' + p[1])) {
        document.body.style.cursor = 'pointer';
        hovered = plantsMap.get(Math.round(point[0]) + '-' + Math.round(point[2]));
      }
      else {
        document.body.style.cursor = 'default';
        hovered = -1;
      }
    }
  }
}



function mouse_down(e) {
  let cv = document.querySelector('#myCanvas'),
    x = e.clientX,
    y = e.clientY;
  if (!cv.getAttribute('rotando-camara') && !cv.getAttribute('moviendo-camara') && !window.dragging) {
    switch (e.which) {

      case 1: //Izquierdo
        if (window.mode == 1) {
          //console.log(x, y, cv.offsetWidth, cv.offsetHeight);
          //console.log(`DOWN-> Posición: ${fila} - ${columna}`);
          let point = get3DPoint([e.clientX, e.clientY], cv.offsetWidth, cv.offsetHeight);
          let coordX = Math.round(point[0]);
          let coordY = Math.round(point[2]);
          for (let plant of window.jardin.plants) {
            if (plant.x == coordX && plant.y == coordY) {
              plant.isDragging = true;
              window.dragging = true;
              break;
            }
          }
          if (!dragging) {
            cv.setAttribute('moviendo-camara', 'true');
          }
        }
        else {
          cv.setAttribute('moviendo-camara', 'true');
          //Necesarios para calcular la dirección de la cámara cuando arrastremos (variables ejeX y ejeY)
          //de mouse_move

        }
        window.originClickX = x / cv.offsetWidth;
        window.originClickY = y / cv.offsetHeight;
        break;

      case 3:
        //if(window.mode==1){
        window.originClickX = x / cv.offsetWidth;
        window.originClickY = y / cv.offsetHeight;
        cv.setAttribute('rotando-camara', 'true');
        break;
      //}
    }
  }
}

function mouse_up(e) {
  colorCell = [];
  let cv = document.querySelector('#myCanvas')
  switch (e.which) {
    case 3: //Derecho
      if (!cv.getAttribute('moviendo-camara')) {
        window.originClickX = undefined;
        window.originClickY = undefined;

        //console.log(`UP-> Posición: ${fila} - ${columna}`);
        cv.removeAttribute('rotando-camara');
      }

      break;
    case 1: //Izquierdo
      if (window.mode != 0 && window.dragging) {
        e.preventDefault();
        e.stopPropagation();
        let point = get3DPoint([e.clientX, e.clientY], cv.offsetWidth, cv.offsetHeight);
        let coordX = Math.round(point[0]);
        let coordY = Math.round(point[2]);
        for (let plant of window.jardin.plants) {
          if (plant.isDragging) {
            plant.isDragging = false;
            window.dragging = false;
            if (coordX <= jardin.width * 1.0 / 2 && coordX >= jardin.width * (-1.0) / 2 && coordY <= jardin.length * 1.0 / 2 && coordY >= jardin.length * (-1.0) / 2) {
              let occupied = false;
              for (let value of window.jardin.plants) { //Si encuentra una planta con las mismas coordenadas, la devuelve a la pos original
                if (value.x == coordX && value.y == coordY) {
                  motor.moverMallaA(plant.id, plant.x, 0, plant.y);
                  occupied = true;
                  break;
                }
              }
              if (!occupied)
                updateMyPlant(window.jardin.id, plant, window.jardin.soil, coordX, coordY);
            }
            else {
              let rect = cv.getBoundingClientRect();
              let xPos = e.clientX - rect.left;
              let yPos = e.clientY - rect.top;
              if (xPos >= 90 * cv.offsetWidth / 100 && yPos >= 0 && xPos <= cv.offsetWidth && yPos <= 10 * cv.offsetHeight / 100)
                deleteMyPlant(window.jardin.id, plant);
              else
                motor.moverMallaA(plant.id, plant.x, 0, plant.y);
            }
            cv.removeAttribute('rotando-camara');
            window.originClickX = undefined;
            window.originClickY = undefined;
            break;
          }
        }
      }


      //console.log(`UP-> Posición: ${fila} - ${columna}`);
      cv.removeAttribute('moviendo-camara');

      break;

  }
}

function deletePlant() {
  if (window.mode != 0 && window.dragging) {

    for (let plant of window.jardin.plants) {
      if (plant.isDragging) {
        plant.isDragging = false;
        window.dragging = false;

        deleteMyPlant(window.jardin.id, plant);

      }
    }
  }
}

function plusZoom() {
  let p = vec3.fromValues(-0.5, 0.5, 0.5);
  let pos = motor.getPosCamaraActiva();

  if (pos[1] > camHeight / 2) {


    if (window.mode == 0) {
      motor.escalarCamara("dynamicCamera", 0.9);
      //motor.escalarCamara("dynamicCamera", 0.95);
    } else {
      motor.moverCamara("dynamicCamera", 0, -p[1], 0);
    }
  }

}

function subZoom() {
  let p = vec3.fromValues(-0.5, 0.5, 0.5);
  let pos = motor.getPosCamaraActiva();

  if (pos[1] < camHeight + (camHeight / 2)) {
    if (window.mode == 0) {
      motor.escalarCamara("dynamicCamera", 1.1);
    } else {
      motor.moverCamara("dynamicCamera", 0, p[1], 0);
    }
  }

}



//Esto es solo para el zoom de la cámara en el modo edición
function scrolling(e) {
  e.preventDefault();
  e.stopPropagation();
  if (window.mode == 0) {

    let p = vec3.fromValues(-1.0, 1.0, 1.0);
    let pos = motor.getPosCamaraActiva();
    if (e.deltaY < 0 && pos[1] > camHeight / 2) {

      motor.escalarCamara("dynamicCamera", 0.9);

    }
    else if (e.deltaY > 0 && pos[1] < camHeight + (camHeight / 2)) {
      motor.escalarCamara("dynamicCamera", 1.1);
    }

  }

  else if (window.mode == 1) {
    let cv = e.target;
    let point = get3DPoint([e.clientX, e.clientY], cv.offsetWidth, cv.offsetHeight);//punto donde queremos acercarnos
    let camera = motor.getPosCamaraActiva();

    let vector = vec3.fromValues(point[0] - camera[0], point[1] - camera[1], point[2] - camera[2]);
    vec3.normalize(vector, vector);
    vec3.scale(vector, vector, 1);
    if (e.deltaY < 0 && camera[1] > (camHeight / 2)) {
      motor.moverCamara("dynamicCamera", vector[0], vector[1], vector[2]);
    }

    else if (e.deltaY > 0 && camera[1] < camHeight + (camHeight / 2)) {
      motor.moverCamara("dynamicCamera", -vector[0], -vector[1], -vector[2]);
    }
  }

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
  let x = point2D[0] / width;
  x = x * 2.0;
  x = x - 1;

  let y = point2D[1] / height;
  y = y * 2.0;
  y = 1 - y;

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



async function rotarSol() {
  await sleep(300000); //5 min
  let now = new Date();
  let minutesDiff = Math.abs(now - window.lastTime) / 60000;
  let relationNowDay = minutesDiff * window.relationSunDay;
  let gradeSunPosition = (relationNowDay * 360) / (24 * 60);
  motor.rotarLuzOrbital('sol', gradeSunPosition);
  motor.rotarLuzOrbital('luna', gradeSunPosition);
  window.lastTime = now;
  iluminarAstro(now.getHours() * 60 + now.getMinutes());
  rotarSol();
}

async function demoSol() {
  await sleep(500);
  let now = new Date(window.lastTime);
  now.setHours(now.getHours() + 1);
  let minutesDiff = Math.abs(now - window.lastTime) / 60000;
  let gradeSunPosition = (relationNowDay * 360) / (24 * 60);
  console.log("Roto el sol " + gradeSunPosition + ' grados a las ' + now.getHours() + ':' + now.getMinutes());
  motor.rotarLuzOrbital('sol', gradeSunPosition);
  motor.rotarLuzOrbital('luna', gradeSunPosition);
  window.lastTime = now;
  iluminarAstro(now.getHours() * 60 + now.getMinutes());
  demoSol();
}

async function iluminarAstro(minuteOfDay) {
  if (minuteOfDay >= window.minuteOfSunrise && minuteOfDay <= window.minuteOfSunset) {
    motor.activarLuz("sol");
    motor.desactivarLuz("luna");
    iluminarSol(minuteOfDay);
  }
  else {
    motor.activarLuz("luna");
    motor.desactivarLuz("sol");
    iluminarLuna(minuteOfDay);
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
