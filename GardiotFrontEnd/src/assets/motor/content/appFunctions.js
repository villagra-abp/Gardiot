//bucle de animación
function animLoop(){
    now=Date.now();
    elapsed=now-then;

    //Si toca dibujar y el motor está corriendo
    if(elapsed>fpsInterval && motor.running){
        then=now-(elapsed%fpsInterval);
        motor.draw();
    }
    requestAnimationFrame(animLoop, canvas);
}


function mouse_move(e){
    let cv=e.target,
        x=e.offsetX,
        y=e.offsetY;


				if(cv.getAttribute('data-down')){
	        //console.log(`MOUSEMOVE-> Posición: ${fila} - ${columna}`);

					let ejeY=window.originClickY-(y/cv.offsetHeight);
					let ejeX=window.originClickX-(x/cv.offsetWidth);
          //esto será lo bueno
          let pos=motor.getPosCamaraActiva();
          let movPosible=pos[1]*0.6;

          if((pos[0]<movPosible || ejeX<0) && (pos[0]>-movPosible || ejeX>0)){
            motor.moverCamara("camara2", ejeX*pos[1]*1.5, 0, 0);
          }

          if((pos[2]<movPosible || ejeY<0) && (pos[2]>-movPosible || ejeY>0)){
            motor.moverCamara("camara2", 0, 0, ejeY*pos[1]*1.5);
          }

					/*motor.rotarCamaraOrbital("camara2", ejeX*150, "y");
          motor.rotarCamaraOrbital("camara2", ejeY*150, "x");*/
					window.originClickX=x/cv.offsetWidth;
					window.originClickY=y/cv.offsetHeight;
    		}
}



function mouse_down(e){
     let cv=e.target,
        x=e.offsetX,
        y=e.offsetY;

				//console.log(x, y, cv.offsetWidth, cv.offsetHeight);
        //console.log(`DOWN-> Posición: ${fila} - ${columna}`);
				cv.setAttribute('data-down', 'true');

				window.originClickX=x/cv.offsetWidth;
				window.originClickY=y/cv.offsetHeight;
}

function mouse_up(e){
     let cv=e.target,
        x=e.offsetX,
        y=e.offsetY,
				dimx=cv.offsetWidth/41,
				dimy=cv.offsetHeight/27,
        fila=Math.ceil(y/dimy),
        columna=Math.ceil(x/dimx);

        window.x=undefined;
  			window.y=undefined;
  			window.originClickX=undefined;
  			window.originClickY=undefined;

        get3DPoint([x, y], cv.offsetWidth, cv.offsetHeight);

        //console.log(`UP-> Posición: ${fila} - ${columna}`);
				cv.removeAttribute('data-down');
}

function scrolling(e){
  let cv=e.target;
  let point=get3DPoint([e.offsetX, e.offsetY], cv.offsetWidth, cv.offsetHeight);//punto donde queremos acercarnos
  let camera=motor.getPosCamaraActiva();

  let vector=vec3.fromValues(point[0]-camera[0], point[1]-camera[1], point[2]-camera[2]);
  vec3.normalize(vector, vector);
  vec3.scale(vector, vector, 1);
  if(e.deltaY<0 && motor.getPosCamaraActiva()[1]>5){
    motor.moverCamara("camara2", 0, vector[1], 0);
  }
  else if(e.deltaY>0 && motor.getPosCamaraActiva()[1]<40){
    motor.moverCamara("camara2", 0, -vector[1], 0);
  }
}
/*
function scrolling(e){
  let cv=e.target;
  let point=get3DPoint([e.offsetX, e.offsetY], cv.offsetWidth, cv.offsetHeight);//punto donde queremos acercarnos
  let camera=motor.getPosCamaraActiva();

  let vector=vec3.fromValues(point[0]-camera[0], point[1]-camera[1], point[2]-camera[2]);
  vec3.normalize(vector, vector);
  vec3.scale(vector, vector, 12);
  if(e.deltaY<0 && motor.getPosCamaraActiva()[1]>100){
    motor.moverCamara("camara2", vector[0], vector[1], vector[2]);
  }
  else if(e.deltaY>0 && motor.getPosCamaraActiva()[1]<500){
    motor.moverCamara("camara2", -vector[0], -vector[1], -vector[2]);
  }
}*/


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
  console.log(point);
  return point;
}
