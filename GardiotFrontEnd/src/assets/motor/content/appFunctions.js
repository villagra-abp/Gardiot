//bucle de animación
function animLoop(){
    now=Date.now();
    elapsed=now-then;

    //Si toca dibujar y el motor está corriendo
    if(elapsed>fpsInterval && motor.running){
        then=now-(elapsed%fpsInterval);
        if(window.transition){
          motor.moverCamara("dynamicCamera", window.step[0], window.step[4], window.step[1]);
          //motor.escalarMalla("dynamicCamera", 1+window.step[2]);
          window.escala+=window.step[2];
          console.log(escala, step[2]);
          let sc=[];
          mat4.fromScaling(sc, vec3.fromValues(escala, escala, escala));
          motor.getCamaraActiva().dad.dad.dad.dad.dad.entity.matrix=sc;

          motor.rotarCamara("dynamicCamera", window.step[3], "x");

          let pos=motor.getPosCamaraActiva();
          //console.log(pos);

          if(window.cont==0){
            motor.moverCamaraA("dynamicCamera", 0, camHeight, 0);
            motor.resetOrbital("dynamicCamera");
            window.transition=false;
            window.rotY=true;
          }
          window.cont--;
        }
        else if(cont<0 && cont>=-10){
          //motor.rotarCamara("dynamicCamera", window.step[4], "z");
          cont--;
        }
        else {
          cont=19;
        }

        

        motor.draw();
    }
    requestAnimationFrame(animLoop, canvas);
}


function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function allowDrop(e) {
  e.preventDefault();
  e.stopPropagation();
}

function drop(e) {
    e.preventDefault();
    e.stopPropagation();
    let plant = e.dataTransfer.getData("text");
    let cv = e.target;
    let point = get3DPoint([e.clientX, e.clientY], cv.offsetWidth, cv.offsetHeight);
    let coordX = Math.round(point[0]);
    let coordY = Math.round(point[2]);

    if (coordX <= jardin.width*1.0/2 && coordX >= jardin.width*(-1.0)/2 && coordY <= jardin.length*1.0/2 && coordY >= jardin.length*(-1.0)/2) {
      let occupied = false;
        for (let value of window.jardin.plants) {
          if (value.x == coordX && value.y == coordY) {
            occupied = true;
            break;
          }
        }
        if (!occupied)
          insertMyPlant(window.jardin.id, plant, window.jardin.soil, coordX, coordY);
    }
}


function mouse_move(e){
  if(typeof matrixProjection !== 'undefined'){
    let cv=document.querySelector('#myCanvas'),
        x=e.clientX,
        y=e.clientY;

				if(cv.getAttribute('moviendo-camara')){
	        //console.log(`MOUSEMOVE-> Posición: ${fila} - ${columna}`);
          let ejeY=window.originClickY-(y/cv.offsetHeight);
          let ejeX=window.originClickX-(x/cv.offsetWidth);
          //esto será lo bueno
          let pos=motor.getPosCamaraActiva();
          let movPosible=pos[1]*0.6;

          if(window.mode==0){//modo visualización
            //antigua rotación
            //motor.rotarCamaraOrbital("dynamicCamera", ejeX*150, "y");
            //motor.rotarCamaraOrbital("dynamicCamera", ejeY*150, "x");
            e.preventDefault();
            e.stopPropagation();
            //nuevo movimiento

            motor.moverCamara("dynamicCamera", ejeX*10, 0, ejeX*5);
            motor.moverCamara("dynamicCamera", -ejeY*10, 0, ejeY*10);
          }
          else{
              let dir=vec3.fromValues(ejeX*10, 0, ejeY*10);
              let rad=Math.PI*rotationCamY/180;
              vec3.rotateY(dir, dir, vec3.fromValues(0.0, 0.0, 0.0), rad);

              motor.moverCamara("dynamicCamera",  dir[0], 0, dir[2]);
          }


					//Necesarios para calcular la dirección de la cámara cuando arrastremos (variables ejeX y ejeY)
          //de mouse_move
					window.originClickX=x/cv.offsetWidth;
					window.originClickY=y/cv.offsetHeight;
        }

        else if(cv.getAttribute('rotando-camara')){
          let ejeY=window.originClickY-(y/cv.offsetHeight);
          let ejeX=window.originClickX-(x/cv.offsetWidth);
          motor.rotarCamara("dynamicCamera", ejeX*150, "z");
          //motor.rotarCamara("dynamicCamera", ejeY*50, "z");
          window.originClickX=x/cv.offsetWidth;
					window.originClickY=y/cv.offsetHeight;
        }

        if (window.mode != 0) {
          let point = get3DPoint([e.clientX, e.clientY], cv.offsetWidth, cv.offsetHeight);
          let p=[Math.round(point[0]), Math.round(point[2])];
          if(window.dragging) {
            e.preventDefault();
            e.stopPropagation();

            if(plantsMap.has(p[0]+'-'+p[1]))
              colorCell=["suelo"+p[0]+'-'+p[1], "red"];
            else
              colorCell=["suelo"+p[0]+'-'+p[1], "green"];


            for (let plant of window.jardin.plants) {
              if (plant.isDragging) {
                motor.moverMallaA(plant.id, point[0], 0, point[2]);
                break;
              }
            }
          }
          else if(plantsMap.has(p[0]+'-'+p[1])){
            document.body.style.cursor = 'pointer';
            hovered=plantsMap.get(Math.round(point[0])+'-'+Math.round(point[2]));
          }
          else{
            document.body.style.cursor = 'default';
            hovered=-1;
          }
        }
      }
}



