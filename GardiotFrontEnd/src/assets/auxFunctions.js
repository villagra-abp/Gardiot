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
    var is_touch_device = 'ontouchstart' in document.documentElement;
    if (is_touch_device) {
        mc = new Hammer(document.getElementById('myCanvas'), {
            tap: { enable: false }
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
        var currentRotation = 0;
        var prevRotation = 0;
        var rotation = 0;
        var scale = 1, last_scale = 1,
            rotation = 0, last_rotation, dragReady = 0, start_rotation = 0;

        var liveScale = 1;
        var currentRotation = 0, lastRotation, startRotation;
        var currentScale = 0;

        var lastPosX = 0, lastPosY = 0, posX = 0, posY = 0;

        mc.on("rotate rotatestart rotateend pan press panstart panend tap multitap", function (e) {
            e.preventDefault();

            let canvas = document.querySelector('#myCanvas');


            switch (e.type) {
                case 'rotatestart':
                    currentRotation = Math.round(e.rotation);
                    currentScale = Math.round(e.scale);
                    break;
                case 'rotate':

                    var diff = Math.round(e.rotation) - currentRotation;
                    var diffScale;
                    e.pointers = [];

                    if (window.mode == 1) {
                        diffScale = 2 * (currentScale - e.scale);
                        motor.rotarCamara("dynamicCamera", diff, "z");
                        motor.moverCamara("dynamicCamera", 0, diffScale, 0);

                    } else {
                        diffScale = 1 + ((currentScale - e.scale) * 2);
                        motor.rotarCamaraOrbital("dynamicCamera", diff, "y");
                        motor.escalarCamara("dynamicCamera", diffScale);
                    }
                    currentRotation = Math.round(e.rotation);
                    currentScale = e.scale;

                    break;

                case 'panstart':
                    window.originDeltaX=0;
                    window.originDeltaY=0;

                    break;
                case 'pan':
                    if (!dragging) {
                        motor.moverCamara("dynamicCamera", (originDeltaX-e.deltaX)/100, 0, (originDeltaY-e.deltaY)/100);
                        originDeltaX=e.deltaX;
                        originDeltaY=e.deltaY;
                    }
                    else {
                        let point = get3DPoint([e.center.x, e.center.y], canvas.offsetWidth, canvas.offsetHeight);
                        for (let plant of window.jardin.plants) {
                            if (plant.isDragging) {
                                motor.moverMallaA(plant.id, point[0], 0, point[2]);
                                break;
                            }
                        }

                    }
                    break;

                case 'panend':
                    if (dragging) {
                        let point = get3DPoint([e.center.x, e.center.y], canvas.offsetWidth, canvas.offsetHeight);
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
                                    motor.moverMallaA(plant.id, plant.x, 0, plant.y);
                                }
                                break;
                            }
                        }
                    }

                    break;
                case 'tap':
                    break;
                case 'press':
                    if (window.mode == 1) {
                        let point = get3DPoint([e.center.x, e.center.y], canvas.offsetWidth, canvas.offsetHeight);
                        let coordX = Math.round(point[0]);
                        let coordY = Math.round(point[2]);
                        for (let plant of window.jardin.plants) {
                            if (plant.x == coordX && plant.y == coordY) {
                                plant.isDragging = true;
                                window.dragging = true;
                                break;
                            }
                        }
                    }
                    break;
                case 'multitap':
                    break;
            }

        });
    }
}
