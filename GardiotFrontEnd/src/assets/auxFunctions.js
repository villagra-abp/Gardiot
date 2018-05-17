$(function () {
    $('[data-toggle="popover"]').popover()
})

function showPopover(e) {

    $('#' + e).popover('show');
}

function hidePopover(e) {

    $('#' + e).popover('hide');
}

// Converts from degrees to radians.
Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
  };
   
  // Converts from radians to degrees.
  Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
  };

  function openWeather(element){
    closeAll();
    element.classList.add('selected');
    element.querySelector('i:last-of-type').style.visibility='initial';
    document.getElementById('prevision').classList.remove('previsionClosed'); 
    document.getElementById('formulario').classList.add('infoOcult');
  }

  function openInfo(element){
    closeAll();
    element.classList.add('selected');
    element.querySelector('i:last-of-type').style.visibility='initial';
    document.getElementById('formulario').classList.remove('infoOcult'); 
    document.getElementById('prevision').classList.add('previsionClosed');
  }

  function openEditor(element){
    closeAll();
    motor.toggleVista(event);
    document.getElementById('prevision').classList.add('previsionClosed');
    document.getElementById('formulario').classList.add('infoOcult');
  }

  function openHelp(){
      closeAll();
      document.getElementById('prevision').classList.add('previsionClosed');
    document.getElementById('formulario').classList.add('infoOcult');
  }

  function closeAll(){
    let opened=document.querySelectorAll('.selected');
    let i=0;
    for(let i=0; i<opened.length; i++){
        opened[i].classList.remove('selected');
        opened[i].querySelector('i:last-of-type').style.visibility='hidden';
    }
  }
  
