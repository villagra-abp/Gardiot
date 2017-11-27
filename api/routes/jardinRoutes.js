var express = require('express');
var router = express.Router();

var jardinModel = require('../models/jardin');

router.get('/jardin', function(request, response) {
	jardinModel.getJardines (function(error, data) { //Asocia la llamada con la funcion del modelo
		response.status(200).json(data);
	});
});

router.get('/jardin', function(request, response) {
	var id = request.query.id;
	jardinModel.getJardinById(id, function(error, datos) {
		if (typeof data !== 'undefined' && datos.length > 0) {
			response.status(200).json(datos);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

router.post('/jardin', function(request, response) {
	var jardinData = {
		idJardin: request.body.id, //Podria ser null
		titulo: request.body.titulo
	};
	jardinModel.insertJardin(jardinData, function(error, datos) {
		if (datos) {
			response.status(200).json({"Mensaje":"Insertado"});
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.put('/jardin', function(request, response) {
	var jardinData = {
		idJardin: request.query.id,
		titulo: request.query.titulo
	};
	jardinModel.updateJardin(jardinData, function(error, datos) {
		if (datos && datos.mensaje) {
			response.status(200).json(datos);			
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.delete('/jardin', function(request, response) {
	var id = request.query.id;
	jardinModel.deleteJardin(id, function(error, datos) {
		if (datos && datos.mensaje === "Borrado") {
			response.status(200).json(datos);
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

module.exports = router;