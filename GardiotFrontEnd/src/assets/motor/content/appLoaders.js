

function loadAnimation () {
  //window.mallaAnimada = motor.crearNodoAnimacion("animacion", ["chair", "bote", "Susan"], undefined);
  //motor.siguienteMallaAnimada("animacion")

  /*  motor.crearNodoAnimacion("pajaro", "pajaro", 80, undefined);
    motor.crearNodoAnimacion("alaA", "ala", 80, undefined);
    motor.crearNodoAnimacion("alaB", "alab", 80, undefined);

    motor.moverMalla("pajaro", 0.2, 0.2, 0.2);
    motor.moverMalla("alaA", 0.2, 0.2, 0.2);
    motor.moverMalla("alaB", 0.2, 0.2, 0.2);*/


  // motor.escalarMalla("pajaro2_000000", 2.1);
  // motor.rotarMalla("pajaro2_000000", -90, "x");
  // motor.moverMalla("pajaro2_000000", 30, -15, 15);
}
function loadPlants () {
  window.dragging = false;
  // plantas dragables
  //Este mapa servirá para identificar si hay una planta en una posición concreta.
  //Por ejemplo, para una planta en la posición 3, 4, la forma de añadirla al mapa será
  //plantsMap.set('3-4', idPlanta) De esta forma tenemos identificada la posición y la
  //planta que hay en ella.
  window.plantsMap = new Map();
  for (let i = 0; i < jardin.plants.length; i++) {
    let resource = jardin.plants[i].model;
    if (typeof resource !== 'undefined') {
      plantsMap.set(jardin.plants[i].x + '-' + jardin.plants[i].y, jardin.plants[i].id);
      resource.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); //Cambia acentos por no acentos
      resource = resource.toUpperCase();

      motor.crearNodoMalla(jardin.plants[i].id, resource.toLowerCase(), dataPlants[resource].textura, undefined);
      motor.escalarMalla(jardin.plants[i].id, dataPlants[resource].escalado);
      if (dataPlants[resource].rotX != 0)
        motor.rotarMalla(jardin.plants[i].id, dataPlants[resource].rotX, "x");
      if (dataPlants[resource].rotY != 0)
        motor.rotarMalla(jardin.plants[i].id, dataPlants[resource].rotY, "y");
      if (dataPlants[resource].rotZ != 0)
        motor.rotarMalla(jardin.plants[i].id, dataPlants[resource].rotZ, "z");
      motor.moverMalla(jardin.plants[i].id, jardin.plants[i].x, dataPlants[resource].posY, jardin.plants[i].y);
    }
  }
}


function loadSoil (width, length) {
  //Primero creamos el espacio de alrededor del jardín
  /*motor.crearNodoMalla("around", "around", "cespedDef.jpg", undefined);
  motor.escalarMallaXYZ("around", 500, 0.1, 500);
  motor.moverMalla("around", 0, -0.11, 0);*/

  //Por último dibujamos las cuadrículas del suelo en bucle
  for (let i = -width - 2; i <= width + 2; i++) {
    for (let j = -length - 2; j <= length + 2; j++) {

      if (i < -width || i > width || j < -length || j > length) {
        motor.crearNodoMalla("sueloExt" + i + '-' + j, "sueloExt", "tierra.jpg", undefined);
        motor.escalarMallaXYZ("sueloExt" + i + '-' + j, 0.5, 0.1, 0.5);
        motor.moverMalla("sueloExt" + i + '-' + j, i, -0.1, j);//POR FAVOR NO TOCAR EL SUELO, SI QUERÉIS AJUSTAR LAS ALTURAS
      }
      else {
        motor.crearNodoMalla("suelo" + i + '-' + j, "sueloPolly", "cespedDef.jpg", undefined);
        motor.escalarMallaXYZ("suelo" + i + '-' + j, 0.5, 0.1, 0.5);
        motor.moverMalla("suelo" + i + '-' + j, i, -0.1, j);//POR FAVOR NO TOCAR EL SUELO, SI QUERÉIS AJUSTAR LAS ALTURAS
        //HACEDLO CON LAS PLANTAS
      }
    }
  }
}

