var express = require('express');
var router = express.Router();

var gardenModel = require('../models/garden');

router.get('/garden', function (request, response) {
  gardenModel.getGarden (function(error, data){
    response.status(200).json(data);
  });
});


router.get('/garden/:id', function(request, response) {
	var id = request.params.id;
	gardenModel.getGardenById(id, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

router.post('/garden', function(request, response) {
	var gardenData = {
    title: request.body.title,
		width: request.body.width,
    length: request.body.length,
    latitude: request.body.latitude,
    longitude: request.body.longitude,
    soil: request.body.soil,
    user: request.body.user,
    city: request.body.city,
	};
	console.log(request.body);
	gardenModel.insertGarden(gardenData, function(error, data) {
		if (data) {
			response.status(200).json({"Mensaje":"Insertado"});
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.put('/garden', function(request, response) {
  var gardenData = {
    id: request.body.id,
		title: request.body.title,
		width: request.body.width,
    length: request.body.length,
    latitude: request.body.latitude,
    longitude: request.body.longitude,
    soil: request.body.soil,
    user: request.body.user,
    city: request.body.city,
	};
	console.log(gardenData);
	gardenModel.updateGarden(gardenData, function(error, data) {
		if (data && data.mensaje) {
			response.status(200).json(data);
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.delete('/garden/:id', function(request, response) {
	var id = request.params.id;
	gardenModel.deleteGarden(id, function(error, data) {
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
