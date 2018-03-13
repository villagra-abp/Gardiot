var express = require('express');
var router = express.Router();
var passport = require('passport');
var validator = require('validator');
var routeRequirements = require('../functions/routeRequirements');

var soilModel = require('../models/soil');

router.get('/soils/:number/:page/:sort', passport.authenticate('jwt', {session: false}), routeRequirements, function (request, response) {
  if (!validator.isInt(request.params.number, {gt: 0}) || !validator.isInt(request.params.page, {gt: 0}) ||  !validator.isAscii(request.params.sort))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		soilModel.getSoil(request.params.number, request.params.page, request.params.sort, function(error, data){
			response.status(200).json(data);
	    });
	}
});

router.get('/soil/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.id, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		soilModel.getSoilById(request.params.id, function(error, data) {
			if (typeof data !== 'undefined') 
				response.status(200).json(data);
			else 
				response.status(404).json({"Mensaje":"No existe"});
		});
	}
});

router.get('/numSoils', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	soilModel.getSoilNumber(function(error, data) {
		response.status(200).json(data); 
	});
});

/*router.get('/soilSearch/:name', function(request, response) {
	var name = request.params.name;
	soilModel.getSoilSearch(name, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});*/

router.post('/admin/soil', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	var soilData = {
		name: request.body.name,
		description: request.body.description,
    	texture: request.body.texture,
	};
	var validate = validateInput(soilData);
	if (validate.length > 0)
		response.status(400).json({"Mensaje": validate});
	else {
		soilData = sanitizeInput(soilData);
		soilModel.insertSoil(soilData, function(error, data) {
			if (data) 
				response.status(200).json({"Mensaje":"Insertado"});			
			else 
				response.status(500).json({"Mensaje":error.message});			
		});
	}	
});

router.put('/admin/soil/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.id, {gt: 0})) 
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		var soilData = {
			name: request.body.name,
			description: request.body.description,
	    	texture: request.body.texture,
		};
		var validate = validateInput(soilData);
		if (validate.length > 0)
			response.status(400).json({"Mensaje": validate});
		else {
			soilData = sanitizeInput(soilData);
			soilModel.updateSoil(soilData, request.params.id, function(error, data) {
				if (data && data.mensaje) {
					response.status(200).json(data);
				}
				else {
					response.status(500).json({"Mensaje":"Error"});
				}
			});
		}	
	}	
});

router.delete('/admin/soil/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.id, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		soilModel.deleteSoil(request.params.id, function(error, data) {
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

  return data;
}

function validateInput(data) {
  var resp = '';
  if (data.id && !validator.isInt(data.id)) resp += 'ID no válido, ';
  if (data.name && !validator.isAscii(data.name)) resp += 'Nombre no válido, ';
  if (data.description && !validator.isAscii(data.description)) resp += 'Descripción no válida, ';

  if (resp) resp = resp.slice(0, -2);
  return resp;
}

module.exports = router;