function mouse_down(e){
  let cv=document.querySelector('#myCanvas'),
  x=e.clientX,
  y=e.clientY;

  switch (e.which) {

    case 1: //Izquierdo
    if (window.mode ==1) {
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
      if(!dragging){
        cv.setAttribute('moviendo-camara', 'true');
      }
    }
      else{
        cv.setAttribute('moviendo-camara', 'true');
      //Necesarios para calcular la dirección de la cámara cuando arrastremos (variables ejeX y ejeY)
      //de mouse_move

    }
    window.originClickX=x/cv.offsetWidth;
    window.originClickY=y/cv.offsetHeight;
      break;

      case 3:
      if(window.mode==1){
        window.originClickX=x/cv.offsetWidth;
        window.originClickY=y/cv.offsetHeight;
        cv.setAttribute('rotando-camara', 'true');
        break;
      }
  }
}

function mouse_up(e){
  colorCell=[];
  switch (e.which) {
    case 3: //Derecho
    window.originClickX=undefined;
    window.originClickY=undefined;

    //console.log(`UP-> Posición: ${fila} - ${columna}`);
    e.target.removeAttribute('rotando-camara');

      break;
    case 1: //Izquierdo
    if (window.mode != 0 && window.dragging) {
      e.preventDefault();
      e.stopPropagation();
      let cv=document.querySelector('#myCanvas');
      let point = get3DPoint([e.clientX, e.clientY], cv.offsetWidth, cv.offsetHeight);
      let coordX = Math.round(point[0]);
      let coordY = Math.round(point[2]);
      for (let plant of window.jardin.plants) {
        if (plant.isDragging) {
          plant.isDragging = false;
          window.dragging = false;
          if (coordX <= jardin.width*1.0/2 && coordX >= jardin.width*(-1.0)/2 && coordY <= jardin.length*1.0/2 && coordY >= jardin.length*(-1.0)/2) {
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
            if (xPos >= 90*cv.offsetWidth/100 && yPos >= 0 && xPos <= cv.offsetWidth && yPos <= 10*cv.offsetHeight/100)
              deleteMyPlant(window.jardin.id, plant);
            else
              motor.moverMallaA(plant.id, plant.x, 0, plant.y);
          }
          e.target.removeAttribute('rotando-camara');
          window.originClickX=undefined;
          window.originClickY=undefined;
          break;
        }
      }
    }
    //No se hace nada al soltar el botón derecho
      window.originClickX=undefined;
      window.originClickY=undefined;

      //console.log(`UP-> Posición: ${fila} - ${columna}`);
      e.target.removeAttribute('moviendo-camara');

      break;

  }
}

