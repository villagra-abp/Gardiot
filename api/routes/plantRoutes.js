var express = require('express');
var router = express.Router();
var passport = require('passport');
var validator = require('validator');
var routeRequirements = require('../functions/routeRequirements');

var plantModel = require('../models/plant');

router.get('/plants/:number/:page/:order/:sort', function (request, response) {
	if (!validator.isInt(request.params.number, {gt: 0}) || !validator.isInt(request.params.page, {gt: 0}) || !validator.isAscii(request.params.order) || !validator.isAscii(request.params.sort))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		plantModel.getPlants (request.params.number, request.params.page, request.params.order, request.params.sort, function(error, data){
    		response.status(200).json(data);
    	});
	}
});

router.get('/plant/:id', function(request, response) {
	if (!validator.isInt(request.params.id, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		plantModel.getPlantById(request.params.id, function(error, data) {
			if (typeof data !== 'undefined')
				response.status(200).json(data);
			else
				response.status(404).json({"Mensaje":"No existe"});
		});
	}
});

router.get('/plantFamily/:id/:number/:page/:sort', function(request, response) {
	if (!validator.isInt(request.params.id, {gt: 0})  || !validator.isInt(request.params.number, {gt: 0}) || !validator.isInt(request.params.page, {gt: 0}) || !validator.isAscii(request.params.sort))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		plantModel.getPlantsByFamily(request.params.id, request.params.number, request.params.page, request.params.sort, function(error, data) {
			if (typeof data !== 'undefined')
				response.status(200).json(data);
			else
				response.status(404).json({"Mensaje":"No existe"});
		});
	}
});

router.post('/admin/plant', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!request.body.scientificName || !request.body.commonName || request.body.description)
		response.status(400).json({"Mensaje":"Faltan parámetros necesarios"});
	else {
		var plantData = {
			scientificName: request.body.scientificName,
			commonName: request.body.commonName,
	    	description: request.body.description,
	    	//photo: request.body.photo, Esto funciona distinto
	    	_3DModel: request.body._3DModel,
	    	family: request.body.family,
	    	depth: request.body.depth,
	    	distance: request.body.distance,
	    	diseaseResist: request.body.diseaseResist,
	    	initDatePlant: request.body.initDatePlant,
	    	finDatePlant: request.body.finDatePlant,
	    	initDateBloom: request.body.initDateBloom,
	    	finDateBloom: request.body.finDateBloom,
	    	initDateHarvest: request.body.initDateHarvest,
	    	finDateHarvest: request.body.finDateHarvest,
	    	leaveType: request.body.leaveType
		};
		var validate = validateInput(plantData);
		if (validate.length > 0)
			response.status(400).json({"Mensaje": validate});
		else {
			plantData = sanitizeInput(plantData);
			plantModel.insertPlant(plantData, function(error, data) {
				if (data)
					response.status(200).json({"Mensaje":"Insertado"});
				else
					response.status(500).json({"Mensaje":error.message});
			});
		}
	}
});

router.put('/admin/plant/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.id, {gt: 0})) {
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	}
	else {
		var plantData = {
			scientificName: request.body.scientificName,
			commonName: request.body.commonName,
	    	description: request.body.description,
	    	//photo: request.body.photo, Esto funciona distinto
	    	_3DModel: request.body._3DModel,
	    	family: request.body.family,
	    	depth: request.body.depth,
	    	distance: request.body.distance,
	    	diseaseResist: request.body.diseaseResist,
	    	initDatePlant: request.body.initDatePlant,
	    	finDatePlant: request.body.finDatePlant,
	    	initDateBloom: request.body.initDateBloom,
	    	finDateBloom: request.body.finDateBloom,
	    	initDateHarvest: request.body.initDateHarvest,
	    	finDateHarvest: request.body.finDateHarvest,
	    	leaveType: request.body.leaveType
		};
		var validate = validateInput(plantData);
		if (validate.length > 0)
			response.status(400).json({"Mensaje": validate});
		else {
			plantData = sanitizeInput(plantData);
			plantModel.updatePlant(plantData, request.params.id, function(error, data) {
				if (data && data.mensaje)
					response.status(200).json(data);
				else
					response.status(500).json({"Mensaje":error.message});
			});
		}
	} 
});

