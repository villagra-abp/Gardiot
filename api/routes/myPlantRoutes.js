var express = require('express');
var router = express.Router();
var passport = require('passport');
var validator = require('validator');
var routeRequirements = require('../functions/routeRequirements');
var filter = require('../functions/filter');
var isASCII = require('../functions/isASCII');

var myPlantModel = require('../models/myPlant');
var taskModel = require('../models/task');

router.get('/myPlants/:garden', passport.authenticate('jwt', {session: false}), routeRequirements, function (request, response) {
	if (!validator.isInt(request.params.garden, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
  		myPlantModel.getMyPlantsByGarden (request.params.garden, request.user.id, function(error, data){
  			if (data)
    			response.status(200).json(data);
    		else
    			response.status(500).json({"Mensaje":"Petición incorrecta"});
  		});
  	}
});

router.get('/myPlant/:garden/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.garden, {gt: 0}) || !validator.isInt(request.params.id, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		myPlantModel.getMyPlantById(request.params.garden, request.user.id, request.params.id, function(error, data) {
			if (typeof data !== 'undefined')
				response.status(200).json(data);
			else
				response.status(404).json({"Mensaje":"No existe"});
		});
	}
});

router.post('/myPlant/:garden', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	var myPlantData = {
		name: request.body.name,
		xCoordinate: request.body.xCoordinate,
	    yCoordinate: request.body.yCoordinate,
	    seed: request.body.seed,
	    number: request.body.number,
	    plant: request.body.plant,
	    soil: request.body.soil
	};
	myPlantData = filter(myPlantData);
	if (typeof myPlantData.xCoordinate=== 'undefined' || typeof myPlantData.yCoordinate=== 'undefined' || typeof myPlantData.plant=== 'undefined' || typeof myPlantData.soil=== 'undefined')
		response.status(400).json({"Mensaje":"Faltan parámetros necesarios"});
	else if (!validator.isInt(request.params.garden, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		myPlantModel.isOwner(request.user.id, request.params.garden, function (error, owner) {
			if (error)
				response.status(400).json({"Mensaje":"Error: " + error.message});
			else {
				if (owner == true) {
					var validate = validateInput(myPlantData);
					if (validate.length > 0)
						response.status(400).json({"Mensaje": validate});
					else {
						myPlantModel.insertMyPlant(request.params.garden, myPlantData, function(error, myPlant) {
							if (error)
								response.status(500).json({"Mensaje":error.message});
							else if (typeof myPlant!== 'undefined') {
								taskModel.insertTasks(myPlant, myPlantData.plant, function (error, inserted) {
									if (error) {
										myPlantModel.deleteMyPlant(myPlant, function(error, data) {
											if (data == 1) response.status(200).json({"Mensaje":"Planta no añadida. Error: " + error.message});
											else response.status(500).json({"Mensaje":error.message});
										});
									}
									else
										response.status(200).json({myPlant});
								});
							}								
						});
					}
				}
				else response.status(403).json({"Mensaje":"No puedes insertar una planta en el jardin de otro usuario."});
			}
		});
	}
});

router.put('/myPlant/:garden/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.garden, {gt: 0}) || !validator.isInt(request.params.id, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		var myPlantData = {
			name: request.body.name,
			xCoordinate: request.body.xCoordinate,
		    yCoordinate: request.body.yCoordinate,
		    seed: request.body.seed,
		    number: request.body.number,
		    plant: request.body.plant,
		    soil: request.body.soil
		};
		myPlantData = filter(myPlantData);
		if (typeof myPlantData.xCoordinate=== 'undefined' || typeof myPlantData.yCoordinate=== 'undefined' || typeof myPlantData.plant=== 'undefined' || typeof myPlantData.soil=== 'undefined')
			response.status(400).json({"Mensaje":"Faltan parámetros necesarios"});
		else {
			myPlantModel.isOwner(request.user.id, request.params.garden, function (error, owner) {
				if (error)
					response.status(400).json({"Mensaje":"Error: " + error.message});
				else {
					if (owner == true) {
						var validate = validateInput(myPlantData);
						if (validate.length > 0)
							response.status(400).json({"Mensaje": validate});
						else {
							myPlantModel.updateMyPlant(request.params.id, myPlantData, function(error, data) {
								if (error)
									response.status(500).json({"Mensaje":error.message});
								else if (data == 1)
									response.status(200).json({"Mensaje":"Actualizado"});
								else if (data == 0)
									response.status(404).json({"Mensaje":"No existe"});
								else
									response.status(500).json({"Mensaje":"Hubo un error."});
							});
						}
					}
					else response.status(403).json({"Mensaje":"No puedes modificar una planta en el jardin de otro usuario."});
				}
			});
		}
	}
});

