var express = require('express');
var router = express.Router();
var passport = require('passport');
var validator = require('validator');
var routeRequirements = require('../functions/routeRequirements');

var treatmentModel = require('../models/treatment');


router.get('/treatments/:number/:page/:sort', function (request, response) {
  if (!validator.isInt(request.params.number, {gt: 0}) || !validator.isInt(request.params.page, {gt: 0}) ||  !validator.isAscii(request.params.sort))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		treatmentModel.getTreatments(request.params.number, request.params.page, request.params.sort, function(error, data){
			response.status(200).json(data);
	    });
	}
});

router.get('/treatment/:id', function(request, response) {
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

router.get('/treatmentPlant/:id/:number/:page/:sort', function(request, response) {
	if (!validator.isInt(request.params.id, {gt: 0}) || !validator.isInt(request.params.number, {gt: 0}) || !validator.isInt(request.params.page, {gt: 0}) ||  !validator.isAscii(request.params.sort))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		treatmentModel.getTreatmentsByPlant(request.params.number, request.params.page, request.params.sort, request.params.id, function(error, data) {
			if (typeof data !== 'undefined') 
				response.status(200).json(data);
			else 
				response.status(404).json({"Mensaje":"No existe"});
		});
	}
});

router.get('/treatmentProduct/:id/:number/:page/:sort', function(request, response) {
	if (!validator.isInt(request.params.id, {gt: 0}) || !validator.isInt(request.params.number, {gt: 0}) || !validator.isInt(request.params.page, {gt: 0}) ||  !validator.isAscii(request.params.sort))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		treatmentModel.getTreatmentsByProduct(request.params.number, request.params.page, request.params.sort, request.params.id, function(error, data) {
			if (typeof data !== 'undefined') 
				response.status(200).json(data);
			else 
				response.status(404).json({"Mensaje":"No existe"});
		});
	}
});

router.get('/numTreatments', function(request, response) {
	treatmentModel.getTreatmentsNumber(function(error, data) {
		response.status(200).json(data); 
	});
});

router.post('/admin/treatment', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!request.body.name)
		response.status(400).json({"Mensaje":"Faltan parámetros necesarios"});
	else {
		var treatmentData = {
			name: request.body.name,
			description: request.body.description,
			plant: request.body.plant,
			fred: request.body.freq,
			initDate: request.body.initDate,
			finalDate: request.body.finalDate
		};
		var validate = validateInput(treatmentData);
		if (validate.length > 0)
			response.status(400).json({"Mensaje": validate});
		else {
			treatmentData = sanitizeInput(treatmentData);
			treatmentModel.insertTreatment(treatmentData, function(error, data) {
				if (data) 
					response.status(200).json({"Mensaje":"Insertado"});
				else 
					response.status(500).json({"Mensaje":"Error"});
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
			plant: request.body.plant,
			fred: request.body.freq,
			initDate: request.body.initDate,
			finalDate: request.body.finalDate
		};
		var validate = validateInput(treatmentData);
		if (validate.length > 0)
			response.status(400).json({"Mensaje": validate});
		else {
			treatmentData = sanitizeInput(treatmentData);
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
});

router.delete('/admin/treatment/:id', function(request, response) {
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

function sanitizeInput(data) {
  if (data.id) {  data.id = validator.trim(data.id); data.id = validator.toInt(data.id);}
  if (data.name) { data.name = validator.trim(data.name); data.name = validator.stripLow(data.name); data.name = validator.escape(data.name);}
  if (data.description) { data.description = validator.trim(data.description); data.description = validator.stripLow(data.description); data.description = validator.escape(data.description);}
  if (data.plant) {  data.plant = validator.trim(data.plant); data.plant = validator.toInt(data.plant);}
  if (data.freq) {  data.freq = validator.trim(data.freq); data.freq = validator.toInt(data.freq);}
  return data;
}

function validateInput(data) {
  var resp = '';
  if (data.id && !validator.isInt(data.id)) resp += 'ID no válido, ';
  if (data.name && !validator.isAscii(data.name)) resp += 'Nombre no válido, ';
  if (data.description && !validator.isAscii(data.description)) resp += 'Descripción no válida, ';
  if (data.plant && !validator.isInt(data.plant)) resp += 'Planta no válida, ';
  if (data.freq && !validator.isInt(data.freq)) resp += 'Frecuencia no válida, ';
  if (data.initDate && !validator.isISO8601(data.initDate)) resp += 'Fecha inicio no válida, ';
  if (data.finalDate && !validator.isISO8601(data.finalDate)) resp += 'Fecha inicio no válida, ';
  if (resp) resp = resp.slice(0, -2);
  return resp;
}

module.exports = router;