function deletePlant(){
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

function plusZoom(){
  let p=vec3.fromValues(-0.5, 0.5, 0.5);
  let pos=motor.getPosCamaraActiva();
  
    if(pos[1]>camHeight/2){


      if(window.mode==0){
        motor.moverCamara("dynamicCamera",  -p[0], -p[1], -p[2]);
      //motor.escalarCamara("dynamicCamera", 0.95);
      }else{
        motor.moverCamara("dynamicCamera",  0, -p[1], 0);
      }
    }

}

function subZoom(){
  let p=vec3.fromValues(-0.5, 0.5, 0.5);
  let pos=motor.getPosCamaraActiva();
  
  if(pos[1]<camHeight+(camHeight/2)){
    if(window.mode==0){
      motor.moverCamara("dynamicCamera",  p[0], p[1], p[2]);
    }else {
      motor.moverCamara("dynamicCamera", 0, p[1], 0);
    }
  }

}



//Esto es solo para el zoom de la cámara en el modo edición
function scrolling(e){
  e.preventDefault();
  e.stopPropagation();
  if(window.mode==0){

    /*let a=vec3.fromValues(0.0, 0.0, -1.0);
    vec3.rotateX(a, a, a, Math.PI*rotationCamX/180);
    vec3.rotateX(a, a, a, Math.PI*rotationCamX/180);
    console.log(a);*/
    /*let p=motor.getPosCamaraActiva();
    let radX=Math.PI*rotationCamX/180;
    let radY=Math.PI*rotationCamX/180;
    vec3.rotateX(p, p, vec3.fromValues(0.0, 0.0, 0.0), radX);
    vec3.rotateY(p, p, vec3.fromValues(0.0, 0.0, 0.0), radY);
    vec3.normalize(p, p);*/
    let p=vec3.fromValues(-1.0, 1.0, 1.0);
    let pos=motor.getPosCamaraActiva();
    if(e.deltaY<0 && pos[1]>camHeight/2){


      //if (pos[0] <= jardin.width*1.0/2 && pos[0] >= jardin.width*(-1.0)/2) {
      //if((pos[0] <= jardin.width*1.0/2 || ejeX<0) && (pos[0] >= jardin.width*(-1.0)/2 || ejeX>0)){
        motor.moverCamara("dynamicCamera",  -p[0], -p[1], -p[2]);
      //motor.escalarCamara("dynamicCamera", 0.95);
    }

    else if(e.deltaY>0 && pos[1]<camHeight+(camHeight/2)){
      motor.moverCamara("dynamicCamera",  p[0], p[1], p[2]);
    }
    //console.log(motor.getPosCamaraActiva());
  }

  else if(window.mode==1){
    let cv=e.target;
    let point=get3DPoint([e.clientX, e.clientY], cv.offsetWidth, cv.offsetHeight);//punto donde queremos acercarnos
    let camera=motor.getPosCamaraActiva();

    let vector=vec3.fromValues(point[0]-camera[0], point[1]-camera[1], point[2]-camera[2]);
    vec3.normalize(vector, vector);
    vec3.scale(vector, vector, 1);
    if(e.deltaY<0 && camera[1]>(camHeight/2)){
      motor.moverCamara("dynamicCamera", vector[0], vector[1], vector[2]);
    }

    else if(e.deltaY>0 && camera[1]<camHeight+(camHeight/2)){
      motor.moverCamara("dynamicCamera", -vector[0], -vector[1], -vector[2]);
    }
  }

}


function get2DPoint(point3D, width, height){
  let viewProjectionMatrix=[];
  mat4.multiply(viewProjectionMatrix, matrixProjection, invertedMView);
  vec3.transformMat4(point3D, point3D, viewProjectionMatrix);

  let invert=[];
  mat4.invert(invert, viewProjectionMatrix);
  vec3.transformMat4(point3D, point3D, invert);

  let winX=point3D[0]+1;
  winX=winX/2.0;
  winX=winX*width;

  let winY=1-point3D[1];
  winY=winY/2.0;
  winY=winY*height;

  return [winX, winY];
}

function get3DPoint(point2D, width, height){
  let x=point2D[0]/width;
  x=x*2.0;
  x=x-1;

  let y=point2D[1]/height;
  y=y*2.0;
  y=1-y;

  let viewProjectionMatrix=[];
  mat4.multiply(viewProjectionMatrix, matrixProjection, invertedMView);

  let invert=[];
  mat4.invert(invert, viewProjectionMatrix);

  let pointaux=[];
  vec3.transformMat4(pointaux, [0, 0, 0], viewProjectionMatrix);

  let point=[x, y, pointaux[2]];

  vec3.transformMat4(point, point, invert);
  //console.log(point);
  return point;
}
