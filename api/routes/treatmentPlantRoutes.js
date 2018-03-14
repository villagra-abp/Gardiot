var express = require('express');
var router = express.Router();
var passport = require('passport');
var validator = require('validator');
var routeRequirements = require('../functions/routeRequirements');

var treatmentPlantModel = require('../models/treatmentPlant');

router.get('/treatmentPlant/:plant/:number/:page/:sort', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.plant, {gt: 0}) || !validator.isInt(request.params.number, {gt: 0}) || !validator.isInt(request.params.page, {gt: 0}) ||  !validator.isAscii(request.params.sort))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		treatmentPlantModel.getTreatmentsByPlant(request.params.number, request.params.page, request.params.sort, request.params.plant, function(error, data) {
			if (typeof data !== 'undefined') 
				response.status(200).json(data);
			else 
				response.status(404).json({"Mensaje":"No existe"});
		});
	}
});

router.post('/admin/treatmentPlant', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (request.body.frequency && (request.body.initDate || request.body.finalDate))
		response.status(400).json({"Mensaje":"Imposible crear tarea con frecuencia y periodo."});
	else if (!request.body.frequency || (!request.body.initDate && !request.body.finalDate))
		response.status(400).json({"Mensaje":"Faltan parámetros necesarios"});
	else {
		var treatmentPlantData = {
			plant: request.body.plant,
			treatment: request.body.treatment,
			frequency: request.body.frequency,
			initDate: request.body.initDate,
			finalDate: request.body.finalDate,
		};
		var validate = validateInput(treatmentPlantData);
		if (validate.length > 0)
			response.status(400).json({"Mensaje": validate});
		else {
			treatmentPlantData = sanitizeInput(treatmentPlantData);
			treatmentPlantModel.insertTreatmentPlant(treatmentPlantData, function(error, data) {
				if (data)
					response.status(200).json({"Mensaje":"Insertado"});
				else
					response.status(500).json({"Mensaje":"Error"});
			});
		}
	}
});

router.put('/admin/treatmentPlant/:plant/:treatment', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.plant, {gt: 0}) || !validator.isInt(request.params.treatment, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		var treatmentPlantData = {
			frequency: request.body.frequency,
			initDate: request.body.initDate,
			finalDate: request.body.finalDate,
		};
		var validate = validateInput(treatmentPlantData);
		if (validate.length > 0)
			response.status(400).json({"Mensaje": validate});
		else {
			treatmentPlantData = sanitizeInput(treatmentPlantData);
			treatmentPlantModel.updateTreatmentPlant(treatmentPlantData, request.params.plant, request.params.treatment, function(error, data) {
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

router.delete('/admin/treatmentPlant/:plant/:treatment', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.plant, {gt: 0}) || !validator.isInt(request.params.treatment, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		treatmentPlantModel.deleteTreatmentPlant(request.params.plant, request.params.treatment, function(error, data) {
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
  if (data.plant) {  data.plant = validator.trim(data.plant); data.plant = validator.toInt(data.plant);}
  if (data.treatment) {  data.treatment = validator.trim(data.treatment); data.treatment = validator.toInt(data.treatment);}
  if (data.frequency) {  data.frequency = validator.trim(data.frequency); data.frequency = validator.toInt(data.frequency);}
  return data;
}

function validateInput(data) {
  var resp = '';
  if (data.plant && !validator.isInt(data.plant)) resp += 'Planta no válida, ';
  if (data.treatment && !validator.isInt(data.treatment)) resp += 'Tratamiento no válida, ';
  if (data.frequency && !validator.isInt(data.frequency)) resp += 'Frecuencia no válida, ';
  if (data.initDate && !validator.isISO8601(request.params.initDate)) resp += 'Fecha inicio no válida, ';
  if (data.finalDate && !validator.isISO8601(request.params.finalDate)) resp += 'Fecha final no válida, ';
  if (resp) resp = resp.slice(0, -2);
  return resp;
}

module.exports = router;