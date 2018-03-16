var express = require('express');
var router = express.Router();
var passport = require('passport');
var validator = require('validator');
var routeRequirements = require('../functions/routeRequirements');
var filter = require('../functions/filter');

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
	soilData = filter(soilData); 
	var validate = validateInput(soilData);
	if (validate.length > 0)
		response.status(400).json({"Mensaje": validate});
	else {
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
		soilData = filter(soilData);
		var validate = validateInput(soilData);
		if (validate.length > 0)
			response.status(400).json({"Mensaje": validate});
		else {
			soilModel.updateSoil(soilData, request.params.id, function(error, data) {
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

function validateInput(data) {
  var resp = '';
  if (typeof data.id!== 'undefined' && !validator.isInt(data.id)) resp += 'ID no válido, ';
  if (typeof data.name!== 'undefined' && !validator.isAscii(data.name)) resp += 'Nombre no válido, ';
  if (typeof data.description!== 'undefined' && !validator.isAscii(data.description)) resp += 'Descripción no válida, ';

  if (resp) resp = resp.slice(0, -2);
  return resp;
}

module.exports = router;
