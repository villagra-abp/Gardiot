/**
 * En este archivo se controlan los eventos y la interacción del motor con el usuario. Se controlan tanto los
 * eventos del ordenador como los gestos para dispositivos móviles
  TAG.50	Integración con la aplicación
  TAG.51	Realización de una aplicación que maneje el motor (sólo si no existe)
  TAG.52	Realización de una fachada genérica
  TAG.79	Realizar Drag&Drop de las plantas en nuestro jardín
 */

/**
 * Establece el parametro de identificacion de la planta arrastrada
 * TAG.79	Realizar Drag&Drop de las plantas en nuestro jardín
 * @param  {Object} e
 */
function drag(e) {
  window.dragging = true;
  e.dataTransfer.setData("text", e.target.id);
}

/**
 * Bloquea los disparadores de evento por defecto de JS
 * TAG.79	Realizar Drag&Drop de las plantas en nuestro jardín
 * @param  {Object} e
 */
function allowDrop(e) {
  e.preventDefault();
  e.stopPropagation();
}

/**
 * Establece el color de celda sobre la que se esta arrastrando
 * TAG.79	Realizar Drag&Drop de las plantas en nuestro jardín
 * @param  {Object} e
 */
function dragCanvas(e) {
  if (window.dragging) {
    e.preventDefault();
    e.stopPropagation();
    let cv = document.querySelector('#myCanvas');
    let point = get3DPoint([e.clientX, e.clientY], cv.offsetWidth, cv.offsetHeight);
    let p = [Math.round(point[0]), Math.round(point[2])];
    if (plantsMap.has(p[0] + '-' + p[1]))
      colorCell = ["suelo" + p[0] + '-' + p[1], "red"];
    else
      colorCell = ["suelo" + p[0] + '-' + p[1], "green"];
  }
}

/**
 * Inserta la planta en el jardin al soltar el click del raton
 * TAG.79	Realizar Drag&Drop de las plantas en nuestro jardín
 * @param  {Object} e
 */
function drop(e) {
  e.preventDefault();
  e.stopPropagation();
  let plant = e.dataTransfer.getData("text").split('-');
  let cv = e.target;
  let point = get3DPoint([e.clientX, e.clientY], cv.offsetWidth, cv.offsetHeight);
  let coordX = Math.round(point[0]);
  let coordY = Math.round(point[2]);

  if (coordX <= jardin.width * 1.0 / 2 && coordX >= jardin.width * (-1.0) / 2 && coordY <= jardin.length * 1.0 / 2 && coordY >= jardin.length * (-1.0) / 2) {
    let occupied = false;
    if (plantsMap.has(coordX + '-' + coordY)) {
      occupied = true;
    }

    if (!occupied) {
      insertMyPlant(window.jardin.id, plant[0], coordX, coordY, plant[1]);

    }
  }
  colorCell = [];
  plant.x = coordX;
  plant.y = coordY;
  plantsMap.set(coordX + '-' + coordY, plant.id);//Para la iluminación
  window.dragging = false;
}

/**
 * Controla las acciones asociadas al movimiento del raton sobre el canvas, camara principalmente
 * @param  {Object} e
 */
