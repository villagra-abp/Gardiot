$(function () {
  $('[data-toggle="popover"]').popover()
})

function showPopover(e) {

  $('#' + e).popover('show');
}

function hidePopover(e) {
  let a = document.querySelector('.popover.fade');
  if(a!=null || typeof a!='undefined')
    a.remove();
}

// Converts from degrees to radians.
Math.radians = function (degrees) {
  return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
Math.degrees = function (radians) {
  return radians * 180 / Math.PI;
};

function openWeather(element) {
  closeAll();
  element.classList.add('selected');
  element.querySelector('i:last-of-type').style.visibility = 'initial';
  try {
    document.getElementById('prevision').classList.remove('previsionClosed');
  }
  catch (e) {

  }
  try {
    document.getElementById('formulario').classList.add('infoOcult');
  }
  catch (e) {

  }

}

function openInfo(element) {
  closeAll();
  element.classList.add('selected');
  element.querySelector('i:last-of-type').style.visibility = 'initial';
  try {
    document.getElementById('formulario').classList.remove('infoOcult');
    document.getElementById('prevision').classList.add('previsionClosed');
  }
  catch (e) {

  }
}

function openEditor(element) {
  closeAll();
  motor.toggleVista();
  try {
    document.getElementById('prevision').classList.add('previsionClosed');
    document.getElementById('formulario').classList.add('infoOcult');
  }
  catch (e) {

  }
}

function openHelp() {
  closeAll();
  try {
    document.getElementById('prevision').classList.add('previsionClosed');
    document.getElementById('formulario').classList.add('infoOcult');
  }
  catch (e) {

  }
}

function closeAll() {
  let opened = document.querySelectorAll('.selected');
  let i = 0;
  for (let i = 0; i < opened.length; i++) {
    opened[i].classList.remove('selected');
    opened[i].querySelector('i:last-of-type').style.visibility = 'hidden';
  }
}

function closeEdit(e, element) {

  if (element.style.visibility == 'initial') {
    e.stopPropagation();
    e.preventDefault();
    element.style.visibility = 'hidden';
    element.parentNode.classList.remove('selected');
    document.getElementById('formulario').classList.add('infoOcult');
  }

}
function closeWeather(e, element) {

  if (element.style.visibility == 'initial') {
    e.stopPropagation();
    e.preventDefault();
    element.style.visibility = 'hidden';
    element.parentNode.classList.remove('selected');
    try {
      document.getElementById('prevision').classList.add('previsionClosed');
    }

    catch (e) {

    }
  }
}
function closeWeatherMobile(e) {

  let i=document.getElementById('prevision');
  if(i!=null && typeof i!= 'undefined')
    i.classList.add('previsionClosed');

}

function closeEditMobile(e) {

  document.querySelector('.formulario').classList.add('infoOcult');

}

function changeShaders(e){
  window.program==1?motor.usarShader('cartoon'):motor.usarShader('realista');
}