function loadExtSoil () {
  /*SUELO GRANDE */
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      motor.crearNodoMalla("sueloGrande" + i + '-' + j, "sueloGrande", "tierra.jpg", undefined);
      motor.escalarMallaXYZ("sueloGrande" + i + '-' + j, 8, 8, 8);
      motor.rotarMalla("sueloGrande" + i + '-' + j, -90, "x");
      motor.moverMalla("sueloGrande" + i + '-' + j, 49 * i, -0.01, 49 * j);
    }
  }
}
function loadFence (width, length) {
  // VALLADO
  /* Consideramos length y width como unidades de suelo*/

  /* Construimos en el lado derecho del suelo tantas vallas
    como bloques de suelo y las colocamos en su lugar */
  let valla = 1;
  let desfase = 0.5;
  // VALLA derecha.
  for (var i = -width; i < width; i++) {
    motor.crearNodoMalla("valla" + i, "valla", "maderablanca.jpg", undefined);
    motor.rotarMalla("valla" + i, -90, "z");
    motor.escalarMallaXYZ("valla" + i, 0.15, valla, 0.4); /* alto - LARGO - ancho */
    motor.moverMalla("valla" + i, i * valla + desfase, 0, (length + desfase - 0.037)); /* FONDO - altura - izda dcha*/

  }
  // VALLA izquierda.
  for (var i = -width; i < width; i++) {
    motor.crearNodoMalla("valla2" + i, "valla", "maderablanca.jpg", undefined);
    motor.rotarMalla("valla2" + i, -90, "z");
    motor.escalarMallaXYZ("valla2" + i, 0.15, valla, 0.4); /* alto - LARGO - ancho */
    motor.moverMalla("valla2" + i, i * valla + desfase, 0, (-length - desfase)); /* FONDO - altura - izda dcha*/

  }
  // VALLA trasera.
  for (var i = -length; i < length; i++) {
    motor.crearNodoMalla("valla3" + i, "valla", "maderablanca.jpg", undefined);
    motor.rotarMalla("valla3" + i, -90, "z");
    motor.rotarMalla("valla3" + i, 90, "x");
    motor.escalarMallaXYZ("valla3" + i, 0.15, valla, 0.4); /* alto - LARGO - ancho */
    motor.moverMalla("valla3" + i, width + desfase + 0.01, 0, i * valla + desfase); /* FONDO - altura - izda dcha*/

  }
  // VALLA delantera.
  for (var i = -length; i < length; i++) {
    motor.crearNodoMalla("valla4" + i, "valla", "maderablanca.jpg", undefined);
    motor.rotarMalla("valla4" + i, -90, "z");
    motor.rotarMalla("valla4" + i, 90, "x");
    motor.escalarMallaXYZ("valla4" + i, 0.15, valla, 0.4); /* alto - LARGO - ancho */
    motor.moverMalla("valla4" + i, (-width - desfase), 0, i * valla + desfase); /* FONDO - altura - izda dcha*/
  }
}

