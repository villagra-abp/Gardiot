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

function updateMyPlant(garden, plant, soil, x, y) {
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
            motor.moverMallaA(plant.id, x, 0, y); //Esta llamada tal vez es innecesaria
            plantsMap.delete(plant.x + '-' + plant.y);//Para la iluminación
            plant.x = x;
            plant.y = y;
            plantsMap.set(x + '-' + y, plant.id);//Para la iluminación
        }
    }

    let params = 'xCoordinate=' + x + '&yCoordinate=' + y + '&plant=' + plant.plant + '&soil=' + soil;

    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage['Bearer']);
    xhr.send(params);
}

function insertMyPlant(garden, plant, soil, x, y, model) {
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
        //console.log(respuesta.Mensaje);
        if (xhr.status == 200) {
            let value = {
                id: respuesta.myPlant,
                isDragging: false,
                plant: plant,
                x: x,
                y: y,
                model: undefined,
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
    let params = 'xCoordinate=' + x + '&yCoordinate=' + y + '&plant=' + plant + '&soil=' + soil + '&seed=' + seed;

    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage['Bearer']);
    xhr.send(params);
}

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

function makeShader(src, type) {
    //compilar el vertex shader
    let shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert("Error compilando el Shader " + gl.getShaderInfoLog(shader));
    }
    return shader;
}


//función para inicializar los shaders
function cargarShaders() {
    //aquí dentro cogemos los recursos del directorio
    let vs = [];
    let fs = [];

    for (let i = 0; i < vertexShaders.length && i < fragmentShaders.length; i++) {
        vs[i] = gestor.getRecurso(vertexShaders[i], 'shader').shader,
            fs[i] = gestor.getRecurso(fragmentShaders[i], 'shader').shader;

        //Ya tenemos los shaders aquí! (formato texto)
        //console.log(vs);
        //console.log(fs);

        //Aqui viene WebGL
        //compilamos los shaders
        glVertexShader[i] = makeShader(vs[i], gl.VERTEX_SHADER);
        glFragmentShader[i] = makeShader(fs[i], gl.FRAGMENT_SHADER);

        //creamos el programa
        glProgram[i] = gl.createProgram();

        //añadimos los shaders al programa
        gl.attachShader(glProgram[i], glVertexShader[i]);
        gl.attachShader(glProgram[i], glFragmentShader[i]);
        gl.linkProgram(glProgram[i]);


        if (!gl.getProgramParameter(glProgram[i], gl.LINK_STATUS)) {
            alert("No se puede inicializar el shader");
        }
    }

    gl.useProgram(glProgram[window.program]);

}

function renderShadows() {
    window.program = 2;
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.viewport(0, 0, 2048, 2048);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.useProgram(glProgram[window.program]);




    motor.escena.draw();

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    window.program = 1;
    gl.useProgram(glProgram[window.program]);
    gl.uniform1i(glProgram[window.program].shadowMapUniform, 0);

}

//inicializamos parámetros básicos de WebGL
function setupWebGL() {

    
  
    glProgram[2].lmvpMatrixUniform = gl.getUniformLocation(glProgram[2], "uMVPMatrixFromLight");
    
    gl.clearColor(0.98, 0.98, 0.98, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.BACK);
    gl.enable(gl.DEPTH_TEST);


    glProgram[1].shadowMapUniform = gl.getUniformLocation(glProgram[1], "uShadowMap");

    //Nos traemos las matrices, projection, model y view al motor
    glProgram[1].pMatrixUniform = gl.getUniformLocation(glProgram[1], "uPMatrix");
    glProgram[1].mMatrixUniform = gl.getUniformLocation(glProgram[1], "uMMatrix");
    glProgram[1].vMatrixUniform = gl.getUniformLocation(glProgram[1], "uVMatrix");
    glProgram[1].mvMatrixUniform = gl.getUniformLocation(glProgram[1], "uMVMatrix");
    glProgram[1].mvpMatrixUniform = gl.getUniformLocation(glProgram[1], "uMVPMatrix");
    glProgram[1].lmvpMatrixUniform = gl.getUniformLocation(glProgram[1], "uMVPMatrixFromLight");
    glProgram[1].lpMatrixUniform = gl.getUniformLocation(glProgram[1], "uPMatrixFromLight");
    glProgram[1].lvMatrixUniform = gl.getUniformLocation(glProgram[1], "uVMatrixFromLight");
 

    glProgram[1].samplerUniform = gl.getUniformLocation(glProgram[1], "uSampler");
    glProgram[1].textured = gl.getUniformLocation(glProgram[1], "uTextured");
    glProgram[1].lighted = gl.getUniformLocation(glProgram[1], "uLighted");
    glProgram[1].hovered = gl.getUniformLocation(glProgram[1], "uHovered");
    //matriz de normales
    glProgram[1].normalMatrixUniform = gl.getUniformLocation(glProgram[1], "uNormalMatrix");
    //Backface culling

    glProgram[1].ka = gl.getUniformLocation(glProgram[1], "material.Ka");
    glProgram[1].kd = gl.getUniformLocation(glProgram[1], "material.Kd");
    glProgram[1].ks = gl.getUniformLocation(glProgram[1], "material.Ks");

    glProgram[1].shin = gl.getUniformLocation(glProgram[1], "propiedades.shininess");
    glProgram[1].opac = gl.getUniformLocation(glProgram[1], "propiedades.opacity");

    


}

function initFramebufferObject() {
    var texture, depthBuffer;
    var framebuffer = gl.createFramebuffer();

    texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 2048, 2048, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

    depthBuffer = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, 2048, 2048);

    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depthBuffer);

    framebuffer.texture = texture;
    //gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    //gl.bindTexture(gl.TEXTURE_2D, null);
    //gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    return framebuffer;
}



function iniciamosWebGL(idCanvas) {
    canvas = document.getElementById(idCanvas);
    try {
        gl = canvas.getContext("webgl");
        if (gl) {
            return true;
        }
        return false;
    }

    catch (e) {
        return false;
    }
}
