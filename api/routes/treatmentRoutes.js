var express = require('express');
var router = express.Router();

var treatmentModel = require('../models/treatment');

router.get('/treatment', function (request, response) {
  treatmentModel.getTreatment (function(error, data){
    response.status(200).json(data);
  });
});

router.use('/', require('../functions/BLOCK')); //Bloquea las siguientes rutas

router.get('/treatment/:id', function(request, response) {
	var id = request.params.id;
	treatmentModel.getTreatmentById(id, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

router.post('/treatment', function(request, response) {
	var treatmentData = {
		name: request.body.name,
		description: request.body.description,
	};
	console.log(request.body);
	treatmentModel.insertTreatment(treatmentData, function(error, data) {
		if (data) {
			response.status(200).json({"Mensaje":"Insertado"});
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.put('/treatment', function(request, response) {
	var treatmentData = {
		id: request.body.id,
		name: request.body.name,
		description: request.body.description,
	};
	console.log(treatmentData);
	treatmentModel.updateTreatment(treatmentData, function(error, data) {
		if (data && data.mensaje) {
			response.status(200).json(data);
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.delete('/treatment/:id', function(request, response) {
	var id = request.params.id;
	treatmentModel.deleteTreatment(id, function(error, data) {
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