function loadSun (sunrise, sunset) {
  window.sol = motor.crearNodoLuz("sol", 2, undefined);
  window.luna = motor.crearNodoLuz("luna", 1, undefined);

  window.factorIlumination = 1;

  /* POSICIONES INICIALES */
  motor.moverLuz("sol", 0.0, 35.0, 0.0);
  motor.moverLuz("luna", 0.0, -35.0, 0.0);
  motor.rotarLuzOrbital('sol', 7, 'x');
  motor.rotarLuz('sol', -90, 'x');
  motor.rotarLuz('sol', -5, 'z');
  motor.rotarLuz('luna', 90, 'x');
  motor.activarLuz("sol");


  /* COLOR DEL SOL */
  window.rgbInit = { red: 182, green: 126, blue: 91 };
  window.rgbNoon = { red: 192, green: 191, blue: 173 };
  window.rgbMoon = { red: 192, green: 198, blue: 255 };
  window.rgbDiffSun = { red: rgbNoon.red - rgbInit.red, green: rgbNoon.green - rgbInit.green, blue: rgbNoon.blue - rgbInit.blue };
  window.rgbDiffMoon = { red: rgbMoon.red - rgbInit.red, green: rgbMoon.green - rgbInit.green, blue: rgbMoon.blue - rgbInit.blue };

  
  if (typeof sunrise === 'undefined' && typeof sunset === 'undefined') {
    sunrise = new Date(2018, 11, 11, 8, 42, 30);
    sunset = new Date(2018, 11, 11, 20, 14, 42);
    console.log("No se ha pasado la hora de amanecer y anocher de OpenWeatherMap al motor");
  }

  /* COLOCACION DEL SOL */
  window.lastTime = new Date();
  let minuteOfDay = lastTime.getHours() * 60 + lastTime.getMinutes();
  window.minuteOfSunrise = sunrise.getHours() * 60 + sunrise.getMinutes();
  window.minuteOfSunset = sunset.getHours() * 60 + sunset.getMinutes();
  window.minutesOfSun = minuteOfSunset - minuteOfSunrise; // Minutos de sol diarios
  window.minutesOfNight = minutesOfNight = (24 * 60) - minutesOfSun;

  let relation, offset, ilumOffset = 0;
  if (minuteOfDay >= minuteOfSunrise && minuteOfDay <= minuteOfSunset) {
    relation = (minuteOfDay - minuteOfSunrise) / minutesOfSun;
    offset = -90;
    ilumOffset = 0.2;
  }
  else {
    if (minuteOfDay < minuteOfSunrise)
        minuteOfDay = (24 * 60) + minuteOfDay;
    relation = (minuteOfDay - minuteOfSunset) / minutesOfNight;
    offset = 90;
  }
  let gradePosition = (relation * 160)+10;
  factorIlumination = Math.sin(Math.radians(gradePosition)) + ilumOffset;
  motor.rotarLuzOrbitalA('sol', gradePosition + offset);
  motor.rotarLuzOrbitalA('luna', gradePosition + offset);

  iluminarAstro(minuteOfDay);
  rotarSol();  
}

function loadEntities (sunrise, sunset) {
  let width = Math.floor(jardin.width / 2), length = Math.floor(jardin.length / 2);
  loadSoil(width, length);
  loadExtSoil();
  loadFence(width, length);
  loadPlants();
  loadSun(sunrise, sunset);
}

//Datos de plantas como el escalado, etc. para que se dibujen bien
//Datos de plantas como el escalado, etc. para que se dibujen bien
window.dataPlants = {
  LECHUGA: {
    textura: 'lechuga.jpg',
    escalado: 2.5,
    rotX: 0,
    rotY: 0,
    rotZ: 0,
    posY: -0.2
  },
  CALABAZA: {
    textura: 'calabaza.jpg',
    escalado: 0.3,
    rotX: -90,
    rotY: 0,
    rotZ: 90,
    posY: 0
  },
  TOMATE: {
    textura: 'tomatera.png',
    escalado: 0.006,
    rotX: 0,
    rotY: 0,
    rotZ: 0,
    posY: 0
  },
  MACETA: {
    escalado: 0.05,
    rotX: 0,
    rotY: 0,
    rotZ: 0,
    posY: 0.1
  },
  PEREJIL: {
    textura: 'peregil.jpg',
    escalado: 0.004,
    rotX: -90,
    rotY: 0,
    rotZ: 0,
    posY: 0.1
  },
  ROSA: {
    textura: 'rosa.jpg',
    escalado: 0.01,
    rotX: -90,
    rotY: 10,
    rotZ: 0,
    posY: -0.2
  },
  MARGARITA: {
    textura: 'margarita.jpg',
    escalado: 0.06,
    rotX: -90,
    rotY: 0,
    rotZ: 0,
    posY: 0.3
  },
  CYCA: {
    textura: 'cyca2.jpg',
    escalado: 0.1,
    rotX: -90,
    rotY: 0,
    rotZ: 0,
    posY: 0.2
  },
  CIPRES: {
    textura: 'arbol.jpg',
    escalado: 0.2,
    rotX: -90,
    rotY: 0,
    rotZ: 0,
    posY: 0.0
  },
  LOGO: {
    textura: 'logo.jpg',
    escalado: 0.3,
    rotX: -90,
    rotY: 0,
    rotZ: 90,
    posY: 0.2
  },
  SANDIA: {
    textura: 'sandia.jpg',
    escalado: 0.3,
    rotX: -90,
    rotY: 0,
    rotZ: 0,
    posY: -0.1
  },
};