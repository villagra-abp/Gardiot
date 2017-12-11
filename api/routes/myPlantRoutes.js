var express = require('express');
var router = express.Router();

var myPlantModel = require('../models/myPlant');

router.get('/myPlant', function (request, response) {
  myPlantModel.getMyPlant (function(error, data){
    response.status(200).json(data);
  });
});


router.get('/myPlant/:id', function(request, response) {
	var id = request.params.id;
	myPlantModel.getMyPlantById(id, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

router.post('/myPlant', function(request, response) {
	var myPlantData = {
		name: request.body.name,
		xCoordinate: request.body.xCoordinate,
    yCoordinate: request.body.yCoordinate,
    seed: request.body.seed,
    number: request.body.number,
    plant: request.body.plant,
    garden: request.body.garden,
    soil: request.body.soil,
	};
	console.log('myPlant ->' +request.body);
	myPlantModel.insertMyPlant(myPlantData, function(error, data) {
		if (data) {
			response.status(200).json({"Mensaje":"Insertado"});
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.put('/myPlant', function(request, response) {
	var myPlantData = {
		id: request.body.id,
    name: request.body.name,
		xCoordinate: request.body.xCoordinate,
    yCoordinate: request.body.yCoordinate,
    seed: request.body.seed,
    number: request.body.number,
    plant: request.body.plant,
    garden: request.body.garden,
    soil: request.body.soil,
	};
	console.log(myPlantData);
	myPlantModel.updateMyPlant(myPlantData, function(error, data) {
		if (data && data.mensaje) {
			response.status(200).json(data);
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.delete('/myPlant/:id', function(request, response) {
	var id = request.params.id;
	myPlantModel.deleteMyPlant(id, function(error, data) {
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
