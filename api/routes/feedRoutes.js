var express = require('express');
var router = express.Router();
var passport = require('passport');
var validator = require('validator');
var routeRequirements = require('../functions/routeRequirements');
var filter = require('../functions/filter');

var feedModel = require('../models/feed');

router.get('/admin/feed/:number/:page/:sort', passport.authenticate('jwt', {session: false}), routeRequirements, function (request, response) {
  	if (!validator.isInt(request.params.number, {gt: 0}) || !validator.isInt(request.params.page, {gt: 0}) ||  !validator.isAscii(request.params.sort))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		feedModel.getFeeds (request.params.number, request.params.page, request.params.sort, function(error, data){
			if (error)
				response.status(500).json({"Mensaje":error.message});
    		else if (typeof data !== 'undefined') 
				response.status(200).json(data);
  		});
	}
});

router.get('/feed', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	feedModel.getUnseenFeedsForToday(request.user.id, function(error, data) {
		if (error)
			response.status(500).json({"Mensaje":error.message});
		else if (typeof data !== 'undefined') 
			response.status(200).json(data);
	});
});

router.get('/admin/numFeeds', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	treatmentModel.getFeedsNumber(function(error, data) {
		response.status(200).json(data);
	});
});

router.get('/admin/feed/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.id, {gt: 0})) 
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		feedModel.getFeedById(request.params.id, function(error, data) {
			if (error)
				response.status(500).json({"Mensaje":error.message});
			else if (typeof data !== 'undefined') 
				response.status(200).json(data);		
		});
	}	
});

router.patch('/feed/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) { 
	if (!validator.isInt(request.params.id, {gt: 0})) 
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		feedModel.setFeedSeen(request.params.id, request.user.id, function (error, data) {
			if (error)
				response.status(500).json({"Mensaje":error.message});
			else if (data == 1) 
				response.status(200).json({"Mensaje":"Marcado como visto"});
		});
	}
});

/*router.get('/feedSearch/:name', function(request, response) {
	var name = request.params.name;
	feedModel.getFeedSearch(name, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});*/

router.post('/admin/feed', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	var feedData = {
		name: request.body.name,
		text: request.body.text,
    	dateInit: request.body.dateInit,
    	dateFinal: request.body.dateFinal
	};
	feedData = filter(feedData); 
	if (typeof feedData.name || typeof feedData.dateInit || typeof feedData.dateFinal)
		response.status(400).json({"Mensaje":"Faltan parámetros necesarios"});
	else {	
		var validate = validateInput(feedData);
		if (validate.length > 0)
			response.status(400).json({"Mensaje": validate});
		else {
			feedModel.insertFeed(feedData, function(error, data) {
				if (data) 
					response.status(200).json({"Mensaje":"Insertado"});
				else 
					response.status(500).json({"Mensaje":error.message});
			});
		}
	}
});

router.put('/admin/feed/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.id, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		var feedData = {
			name: request.body.name,
			text: request.body.text,
	    	dateInit: request.body.dateInit,
	    	dateFinal: request.body.dateFinal
		};
		feedData = filter(feedData); 
		var validate = validateInput(feedData);
		if (typeof feedData.name || typeof feedData.dateInit || typeof feedData.dateFinal)
			response.status(400).json({"Mensaje":"Faltan parámetros necesarios"});
		else {	
			if (validate.length > 0)
				response.status(400).json({"Mensaje": validate});
			else {
				feedModel.insertFeed(feedData, request.params.id, function(error, data) {
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

router.delete('/admin/feed/:id', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.id, {gt: 0}))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		feedModel.deleteFeed(request.params.id, function(error, data) {
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
  if (data.name && !validator.isAscii(data.name)) resp += 'Nombre no válido, ';
  if (data.text && !validator.isAscii(data.text)) resp += 'Texto no válido, ';
  if (data.dateInit && !validator.isISO8601(request.params.dateInit)) resp += 'Fecha inicio no válida, ';
  if (data.dateFinal && !validator.isISO8601(request.params.dateFinal)) resp += 'Fecha final no válida, ';
  if (resp) resp = resp.slice(0, -2);
  return resp;
}

module.exports = router;
