var express = require('express');
var router = express.Router();

var feedModel = require('../models/feed');

router.get('/feed', function (request, response) {
  feedModel.getFeed (function(error, data){
    response.status(200).json(data);
  });
});

router.get('/feed/:id', function(request, response) {
	var id = request.params.id;
	feddModel.getFeedById(id, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

router.get('/feedSearch/:name', function(request, response) {
	var name = request.params.name;
	feedModel.getFeedSearch(name, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

router.post('/feed', function(request, response) {
	var feedData = {
		name: request.body.name,
		text: request.body.text,
    date: request.body.date,
	};

	feedModel.insertFeed(feedData, function(error, data) {
		if (data) {
			response.status(200).json({"Mensaje":"Insertado"});
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.put('/feed', function(request, response) {
	var feedData = {
		id: request.body.id,
    name: request.body.name,
		text: request.body.text,
    date: request.body.date,
	};

	feedModel.updateFeed(feedData, function(error, data) {
		if (data && data.mensaje) {
			response.status(200).json(data);
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.delete('/feed/:id', function(request, response) {
	var id = request.params.id;
	feedModel.deleteFeed(id, function(error, data) {
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
