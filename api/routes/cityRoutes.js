var express = require('express');
var router = express.Router();

var cityModel = require('../models/city');

router.get('/city', function (request, response) {
  cityModel.getCity (function(error, data){
    response.status(200).json(data);
  });
});

router.use('/', require('../functions/BLOCK')); //Bloquea las siguientes rutas

router.get('/city/:id', function(request, response) {
	var id = request.params.id;
	cityModel.getCityById(id, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

router.post('/city', function(request, response) {
	var cityData = {
		name: request.body.name,
    country: request.body.country,
	};

	cityModel.insertCity(cityData, function(error, data) {
		if (data) {
			response.status(200).json({"Mensaje":"Insertado"});
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.put('/city', function(request, response) {
	var cityData = {
		id: request.body.id,
    name: request.body.name,
    country: request.body.country,
	};
	
	cityModel.updateCity(cityData, function(error, data) {
		if (data && data.mensaje) {
			response.status(200).json(data);
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.delete('/city/:id', function(request, response) {
	var id = request.params.id;
	cityModel.deleteCity(id, function(error, data) {
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