router.delete('/myPlant/:garden/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.garden, {gt: 0}) || !validator.isInt(request.params.id, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		myPlantModel.isOwner(request.user.id, request.params.garden, function (error, owner) {
			if (error)
				response.status(400).json({"Mensaje":"Error: " + error.message});
			else {
				if (owner == true) {
					myPlantModel.deleteMyPlant(request.params.id, function(error, data) {
						if (error) response.status(500).json({"Mensaje":error.message});
						else if (data == 1) response.status(200).json({"Mensaje":"Borrado"});
						else if (data == 0) response.status(404).json({"Mensaje":"No existe"});
						else response.status(500).json({"Mensaje":"Error"});
					});
				}
				else response.status(403).json({"Mensaje":"No puedes borrar una planta en el jardin de otro usuario."});
			}
		});
	}
});

router.put('/myPlant/:garden/:id/:x/:y', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) { 
	if (!validator.isInt(request.params.garden, {gt: 0}) || !validator.isInt(request.params.id, {gt: 0}) || !validator.isInt(request.params.x, {gt: 0}) || !validator.isInt(request.params.y, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		myPlantModel.isOwner(request.user.id, request.params.garden, function (error, owner) {
			if (error)
				response.status(400).json({"Mensaje":"Error: " + error.message});
			else {
				if (owner == true) {
					myPlantModel.changePosition(request.params.id, request.params.x, request.params.y, function (error, data) {
						if (error) response.status(500).json({"Mensaje":error.message});
						else if (data == 1) response.status(200).json({"Mensaje":"Posición actualizada"});
						else if (data == 0) response.status(404).json({"Mensaje":"No existe"});
						else response.status(500).json({"Mensaje":"Error"}); 
					});
				}
				else 
					response.status(403).json({"Mensaje":"No puedes mover una planta en el jardin de otro usuario."});
			}
		});
	}
});

function validateInput(data) {
  var resp = '';
  if (typeof data.id!=='undefined' && !validator.isInt(data.id)) resp += 'ID no válido, ';
  if (typeof data.name!=='undefined' && !isASCII(data.name)) resp += 'Nombre no válido, ';
  if (typeof data.xCoordinate!=='undefined' && !validator.isInt(data.xCoordinate)) resp += 'Coordenada X no válida, ';
  if (typeof data.yCoordinate!=='undefined' && !validator.isInt(data.yCoordinate)) resp += 'Coordenada Y no válida, ';
  if (typeof data.number!=='undefined' && !validator.isInt(data.number)) resp += 'Número no válido, ';
  if (typeof data.plant!=='undefined' && !validator.isInt(data.plant)) resp += 'Planta no válida, ';
  if (typeof data.garden!=='undefined' && !validator.isInt(data.garden)) resp += 'Jardín no válido, ';
  if (typeof data.soil!=='undefined' && !validator.isInt(data.soil)) resp += 'Suelo no válido, ';
  if (typeof data.seed!=='undefined' && !validator.isISO8601(data.seed)) resp += 'Fecha no válida, ';
  if (resp) resp = resp.slice(0, -2);
  return resp;
}

module.exports = router;
