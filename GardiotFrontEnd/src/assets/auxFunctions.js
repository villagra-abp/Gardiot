$(function () {
    $('[data-toggle="popover"]').popover()
})

function showPopover(e) {

    $('#' + e).popover('show');
}

function hidePopover(e) {

    $('#' + e).popover('hide');
}

function hammertime() {
    mc = new Hammer(document.getElementById('myCanvas'), {
        tap: { enable: false }
    });

    // create a pinch and rotate recognizer
    // these require 2 pointers
    var pinch = new Hammer.Pinch();
    var rotate = new Hammer.Rotate();

    // we want to detect both the same time
    pinch.recognizeWith(rotate);

    // add to the Manager
    mc.add([pinch, rotate]);

    var liveScale = 1;
    var currentRotation = 0;
    var prevRotation = 0;
    var rotation = 0;
    var scale = 1, last_scale = 1,
        rotation = 0, last_rotation, dragReady = 0, start_rotation = 0;

    var lastPosX = 0, lastPosY = 0, posX = 0, posY = 0;

    mc.on("pinch pinchstart pinchend rotate rotatestart rotateend pan press panstart panend tap multitap", function (e) {
        e.preventDefault();
        var is_touch_device = 'ontouchstart' in document.documentElement;
        let canvas = document.querySelector('#myCanvas');

        switch (e.type) {
            case 'rotatestart':
                alert("rotate");
                last_scale = scale;
                last_rotation = rotation;
                start_rotation = e.rotation;
                break;

            case 'rotateend':
                last_scale = scale;
                last_rotation = rotation;
                break;

            case 'rotate':
                var diff = start_rotation - e.rotation;
                rotation = last_rotation - diff;

                break;
            case 'pinch':

                scale = scale = Math.max(1, Math.min(last_scale * e.scale, 10));

                break;
            case 'pinchstart':
                if (is_touch_device) {
                    last_scale = scale;
                }

                break;
            case 'pinchend':
                last_scale = scale;

                break;
            case 'panstart':
                window.originClickY = (e.center.y / canvas.offsetHeight);
                window.originClickX = (e.center.x / canvas.offsetWidth);

                break;
            case 'pan':
                if (is_touch_device) {
                    console.log(e);
                    if (!dragging) {
                        let ejeY = window.originClickY - (e.center.y / canvas.offsetHeight);
                        let ejeX = window.originClickX - (e.center.x / canvas.offsetWidth);
                        motor.moverCamara("dynamicCamera", ejeX*4 , 0, ejeY *4);
                        window.originClickY = (e.center.y / canvas.offsetHeight);
                        window.originClickX = (e.center.x / canvas.offsetWidth);
                    }
                    else {
                    }
                }
                break;

            case 'panend':

                break;

            case 'tap':

                break;
            case 'press':
                /*let point = get3DPoint([e.clientX, e.clientY], cv.offsetWidth, cv.offsetHeight);
                    let coordX = Math.round(point[0]);
                    let coordY = Math.round(point[2]);
                    for (let plant of window.jardin.plants) {
                        if (plant.x == coordX && plant.y == coordY) {
                        plant.isDragging = true;
                        window.dragging = true;
                        break;
                        }
                    }*/
                break;
            case 'multitap':
                break;
        }

    });
}
