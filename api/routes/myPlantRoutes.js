var express = require('express');
var router = express.Router();
var passport = require('passport');
var validator = require('validator');
var routeRequirements = require('../functions/routeRequirements');

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
	if (request.body.xCoordinate=='undefined' || request.body.yCoordinate=='undefined' || !request.body.plant=='undefined' || request.body.soil=='undefined')
		response.status(400).json({"Mensaje":"Faltan parámetros necesarios"});
	//else if (!validator.isInt(request.params.garden, {gt: 0}))
		//response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		myPlantModel.isOwner(request.user.id, request.params.garden, function (error, owner) {
			if (error)
				response.status(400).json({"Mensaje":"Error: " + error.message});
			else {
				if (owner == true) {
					var myPlantData = {
						name: request.body.name,
						xCoordinate: request.body.xCoordinate,
				    yCoordinate: request.body.yCoordinate,
				    seed: request.body.seed,
				    number: request.body.number,
				    plant: request.body.plant,
				    soil: request.body.soil
					};
				//	var validate = validateInput(myPlantData);
					console.log('guapaaa');

					// if (validate.length > 0){
					// 		response.status(400).json({"Mensaje": validate});
					// }else {
						//myPlantData = sanitizeInput(myPlantData);
						myPlantModel.insertMyPlant(request.params.garden, myPlantData, function(error, myPlant) {
							console.log('holaaa');
							if (myPlant) {

								taskModel.insertTasks(myPlant, myPlantData.plant, function (error, inserted) {
									if (error) {
										myPlantModel.deleteMyPlant(myPlant, function(error, data) {
											if (data == 1) response.status(200).json({"Mensaje":"Planta no añadida. Error: " + error.message});
											else response.status(500).json({"Mensaje":"Error"});
										});
									}
									else
										response.status(200).json({"Mensaje":"Planta añadida. Insertadas " + inserted + " nuevas tareas."});
								});
							}
							else
								response.status(500).json({"Mensaje":error.message});
						});
					// }
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
		myPlantModel.isOwner(request.user.id, request.params.garden, function (error, owner) {
			if (error)
				response.status(400).json({"Mensaje":"Error: " + error.message});
			else {
				if (owner == true) {
					var myPlantData = {
						name: request.body.name,
						xCoordinate: request.body.xCoordinate,
					    yCoordinate: request.body.yCoordinate,
					    seed: request.body.seed,
					    number: request.body.number,
					    plant: request.body.plant,
					    soil: request.body.soil
					};
					var validate = validateInput(myPlantData);
					if (validate.length > 0)
						response.status(400).json({"Mensaje": validate});
					else {
						myPlantData = sanitizeInput(myPlantData);
						myPlantModel.updateMyPlant(request.params.id, myPlantData, function(error, data) {
							if (data == 1)
								response.status(200).json({"Mensaje":"Actualizado"});
							else if (data == 0)
								response.status(404).json({"Mensaje":"No existe"});
							else
								response.status(500).json({"Mensaje":error.message});
						});
					}
				}
				else response.status(403).json({"Mensaje":"No puedes modificar una planta en el jardin de otro usuario."});
			}
		});
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
					myPlantModel.deleteMyPlant(id, function(error, data) {
						if (data == 1) response.status(200).json({"Mensaje":"Borrado"});
						else if (data == 0) response.status(404).json({"Mensaje":"No existe"});
						else response.status(500).json({"Mensaje":"Error"});
					});
				}
				else response.status(403).json({"Mensaje":"No puedes borrar una planta en el jardin de otro usuario."});
			}
		});
	}
});

function sanitizeInput(data) {
  if (data.id) {  data.id = validator.trim(data.id); data.id = validator.toInt(data.id);}
  if (data.name) { data.name = validator.trim(data.name); data.name = validator.stripLow(data.name); data.name = validator.escape(data.name);}
  if (data.xCoordinate) {  data.xCoordinate = validator.trim(data.xCoordinate); data.xCoordinate = validator.toInt(data.xCoordinate);}
  if (data.yCoordinate) {  data.yCoordinate = validator.trim(data.yCoordinate); data.yCoordinate = validator.toInt(data.yCoordinate);}
  if (data.number) {  data.number = validator.trim(data.number); data.number = validator.toInt(data.number);}
  if (data.plant) {  data.plant = validator.trim(data.plant); data.plant = validator.toInt(data.plant);}
  if (data.garden) {  data.garden = validator.trim(data.garden); data.garden = validator.toInt(data.garden);}
  if (data.soil) {  data.soil = validator.trim(data.soil); data.soil = validator.toInt(data.soil);}
  return data;
}

function validateInput(data) {
  var resp = '';
  if (data.id!='undefined' && !validator.isInt(data.id)) resp += 'ID no válido, ';
  if (data.name!='undefined' && !validator.isAscii(data.name)) resp += 'Nombre no válido, ';
  if (data.xCoordinate!='undefined' && !validator.isInt(data.xCoordinate)) resp += 'Coordenada X no válida, ';
  if (data.yCoordinate!='undefined' && !validator.isInt(data.yCoordinate)) resp += 'Coordenada Y no válida, ';
  if (data.number!='undefined' && !validator.isInt(data.number)) resp += 'Número no válido, ';
  if (data.plant!='undefined' && !validator.isInt(data.plant)) resp += 'Planta no válida, ';
  if (data.garden!='undefined' && !validator.isInt(data.garden)) resp += 'Jardín no válido, ';
  if (data.soil!='undefined' && !validator.isInt(data.soil)) resp += 'Suelo no válido, ';
  if (data.seed!='undefined' && !validator.isISO8601(data.seed)) resp += 'Fecha no válida, ';
  if (resp) resp = resp.slice(0, -2);
  return resp;
}

module.exports = router;
