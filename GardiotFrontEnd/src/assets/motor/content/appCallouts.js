/**
 * Carga un recurso contenido en una carpeta local
 * @param  {string} url
 * @param  {Function} callback
 */
var loadTextResource = function (url, callback) {
    var request = new XMLHttpRequest();
    let resURL = '';
    if (window.location.toString().indexOf('gardiot') >= 0) {
        resURL = 'https://gardiot.ovh/app/assets/motor' + url;
    }
    else if (window.location.toString().indexOf('localhost:4200') >= 0) {
        resURL = 'http://localhost:4200/assets/motor' + url;
    }
    else if (window.location.toString().indexOf('localhost:8080') >= 0) {
        resURL = url;
    }
    else {
        resURL = "http://192.168.100.3:4200/assets/motor" + url;
    }

    request.open('GET', resURL, false);
    request.onload = function () {
        if (request.status < 200 || request.status > 299) {
            callback('Error: HTTP Status ' + request.status);
        } else {
            callback(null, request.responseText);
        }
    };
    request.send();
};

/**
 * Carga un recurso mediante la funcion anterior y lo parsea en JSON
 * @param  {string} url
 * @param  {Function} callback
 */
var loadJSONResource = function (url, callback) {
    loadTextResource(url, function (err, result) {
        if (err) {
            callback(err);
        } else {
            try {
                callback(null, JSON.parse(result));
            } catch (e) {
                callback(e);
            }
        }
    });
};

/**
 * Realiza una llamada a la API para actualizar los datos de una MyPlant 
 * @param  {number} garden
 * @param  {number} plant
 * @param  {number} x
 * @param  {number} y
 */
function updateMyPlant(garden, plant, x, y) {
    let xhr = new XMLHttpRequest(),
        url;
    if (window.location.toString().indexOf("localhost") >= 0) {
        url = `http://localhost:3000/api/myPlant/${garden}/${plant.id}`;
    }
    else if (window.location.toString().indexOf("gardiot") >= 0) {
        url = `https://gardiot.ovh/api/myPlant/${garden}/${plant.id}`;
    }
    else {
        url = `http://192.168.100.3:3000/api/myPlant/${garden}/${plant.id}`;
    }

    xhr.open('PUT', url, true);

    xhr.onload = function () {
        let respuesta = JSON.parse(xhr.responseText);

        if (xhr.status == "200") {
            motor.moverMallaA(plant.id, x, window.dataPlants[plant.model.toUpperCase()].posY, y); 
            plantsMap.delete(plant.x + '-' + plant.y);//Para la iluminación
            plant.x = x;
            plant.y = y;
            plantsMap.set(x + '-' + y, plant.id);//Para la iluminación
        }
    }

    let params = 'xCoordinate=' + x + '&yCoordinate=' + y + '&plant=' + plant.plant;

    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage['Bearer']);
    xhr.send(params);
}

/**
 * Realiza una llamada a la API para insertar una MyPlant 
 * @param  {number} garden
 * @param  {number} plant
 * @param  {number} x
 * @param  {number} y
 * @param  {string} model
 */
function insertMyPlant(garden, plant, x, y, model) {
    let xhr = new XMLHttpRequest(),
        url;
    if (window.location.toString().indexOf("localhost") >= 0) {
        url = `http://localhost:3000/api/myPlant/${garden}`;
    }
    else if (window.location.toString().indexOf("gardiot") >= 0) {
        url = `https://gardiot.ovh/api/myPlant/${garden}`;
    }
    else {
        url = `http://192.168.100.3:3000/api/myPlant/${garden}`;
    }

    xhr.open('POST', url, true);
    xhr.onload = function () {
        let respuesta = JSON.parse(xhr.responseText);
        if (xhr.status == 200) {
            let value = {
                id: respuesta.myPlant,
                isDragging: false,
                plant: plant,
                x: x,
                y: y,
                model: model,
                seed: undefined
            };

            plantsMap.set(x + '-' + y, respuesta.myPlant);//Para la iluminación

            window.jardin.plants.push(value);
            let datos = dataPlants[model.toUpperCase()];

            motor.crearNodoMalla(respuesta.myPlant, model, datos.textura, undefined);
            motor.moverMallaA(respuesta.myPlant, x, datos.posY, y);
            motor.rotarMalla(respuesta.myPlant, datos.rotX, 'x');
            motor.rotarMalla(respuesta.myPlant, datos.rotY, 'y');
            motor.rotarMalla(respuesta.myPlant, datos.rotZ, 'z');

            motor.escalarMalla(respuesta.myPlant, datos.escalado);
        }
    }
    var seed = new Date().toISOString().slice(0, 10);
    let params = 'xCoordinate=' + x + '&yCoordinate=' + y + '&plant=' + plant + '&seed=' + seed;

    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage['Bearer']);
    xhr.send(params);
}

/**
 * Realiza una llamada a la API para eliminar una MyPlant 
 * @param  {number} garden
 * @param  {number} plant
 */
function deleteMyPlant(garden, plant) {
    let xhr = new XMLHttpRequest(),
        url;
    if (window.location.toString().indexOf("localhost") >= 0) {
        url = `http://localhost:3000/api/myPlant/${garden}/${plant.id}`;
    }
    else if (window.location.toString().indexOf("gardiot") >= 0) {
        url = `https://gardiot.ovh/api/myPlant/${garden}/${plant.id}`;
    }
    else {
        url = `http://192.168.100.3:3000/api/myPlant/${garden}/${plant.id}`;
    }

    xhr.open('DELETE', url, true);

    xhr.onload = function () {
        let respuesta = JSON.parse(xhr.responseText);

        if (xhr.status == "200") {
            motor.borrarMalla(plant.id);
            let index = window.jardin.plants.indexOf(plant);
            plantsMap.delete(plant.x + '-' + plant.y);//Para la iluminación
            window.jardin.plants.splice(index, 1);
        }
    }
    xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage['Bearer']);
    xhr.send(null);
}