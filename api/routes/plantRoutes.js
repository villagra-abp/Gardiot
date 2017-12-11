var express = require('express');
var router = express.Router();

var plantModel = require('../models/plant');

router.get('/plant', function (request, response) {
  plantModel.getPlant (function(error, data){
    response.status(200).json(data);
  });
});


router.get('/plant/:id', function(request, response) {
	var id = request.params.id;
	plantModel.getPlantById(id, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

router.post('/plant', function(request, response) {
	var plantData = {
		scientificName: request.body.scientificName,
		commonName: request.body.commonName,
    description: request.body.description,
    photo: request.body.photo,
    url3DModel: request.body.url3DModel,
    category: request.body.category,
	};
	console.log(request.body);
	plantModel.insertPlant(plantData, function(error, data) {
		if (data) {
			response.status(200).json({"Mensaje":"Insertado"});
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.put('/plant', function(request, response) {
  var plantData = {
    id: request.body.id,
		scientificName: request.body.scientificName,
		commonName: request.body.commonName,
    description: request.body.description,
    photo: request.body.photo,
    url3DModel: request.body.url3DModel,
    category: request.body.category,
	};
	console.log(plantData);
	plantModel.updatePlant(plantData, function(error, data) {
		if (data && data.mensaje) {
			response.status(200).json(data);
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.delete('/plant/:id', function(request, response) {
	var id = request.params.id;
	plantModel.deletePlant(id, function(error, data) {
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
