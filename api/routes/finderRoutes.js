var express = require('express');
var router = express.Router();
var passport = require('passport');
var validator = require('validator');

var routeRequirements = require('../functions/routeRequirements');

var finderModel = require('../models/finder');

router.post('/find/:model/:number/:page/:order/:sort', routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.number, {gt: 0}) || !validator.isInt(request.params.page, {gt: 0}) || !validator.isAscii(request.params.model) || !validator.isAscii(request.params.sort) || !validator.isAscii(request.params.order))
		response.status(400).json({"Mensaje":"Petición errónea."});
	else {
		var body = request.body;
		var data = {};
		for (var key in body)
			data[key] = validator.escape(validator.trim(body[key]));

		finderModel.find(request.params.model, data, request.params.number, request.params.page, request.params.order, request.params.sort, function(error, data) {
			if (data)
				response.status(200).json(data);
			else
				response.status(400).json({"Mensaje":"Error al buscar los datos."});
		});
	}
});


module.exports = router;
