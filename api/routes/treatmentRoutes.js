var express = require('express');
var router = express.Router();
var passport = require('passport');
var validator = require('validator');
var routeRequirements = require('../functions/routeRequirements');
var filter = require('../functions/filter');
var isASCII = require('../functions/isASCII');

var treatmentModel = require('../models/treatment');


router.get('/admin/treatments/:number/:page/:sort', passport.authenticate('jwt', {session: false}), routeRequirements, function (request, response) {
  if (!validator.isInt(request.params.number, {gt: 0}) || !validator.isInt(request.params.page, {gt: 0}) ||  !isASCII(request.params.sort))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		treatmentModel.getTreatments(request.params.number, request.params.page, request.params.sort, function(error, data){
			response.status(200).json(data);
	    });
	}
});

router.get('/treatment/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.id, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		treatmentModel.getTreatmentById(request.params.id, function(error, data) {
			if (typeof data !== 'undefined')
				response.status(200).json(data);
			else
				response.status(404).json({"Mensaje":"No existe"});
		});
	}
});


router.get('/admin/numTreatments', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	treatmentModel.getTreatmentsNumber(function(error, data) {
		response.status(200).json(data);
	});
});

router.post('/admin/treatment', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	var treatmentData = {
		name: request.body.name,
		description: request.body.description,
	};
	treatmentData = filter(treatmentData); 
	if (typeof treatmentData.name == 'undefined')
		response.status(400).json({"Mensaje":"Faltan parámetros necesarios"});
	else {		
		var validate = validateInput(treatmentData);
		if (validate.length > 0)
			response.status(400).json({"Mensaje": validate});
		else {
			treatmentModel.insertTreatment(treatmentData, function(error, data) {
				if (data)
					response.status(200).json({"Mensaje":"Insertado"});
				else
					response.status(500).json({"Mensaje":error.message});
			});
		}
	}
});

router.put('/admin/treatment/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.id, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		var treatmentData = {
			name: request.body.name,
			description: request.body.description,
		};
		treatmentData = filter(treatmentData);		
		if (typeof treatmentData.name == 'undefined')
			response.status(400).json({"Mensaje":"Faltan parámetros necesarios"});
		else {	
			var validate = validateInput(treatmentData);
			if (validate.length > 0)
				response.status(400).json({"Mensaje": validate});
			else {
				treatmentModel.updateTreatment(treatmentData, request.params.id, function(error, data) {
					if (data == 1)
						response.status(200).json({"Mensaje":"Actualizado"});
					else if (data == 0)
						response.status(404).json({"Mensaje":"No existe"});
					else
						response.status(500).json({"Mensaje":error.message});
				});
			}	
		}	
	}
});

router.delete('/admin/treatment/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.id, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		treatmentModel.deleteTreatment(request.params.id, function(error, data) {
			if (data == 1)
				response.status(200).json({"Mensaje":"Borrado"});
			else if (data == 0)
				response.status(404).json({"Mensaje":"No existe"});
			else
				response.status(500).json({"Mensaje":error.message});
		});
	}
});

function validateInput(data) {
  var resp = '';
  if (data.id && !validator.isInt(data.id)) resp += 'ID no válido, ';
  if (data.name && !isASCII(data.name)) resp += 'Nombre no válido, ';
  if (data.description && !isASCII(data.description)) resp += 'Descripción no válida, ';
  if (resp) resp = resp.slice(0, -2);
  return resp;
}

module.exports = router;
