var express = require('express');
var router = express.Router();
var passport = require('passport');
var validator = require('validator');
var routeRequirements = require('../functions/routeRequirements');
var filter = require('../functions/filter');

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

router.get('/numPlants', function(request, response) {
	plantModel.getPlantsNumber(function(error, data) {
		response.status(200).json(data);
	});
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
	var plantData = {
		scientificName: request.body.scientificName,
		commonName: request.body.commonName,
    	description: request.body.description,
    	photo: request.body.photo,
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
	plantData = filter(plantData); 
	if (typeof plantData.scientificName=== 'undefined' || typeof plantData.commonName=== 'undefined' || typeof plantData.description=== 'undefined')
		response.status(400).json({"Mensaje":"Faltan parámetros necesarios"});
	else {
		var validate = validateInput(plantData);
		if (validate.length > 0)
			response.status(400).json({"Mensaje": validate});
		else {
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
	if (!validator.isInt(request.params.id, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		var plantData = {
			scientificName: request.body.scientificName,
			commonName: request.body.commonName,
	    	description: request.body.description,
	    	photo: request.body.photo,
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
		plantData = filter(plantData);
		if (typeof plantData.scientificName=== 'undefined' || typeof plantData.commonName=== 'undefined' || typeof plantData.description=== 'undefined')
			response.status(400).json({"Mensaje":"Faltan parámetros necesarios"});
		else {
			var validate = validateInput(plantData);
			if (validate.length > 0)
				response.status(400).json({"Mensaje": validate});
			else {
				plantData = sanitizeInput(plantData);
				plantModel.updatePlant(plantData, request.params.id, function(error, data) {
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


function validateInput(data) {
	var resp = '';
	if (typeof data.id!== 'undefined' && !validator.isInt(data.id)) resp += 'ID no válido, ';
	if (typeof data.scientificName!== 'undefined' && !validator.isAscii(data.scientificName)) resp += 'Nombre científico no válido, ';
	if (typeof data.commonName!== 'undefined' && !validator.isAscii(data.commonName)) resp += 'Nombre común no válido, ';
	if (typeof data.description!== 'undefined' && !validator.isAscii(data.description)) resp += 'Descripción no válida, ';
	if (typeof data.photo!== 'undefined' && !validator.isAscii(data.photo)) resp += 'Foto no válida, ';
	if (typeof data._3DModel!== 'undefined' && !validator.isAscii(data._3DModel)) resp += 'Modelo no válido, ';
	if (typeof data.family!== 'undefined' && !validator.isInt(data.family)) resp += 'Familia no válida, ';
	if (typeof data.depth!== 'undefined' && !validator.isFloat(data.depth)) resp += 'Profundidad no válida, ';
	if (typeof data.distance!== 'undefined' && !validator.isFloat(data.distance)) resp += 'Distancia no válida, ';
	if (typeof data.diseaseResist!== 'undefined' && !validator.isFloat(data.diseaseResist)) resp += 'Resistencia a las enfermedades no válida, ';
	if (typeof data.initDatePlant!== 'undefined' && !validator.isISO8601(data.initDatePlant)) resp += 'Fecha inicio plantación no válida, ';
	if (typeof data.finDatePlant!== 'undefined' && !validator.isISO8601(data.finDatePlant)) resp += 'Fecha fin plantación no válida, ';
	if (typeof data.initDateBloom!== 'undefined' && !validator.isISO8601(data.initDateBloom)) resp += 'Fecha inicio floración no válida, ';
	if (typeof data.finDateBloom!== 'undefined' && !validator.isISO8601(data.finDateBloom)) resp += 'Fecha fin floración no válida, ';
	if (typeof data.initDateHarvest!== 'undefined' && !validator.isISO8601(data.initDateHarvest)) resp += 'Fecha inicio cosecha no válida, ';
	if (typeof data.finDateHarvest!== 'undefined' && !validator.isISO8601(data.finDateHarvest)) resp += 'Fecha fin cosecha no válida, ';
	if (typeof data.leaveType!== 'undefined' && !validator.isAscii(data.leaveType)) resp += 'Tipo de hoja no válida, ';
	if (resp) resp = resp.slice(0, -2);
	return resp;
}

module.exports = router;
