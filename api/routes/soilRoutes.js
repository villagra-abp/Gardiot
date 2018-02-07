var express = require('express');
var router = express.Router();

var soilModel = require('../models/soil');

router.get('/soil', function (request, response) {
  soilModel.getSoil (function(error, data){
    response.status(200).json(data);
  });
});

router.get('/soil/:id', function(request, response) {
	var id = request.params.id;
	soilModel.getSoilById(id, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

router.get('/soilSearch/:name', function(request, response) {
	var name = request.params.name;
	soilModel.getSoilSearch(name, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

router.post('/soil', function(request, response) {
	var soilData = {
		name: request.body.name,
		description: request.body.description,
    texture: request.body.texture,
	};

	soilModel.insertSoil(soilData, function(error, data) {
		if (data) {
			response.status(200).json({"Mensaje":"Insertado"});
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.put('/soil', function(request, response) {
	var soilData = {
		id: request.body.id,
		name: request.body.name,
		description: request.body.description,
    texture: request.body.texture,
	};

	soilModel.updateSoil(soilData, function(error, data) {
		if (data && data.mensaje) {
			response.status(200).json(data);
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.delete('/soil/:id', function(request, response) {
	var id = request.params.id;
	soilModel.deleteSoil(id, function(error, data) {
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