function mouse_move(e) {
  if (typeof projectionMatrix !== 'undefined') {
    let cv = document.querySelector('#myCanvas'),
      x = e.clientX,
      y = e.clientY;

    if (cv.getAttribute('moviendo-camara')) {
      let ejeY = window.originClickY - (y / cv.offsetHeight);
      let ejeX = window.originClickX - (x / cv.offsetWidth);
      let pos = motor.getPosCamaraActiva();
      let movPosible = pos[1] * 0.6;

      if (window.mode == 0) {//modo visualización
        e.preventDefault();
        e.stopPropagation();
        motor.moverCamara("dynamicCamera", ejeX * 10, 0, ejeY * 10);
      }
      else {
        let dir = vec3.fromValues(ejeX * 10, 0, ejeY * 10);
        let rad = Math.PI * rotationCamY / 180;
        vec3.rotateY(dir, dir, vec3.fromValues(0.0, 0.0, 0.0), rad);
        //vec3.rotateY(dir, dir, vec3.fromValues(0.0, 0.0, 0.0), Math.PI * 45 / 180);
        motor.moverCamara("dynamicCamera", dir[0], 0, dir[2]);
      }
      //Necesarios para calcular la dirección de la cámara cuando arrastremos (variables ejeX y ejeY)
      window.originClickX = x / cv.offsetWidth;
      window.originClickY = y / cv.offsetHeight;
    }

    else if (cv.getAttribute('rotando-camara')) {
      let ejeY = window.originClickY - (y / cv.offsetHeight);
      let ejeX = window.originClickX - (x / cv.offsetWidth);
      if (window.mode == 1) {
        //window.rotationCamY+=(ejeX*150);
        //motor.rotarCamara("dynamicCamera", ejeX * 150, "z");
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

        let plant = window.jardin.plants.find(x => x.isDragging);
        if (plant) {
          motor.moverMallaA(plant.id, point[0], 0, point[2]);
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

/**
 * Controla las acciones asociadas al los clicks derecho (rotar) e izquierdo (seleccionar planta) del raton
 * @param  {Object} e
 */
function mouse_down(e) {
  let cv = document.querySelector('#myCanvas'),
    x = e.clientX,
    y = e.clientY;
  if (!cv.getAttribute('rotando-camara') && !cv.getAttribute('moviendo-camara') && !window.dragging) {
    switch (e.which) {
      case 1: //Izquierdo
        if (window.mode == 1) {
          let point = get3DPoint([e.clientX, e.clientY], cv.offsetWidth, cv.offsetHeight);
          let coordX = Math.round(point[0]);
          let coordY = Math.round(point[2]);
          let plant = window.jardin.plants.find(x => x.x == coordX && x.y == coordY);
          if (plant) {
            plant.isDragging = true;
            window.dragging = true;
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

/**
 * Controla las acciones asociadas al levantar el dedo del ratón. Derecho (detener rotacion), izquierdo (colocar planta seleccionada)
 * @param  {Object} e
 */
function mouse_up(e) {
  colorCell = [];
  let cv = document.querySelector('#myCanvas')
  switch (e.which) {
    case 3: //Derecho
      if (!cv.getAttribute('moviendo-camara')) {
        window.originClickX = undefined;
        window.originClickY = undefined;
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
        let plant = window.jardin.plants.find(x => x.isDragging);
        if (plant) {
          plant.isDragging = false;
          window.dragging = false;
          if(plant.model==null || typeof plant.model == 'undefined')
            plant.model='logo';
          let datos = dataPlants[plant.model.toUpperCase()];
          if (coordX <= jardin.width * 1.0 / 2 && coordX >= jardin.width * (-1.0) / 2 && coordY <= jardin.length * 1.0 / 2 && coordY >= jardin.length * (-1.0) / 2) {
            let occupied = false;
            if (plantsMap.has(coordX + '-' + coordY)) {
              motor.moverMallaA(plant.id, plant.x, datos.posY, plant.y);
              occupied = true;
              break;
            }
            if (!occupied)
              updateMyPlant(window.jardin.id, plant, coordX, coordY);
          }
          else {
            let rect = cv.getBoundingClientRect();
            let xPos = e.clientX - rect.left;
            let yPos = e.clientY - rect.top;
            if (xPos >= 90 * cv.offsetWidth / 100 && yPos >= 0 && xPos <= cv.offsetWidth && yPos <= 10 * cv.offsetHeight / 100)
              deleteMyPlant(window.jardin.id, plant);
            else
              motor.moverMallaA(plant.id, plant.x, datos.posY, plant.y);
          }
          cv.removeAttribute('rotando-camara');
          window.originClickX = undefined;
          window.originClickY = undefined;
          break;
        }
      }
      cv.removeAttribute('moviendo-camara');
      break;

  }
}

/**
 * Desactiva la variable general que controla el dragging
 * @param  {Object} e
 */
function disableDragging(e) {
  window.dragging = false;
}

/**
 * Elimina una MyPlant
 * @param  {Object} e
 */
function deletePlant(e) {
  e.preventDefault();
  e.stopPropagation();
  if (window.mode == 1 && window.dragging) {
    let plant = window.jardin.plants.find(x => x.isDragging);
    if (plant) {
      plant.isDragging = false;
      window.dragging = false;

      deleteMyPlant(window.jardin.id, plant);
      colorCell = [];
    }
  }
}

/**
 * Zoom in
 */
function plusZoom() {
  if (window.mode == 0) {
    let pos = motor.getPosCamaraActiva();
    if (pos[1] > 3) {
      motor.escalarCamara("dynamicCamera", 0.9);
    }
  }

  else if (window.mode == 1) {
    let camera = motor.getPosCamaraActiva();
    if (camera[1] > 4) {
      motor.moverCamara("dynamicCamera", 0, -0.2, 0);
    }
  }
}

/**
 * Zoom out
 */
function subZoom() {
  if (window.mode == 0) {
    let pos = motor.getPosCamaraActiva();
    if (pos[1] < 5) {
      motor.escalarCamara("dynamicCamera", 1.1);
    }
  }

  else if (window.mode == 1) {
    let camera = motor.getPosCamaraActiva();
    if (camera[1] < 8) {
      motor.moverCamara("dynamicCamera", 0, 0.2, 0);
    }
  }
}


/**
 * Controla el zoom de la cámara con la rueda del ratón
 * @param  {Object} e
 */
function scrolling(e) {
  e.preventDefault();
  e.stopPropagation();
  if (window.mode == 0) {

    let p = vec3.fromValues(-1.0, 1.0, 1.0);
    let pos = motor.getPosCamaraActiva();
    if (e.deltaY < 0 && pos[1] > 3) {

      motor.escalarCamara("dynamicCamera", 0.9);

    }
    else if (e.deltaY > 0 && pos[1] < 5) {
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
    if (e.deltaY < 0 && camera[1] > 4) {
      motor.moverCamara("dynamicCamera", vector[0], vector[1], vector[2]);
    }

    else if (e.deltaY > 0 && camera[1] < 8) {
      motor.moverCamara("dynamicCamera", -vector[0], -vector[1], -vector[2]);
    }
  }
}

/**
 * Se ejecutará para añadir plantas desde el móvil
 * @param {Object} e evento javascript
 */
function handlePlant(e) {
  if (window.mobile) {
    let plant = e.srcElement.id.split('-');
    let posCam = motor.getPosCamaraActiva();
    let inserted = false;
    for (let i = Math.round(posCam[0]); i < window.jardin.width / 2 && !inserted; i++) {
      for (let j = Math.round(posCam[2]); j < window.jardin.length / 2 && !inserted; j++) {
        if (!window.plantsMap.has(i + '-' + j)) {
          insertMyPlant(window.jardin.id, plant[0], i, j, plant[1]);
          inserted = true;

        }
      }
    }
  }
}

/**
 * Controla los gestos con los dispositivos táctiles
 */
function hammertime() {
  var is_touch_device = 'ontouchstart' in document.documentElement;
  if (is_touch_device) {
    mc = new Hammer(document.getElementById('myCanvas'), {
    });

    // create a pinch and rotate recognizer
    // these require 2 pointers
    var pinch = new Hammer.Pinch();
    var rotate = new Hammer.Rotate();

    var pan = new Hammer.Pan();
    var press = new Hammer.Press();

    // we want to detect both the same time
    pinch.recognizeWith(rotate);
    pan.recognizeWith(press);

    // add to the Manager
    mc.add([pinch, rotate]);
    mc.add([pan, press]);

    var liveScale = 1;
    var rotatingscaling=false;
    var prevRotation = 0;
    var rotation = 0;
    var scale = 1, last_scale = 1,
      rotation = 0, last_rotation, dragReady = 0, start_rotation = 0;

    var liveScale = 1;
    var currentRotation = 0, lastRotation, startRotation;
    var currentScale = 0;

    var lastPosX = 0, lastPosY = 0, posX = 0, posY = 0;

    mc.on("rotate rotatestart rotateend pan press panstart panend", function (e) {
      e.preventDefault();

      let canvas = document.querySelector('#myCanvas');


      switch (e.type) {
        case 'rotatestart':
          rotatingscaling=true;
          currentRotation = e.rotation;
          currentScale = Math.round(e.scale);
          break;
        case 'rotate':
        let pos = motor.getPosCamaraActiva();


          e.pointers = [];
          if (window.mode == 1) {
            if(currentScale-e.scale<0){
              if (pos[1] > 4) {
                motor.moverCamara("dynamicCamera", 0, (currentScale - e.scale) * 5, 0);
              }
            }else{
              if (pos[1] < 8) {
                motor.moverCamara("dynamicCamera", 0, (currentScale - e.scale) * 5, 0);
              }
            }
          }

          else if (window.mode == 0) {
            diffScale = 1 + ((currentScale - e.scale) * 2);
            motor.rotarCamaraOrbital("dynamicCamera", e.rotation - currentRotation, "y");
            if (diffScale < 1) {
              if (pos[1] > 3) {
                motor.escalarCamara("dynamicCamera", diffScale);
              }
            }else{
              if (pos[1] < 5) {
                motor.escalarCamara("dynamicCamera", diffScale);
              }
            }
          }
            currentRotation = e.rotation;
            currentScale = e.scale;

            break;

        case 'panstart':
          window.originDeltaX = 0;
          window.originDeltaY = 0;

          break;
        case 'pan':
        
          if (!dragging) {
            motor.moverCamara("dynamicCamera", (originDeltaX - e.deltaX) / 100, 0, (originDeltaY - e.deltaY) / 100);
            originDeltaX = e.deltaX;
            originDeltaY = e.deltaY;
          }
          else {
            let point = get3DPoint([e.center.x, e.center.y], canvas.offsetWidth, canvas.offsetHeight);
            let plant = window.jardin.plants.find(x => x.isDragging);
            if (plant) {
              motor.moverMallaA(plant.id, point[0], 0, point[2]);
              break;
            }

          }

          break;

        case 'panend':

          if (dragging) {
            let plant = window.jardin.plants.find(x => x.isDragging);
            let bounds = document.getElementById('del').getBoundingClientRect();
            if (e.center.x < bounds.right && e.center.x > bounds.left
              && e.center.y > bounds.top && e.center.y < bounds.bottom) {
              window.dragging = false;

              deleteMyPlant(window.jardin.id, plant);
            }
            else {
              let point = get3DPoint([e.center.x, e.center.y], canvas.offsetWidth, canvas.offsetHeight);
              let coordX = Math.round(point[0]);
              let coordY = Math.round(point[2]);

              if (plant) {
                plant.isDragging = false;
                window.dragging = false;
                if (coordX <= jardin.width * 1.0 / 2 && coordX >= jardin.width * (-1.0) / 2 && coordY <= jardin.length * 1.0 / 2 && coordY >= jardin.length * (-1.0) / 2) {
                  let occupied = false;
                  if (plantsMap.has(coordX + '-' + coordY)) {
                    motor.moverMallaA(plant.id, plant.x, 0, plant.y);
                    occupied = true;
                    break;
                  }
                  if (!occupied)
                    updateMyPlant(window.jardin.id, plant, coordX, coordY);
                }
                else {
                  motor.moverMallaA(plant.id, plant.x, 0, plant.y);
                }

              }
            }
            window.dragging = false;
          }

          break;
        case 'press':
          if (window.mode == 1) {
            let point = get3DPoint([e.center.x, e.center.y], canvas.offsetWidth, canvas.offsetHeight);

            let coordX = Math.round(point[0]);
            let coordY = Math.round(point[2]);
            if (plantsMap.has(coordX + '-' + coordY)) {
              let plant = window.jardin.plants.find(x => x.x == coordX && x.y == coordY);
              plant.isDragging = true;
              window.dragging = true;
              window.navigator.vibrate(50);
            }
          }
          break;
      }

    });
  }
}





