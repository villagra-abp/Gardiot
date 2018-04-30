var express = require('express');
var router = express.Router();
var passport = require('passport');
var validator = require('validator');
var geo = require('geo-hash');
var isEmail = require('isemail');
var jwt = require('jsonwebtoken');
var config = require('../config/main');

var routeRequirements = require('../functions/routeRequirements');
var filter = require('../functions/filter');
var isASCII = require('../functions/isASCII');

var gardenModel = require('../models/garden');

router.get('/admin/garden',  passport.authenticate('jwt', {session: false}), routeRequirements, function (request, response) {
  gardenModel.getGarden (function(error, data){
	if (error)
		  response.status(500).json({"Mensaje":error.message});
	else
		response.status(200).json(data);
  });
});


router.get('/garden/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.id, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		var id = request.params.id;
		var user = request.user;
		gardenModel.getGardenById(id, function(error, data) {
			if (error)
				response.status(500).json({"Mensaje":error.message});
			else if (typeof data !== 'undefined' && data.length > 0) {
				if(user.id == data[0].user)
					response.status(200).json(data);
				else
					response.status(403).json({"Mensaje":"Imposible recuperar los datos de un jardín ajeno."});
			}
			else
				response.status(404).json({"Mensaje":"No existe"});
		});
	}
});

router.get('/gardenByUser', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	var user = request.user.id;
	gardenModel.getGardenByUser(user, function(error, data) {
		if (error)
			response.status(500).json({"Mensaje":error.message});
		else if (typeof data !== 'undefined' && data.length > 0) {
			let garden={};
			garden.id=data[0].gardenId;
			garden.title=data[0].title;
			garden.width=data[0].width;
			garden.length=data[0].length;
			garden.longitude=data[0].longitude;
			garden.latitude=data[0].latitude;
			garden.soil=data[0].soil;
			garden.countryCode=data[0].countryCode;
			garden.city=data[0].city;
			garden.plants=[];
			for(let i=0; i<data.length; i++){
				garden.plants.push({"id": data[i].id,
									"plant": data[i].plant,
									"model": data[i]._3DModel,
									"x": data[i].xCoordinate,
									"y": data[i].yCoordinate,
									"seed": data[i].seed});
			}

			response.status(200).json(garden);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

router.get('/firstgardenByUser', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	var user = request.user.id;
	gardenModel.getGardenByUser(user, function(error, data) {
		if (error)
			response.status(500).json({"Mensaje":error.message});
		else if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json({"Mensaje":"Existe"});
		}
		else {
			response.status(200).json({"Mensaje":"No existe"});
		}
	});
});


router.post('/garden', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	var gardenData = {
		title: request.body.title,
		width: request.body.width,
		length: request.body.length,
		latitude: request.body.latitude,
		longitude: request.body.longitude,
		soil: request.body.soil,
		user: request.user.id,
		countryCode: request.body.countryCode,
		city: request.body.city,
		zip: request.body.zip,
	};
	gardenData = filter(gardenData);
	if (typeof gardenData.width=== 'undefined' || typeof gardenData.length=== 'undefined' || typeof gardenData.soil=== 'undefined' || typeof gardenData.user=== 'undefined'){
    response.status(400).json({"Mensaje":"Faltan parámetros necesarios"});
  }
	else {
		var validate = validateInput(gardenData);
		if (validate.length > 0){
      response.status(400).json({"Mensaje": validate});
    }
		else {
			gardenData.geoHash = geo.encode(gardenData.latitude, gardenData.longitude, 8);
			gardenModel.insertGarden(gardenData, function(error, data) {
				if (error){
          response.status(500).json({"Mensaje":error.message});
        }

				else if (data)
					response.status(200).json(data);
			});
		}
	}
});

router.put('/garden/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.id, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		var gardenData = {
			title: request.body.title,
			width: request.body.width,
			length: request.body.length,
			latitude: request.body.latitude,
			longitude: request.body.longitude,
			soil: request.body.soil,
			countryCode: request.body.countryCode,
			city: request.body.city,
			zip: request.body.zip,
		};
		gardenData = filter(gardenData);
		if (typeof gardenData.width === 'undefined' || typeof gardenData.length === 'undefined')
			response.status(400).json({"Mensaje":"Faltan parámetros necesarios"});
		else {
			var validate = validateInput(gardenData);
			if (validate.length > 0)
				response.status(400).json({"Mensaje": validate});
			else {
				gardenModel.isOwner(request.user.id, request.params.id, function(error, owner) {
					if (error)
						response.status(500).json({"Mensaje":error.message});
					else if (owner){
						gardenData.geoHash = geo.encode(gardenData.latitude, gardenData.longitude, 8);
						gardenModel.updateGarden(request.params.id,gardenData, function(error, data) {
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
					else if (!owner) response.status(403).json({"Mensaje":"No puedes modificar un jardin de otro usuario."});
				});
			}
		}
	}
});

router.delete('/garden/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.id, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		var id = request.params.id;
		gardenModel.isOwner(request.user.id, id, function(error, owner) {
			if (error)
				response.status(500).json({"Mensaje":error.message});
			else if(owner){
				gardenModel.deleteGarden(id, function(error, data) {
					if (error)
						response.status(500).json({"Mensaje":error.message});
					else if (data == 1)
						response.status(200).json({"Mensaje":"Borrado"});
					else if (data == 0)
						response.status(404).json({"Mensaje":"No existe"});
				});
			}
			else if (!owner) response.status(403).json({"Mensaje":"No puedes borrar un jardin de otro usuario."});
		});
	}
});

