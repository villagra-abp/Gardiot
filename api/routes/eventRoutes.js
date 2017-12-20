var express = require('express');
var router = express.Router();

var eventModel = require('../models/event');

router.get('/event', function (request, response) {
  eventModel.getEvent (function(error, data){
    response.status(200).json(data);
  });
});

router.use('/', require('../functions/BLOCK')); //Bloquea las siguientes rutas

router.get('/event/:id', function(request, response) {
	var id = request.params.id;
	eventModel.getEventById(id, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

router.post('/event', function(request, response) {
	var eventData = {
		name: request.body.name,
		description: request.body.description,
    done: request.body.done,
	};
	console.log(request.body);
	eventModel.insertEvent(eventData, function(error, data) {
		if (data) {
			response.status(200).json({"Mensaje":"Insertado"});
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.put('/event', function(request, response) {
	var eventData = {
		id: request.body.id,
		name: request.body.name,
		description: request.body.description,
    done: request.body.done,
	};
	console.log(eventData);
	eventModel.updateEvent(eventData, function(error, data) {
		if (data && data.mensaje) {
			response.status(200).json(data);
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.delete('/event/:id', function(request, response) {
	var id = request.params.id;
	eventModel.deleteEvent(id, function(error, data) {
		if (data == 1) {
			response.status(200).json({"Mensaje":"Borrado"});
		}
		else if (data == 0) {
			response.status(404).json({"Mensaje":"No existe"});
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

module.exports = router;
