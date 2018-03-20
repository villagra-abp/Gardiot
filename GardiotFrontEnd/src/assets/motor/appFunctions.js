function animLoop(){
    now=Date.now();
    elapsed=now-then;

    if(elapsed>fpsInterval && motor.running){
        then=now-(elapsed%fpsInterval);
        motor.draw();

    }

    requestAnimationFrame(animLoop, canvas);
}


function mouse_move(e){

    let cv=e.target,
        x=e.offsetX,
        y=e.offsetY,
				dimx=cv.offsetWidth/41,
				dimy=cv.offsetHeight/27,
        fila=Math.ceil(y/dimy),
        columna=Math.ceil(x/dimx);

    //console.log(`Posición: ${x} - ${y}`);
    //lo de arriba es igual a
    // console.log('Posición: '+x+', '+y+');


				if(cv.getAttribute('data-down')){
	        console.log(`MOUSEMOVE-> Posición: ${fila} - ${columna}`);

					let rotX=window.originClickY-(y/cv.offsetHeight);
					let rotY=window.originClickX-(x/cv.offsetWidth);

					motor.rotarCamaraOrbital("camara2", rotX*150, "x");
					motor.rotarCamaraOrbital("camara2", rotY*150, "y");

					window.originClickX=x/cv.offsetWidth;
					window.originClickY=y/cv.offsetHeight;


    		}


}

function mouse_click(e){
    let cv=e.target,
        x=e.offsetX,
        y=e.offsetY,
        dimx=cv.offsetWidth/41,
				dimy=cv.offsetHeight/27,
        fila=Math.ceil(y/dimy),
        columna=Math.ceil(x/dimx);


    if(x<1 || x>cv.width-1 || y<1 || y>cv.height-1)
        return;
			window.x=undefined;
			window.y=undefined;
			window.originClickX=undefined;
			window.originClickY=undefined;
      console.log(`Posición: ${fila} - ${columna}`);

      console.log(x, y);
      let origin=vec3.fromValues(40.0, 0.0, 40.0);
      get2DPoint(origin, cv.offsetWidth, cv.offsetHeight);

      //get3DPoint([x, y], cv.offsetWidth, cv.offsetHeight);

}



function mouse_down(e){
     let cv=e.target,
        x=e.offsetX,
        y=e.offsetY,
				dimx=cv.offsetWidth/41,
				dimy=cv.offsetHeight/27,
        fila=Math.ceil(y/dimy),
        columna=Math.ceil(x/dimx);
				//console.log(x, y, cv.offsetWidth, cv.offsetHeight);
        console.log(`DOWN-> Posición: ${fila} - ${columna}`);
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

        console.log(`UP-> Posición: ${fila} - ${columna}`);
				cv.removeAttribute('data-down');
}

function scrolling(e){
  let cv=e.target;
  if(e.deltaY<0){
    motor.zoomCamara("camara2", -0.1);
  }
  else{
    motor.zoomCamara("camara2", 0.1);
  }
}


function get2DPoint(point3D, width, height){
  let viewProjectionMatrix=[];
  mat4.multiply(viewProjectionMatrix, matrixProjection, invertedMView);

  vec3.transformMat4(point3D, point3D, viewProjectionMatrix);

  let winX=Math.round(((point3D[0]+1)/2.0)*width);
  let winY=Math.round(((1-point3D[1])/2.0)*height);

  console.log(winX, winY);
}

//función que no va
function get3DPoint(point2D, width, height){
  let x=2.0*point2D[0]/width-1;
  let y=-2.0*point2D[1]/height+1;

  let viewProjectionMatrix=[];
  mat4.multiply(viewProjectionMatrix, matrixProjection, invertedMView);

  let inverted=[];
  mat4.invert(inverted, viewProjectionMatrix);


  let point=vec3.fromValues(x, y, 0);
  let point2=[];
  vec3.transformMat4(point2, point, inverted);
  console.log(point2);
  console.log(point);

}
