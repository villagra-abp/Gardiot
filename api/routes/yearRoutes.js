var express = require('express');
var router = express.Router();

var yearModel = require('../models/year');

router.get('/year', function (request, response) {
  yearModel.getYear (function(error, data){
    response.status(200).json(data);
  });
});

router.get('/year/:id', function(request, response) {
	var id = request.params.id;
	yearModel.getYearById(id, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

router.post('/year', function(request, response) {
	var yearData = {
		id: request.body.id,

	};

	yearModel.insertYear(yearData, function(error, data) {
		if (data) {
			response.status(200).json({"Mensaje":"Insertado"});
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.put('/year', function(request, response) {
	var yearData = {
		idOld: request.body.idOld,
    idNew: request.body.idNew,
	};
	
	yearModel.updateYear(yearData, function(error, data) {
		if (data && data.mensaje) {
			response.status(200).json(data);
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.delete('/year/:id', function(request, response) {
	var id = request.params.id;
	yearModel.deleteYear(id, function(error, data) {
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