router.delete('/admin/plant/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.id, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		plantModel.deletePlant(request.params.id, function(error, data) {
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
	if (data.scientificName) { data.scientificName = validator.trim(data.scientificName); data.scientificName = validator.stripLow(data.scientificName); data.scientificName = validator.escape(data.scientificName);}
	if (data.commonName) { data.commonName = validator.trim(data.commonName); data.commonName = validator.stripLow(data.commonName); data.commonName = validator.escape(data.commonName);}
	if (data.description) { data.description = validator.trim(data.description); data.description = validator.stripLow(data.description); data.description = validator.escape(data.description);}
	if (data.photo) data.photo = validator.trim(data.photo);
	if (data._3DModel) data._3DModel = validator.trim(data.photo);
	if (data.family) {  data.family = validator.trim(data.family); data.family = validator.toInt(data.family);}
	if (data.depth) {  data.depth = validator.trim(data.depth); data.depth = validator.toFloat(data.depth);}
	if (data.distance) {  data.distance = validator.trim(data.distance); data.distance = validator.toFloat(data.distance);}
	//if (data.diseaseResist) { data.diseaseResist = validator.trim(data.diseaseResist); data.diseaseResist = validator.stripLow(data.diseaseResist); data.diseaseResist = validator.escape(data.diseaseResist);}
	//if (data.initDatePlant) data.initDatePlant = validator.toDate(data.initDatePlant);
	//if (data.finDatePlant) data.finDatePlant = validator.toDate(data.finDatePlant);
	//if (data.initDateBloom) data.initDateBloom = validator.toDate(data.initDateBloom);
	//if (data.finDateBloom) data.finDateBloom = validator.toDate(data.finDateBloom);
	//if (data.initDateHarvest) data.initDateHarvest = validator.toDate(data.initDateHarvest);
	//if (data.finDateHarvest) data.finDateHarvest = validator.toDate(data.finDateHarvest);
	if (data.leaveType) { data.leaveType = validator.trim(data.leaveType); data.leaveType = validator.stripLow(data.leaveType); data.leaveType = validator.escape(data.leaveType);}
	return data;
}

function validateInput(data) {
	var resp = '';
	if (data.id && !validator.isInt(data.id)) resp += 'ID no válido, ';
	if (data.scientificName && !validator.isAscii(data.scientificName)) resp += 'Nombre científico no válido, ';
	if (data.commonName && !validator.isAscii(data.commonName)) resp += 'Nombre común no válido, ';
	if (data.description && !validator.isAscii(data.description)) resp += 'Descripción no válida, ';
	if (data.photo && !validator.isURL(data.photo)) resp += 'Foto no válida, ';
	if (data._3DModel && !validator.isURL(data._3DModel)) resp += 'Modelo no válido, ';
	if (data.family && !validator.isInt(data.family)) resp += 'Familia no válida, ';
	if (data.depth && !validator.isFloat(data.depth)) resp += 'Profundidad no válida, ';
	if (data.distance && !validator.isFloat(data.distance)) resp += 'Distancia no válida, ';
	//if (data.diseaseResist && !validator.isAscii(data.diseaseResist)) resp += 'Resistencia a las enfermedades no válida, ';
	//if (data.initDatePlant && !validator.isISO8601(data.initDatePlant)) resp += 'Fecha inicio plantación no válida, ';
	//if (data.finDatePlant && !validator.isISO8601(data.finDatePlant)) resp += 'Fecha fin plantación no válida, ';
	//if (data.initDateBloom && !validator.isISO8601(data.initDateBloom)) resp += 'Fecha inicio floración no válida, ';
	//if (data.finDateBloom && !validator.isISO8601(data.finDateBloom)) resp += 'Fecha fin floración no válida, ';
	//if (data.initDateHarvest && !validator.isISO8601(data.initDateHarvest)) resp += 'Fecha inicio cosecha no válida, ';
	//if (data.finDateHarvest && !validator.isISO8601(data.finDateHarvest)) resp += 'Fecha fin cosecha no válida, ';
	if (data.leaveType && !validator.isAscii(data.leaveType)) resp += 'Tipo de hoja no válida, ';
	if (resp) resp = resp.slice(0, -2);
	return resp;
}

module.exports = router;