router.get('/shareGarden', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	jwt.sign({}, config.secret, {subject: request.user.id}, function (err, token) {
		if (err)
			response.status(400).json({"Mensaje":err.message});
		else 
			response.status(200).json({"Mensaje":token});
	});
});

router.get('/gardenShared/:token', function (request, response) {
	jwt.verify(request.params.token, config.secret, {ignoreExpiration: true}, function(err, decoded) {
		if (err)
			response.status(400).json({"Mensaje":err.message});
		else {
			gardenModel.getGardenByUser(decoded.sub, function (error, data) {
				if (error)
					response.status(500).json({"Mensaje":error.message});
				else if (typeof data !== 'undefined' && data.length > 0) {
					let garden={};
					garden.id=data[0].gardenId;
					garden.title=data[0].title;
					garden.width=data[0].width;
					garden.length=data[0].length;
					//garden.longitude=data[0].longitude;
					//garden.latitude=data[0].latitude;
					garden.soil=data[0].soil;
					//garden.countryCode=data[0].countryCode;
					//garden.city=data[0].city;
					garden.plants=[];
					for(let i=0; i<data.length; i++){
						garden.plants.push({"id": data[i].id,
											"plant": data[i].plant,
											"model": data[i]._3DModel,
											"x": data[i].xCoordinate,
											"y": data[i].yCoordinate,
											"seed": data[i].seed});
					}
					response.status(200).json(garden);
				}
				else 
					response.status(404).json({"Mensaje":"No existe"});
			});
		}		
	});
});

function validateInput(data) {
	var resp = '';
	if (typeof data.id!=='undefined' && !validator.isInt(data.id)) resp += 'ID no válido, ';
	if (typeof data.title!=='undefined' && !isASCII(data.title)) resp += 'Título no válido, ';
	if (typeof data.city!=='undefined' && !isASCII(data.city)) resp += 'Ciudad no válida, ';
	if (typeof data.width!=='undefined' && !validator.isInt(data.width)) resp += 'Ancho no válido, ';
	if (typeof data.lenght!=='undefined' && !validator.isInt(data.lenght)) resp += 'Largo no válido, ';
	if (typeof data.latitude!=='undefined' && typeof data.longitude!=='undefined' && !validator.isLatLong(data.latitude + ',' + data.longitude)) resp += 'Latitud y/o longitud no válidas, ';
	if (typeof data.countryCode!== 'undefined' && !validator.isISO31661Alpha2(data.countryCode)) resp += 'País no válido, ';
	if (typeof data.soil!=='undefined' && !validator.isInt(data.soil)) resp += 'Suelo no válido, ';
	if (typeof data.zip!=='undefined' && !validator.isPostalCode(data.zip)) resp += 'Código postal no válido, ';
	if (typeof data.email!== 'undefined' && !validator.isEmail(data.email) && !isEmail.validate(data.email)) resp += 'Email no válido, ';
	if (resp) resp = resp.slice(0, -2);
	return resp;
  }

module.exports = router;
