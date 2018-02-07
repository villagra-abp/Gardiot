var express = require('express');
var router = express.Router();

var countryModel = require('../models/country');

router.get('/country', function (request, response) {
  countryModel.getCountry (function(error, data){
    response.status(200).json(data);
  });
});

router.get('/country/:id', function(request, response) {
	var id = request.params.id;
	countryModel.getCountryById(id, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

router.post('/country', function(request, response) {
	var countryData = {
		name: request.body.name,

	};

	countryModel.insertCountry(countryData, function(error, data) {
		if (data) {
			response.status(200).json({"Mensaje":"Insertado"});
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.put('/country', function(request, response) {
	var countryData = {
		id: request.body.id,
    name: request.body.name,
	};
	
	countryModel.updateCountry(countryData, function(error, data) {
		if (data && data.mensaje) {
			response.status(200).json(data);
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.delete('/country/:id', function(request, response) {
	var id = request.params.id;
	countryModel.deleteCountry(id, function(error, data) {
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
