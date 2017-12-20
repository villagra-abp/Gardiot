var express = require('express');
var router = express.Router();

var registryModel = require('../models/registry');

router.get('/registry', function (request, response) {
  registryModel.getRegistry (function(error, data){
    response.status(200).json(data);
  });
});

router.use('/', require('../functions/BLOCK')); //Bloquea las siguientes rutas

router.get('/registry/:id', function(request, response) {
	var id = request.params.id;
	registryModel.getRegistryById(id, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

router.post('/registry', function(request, response) {
	var registryData = {
		name: request.body.name,
		date: request.body.date,
    event: request.body.event,
	};
	console.log(request.body);
	registryModel.insertRegistry(registryData, function(error, data) {
		if (data) {
			response.status(200).json({"Mensaje":"Insertado"});
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.put('/registry', function(request, response) {
	var registryData = {
		id: request.body.id,
		name: request.body.name,
    date: request.body.date,
    event: request.body.event,
	};
	console.log(registryData);
	registryModel.updateRegistry(registryData, function(error, data) {
		if (data && data.mensaje) {
			response.status(200).json(data);
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.delete('/registry/:id', function(request, response) {
	var id = request.params.id;
	registryModel.deleteRegistry(id, function(error, data) {
		if (data == 1) {
			response.status(200).json({"Mensaje":"Borrado"});
		}
		else if (data == 0) {
			response.status(404).json({"Mensaje":"No existe"});
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

module.exports = router;
