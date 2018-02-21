var express = require('express');
var router = express.Router();
var passport = require('passport');
var validator = require('validator');

var routeRequirements = require('../functions/routeRequirements');

var finderModel = require('../models/finder');

router.post('/find/:model', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!request.params.model)
		response.status(400).json({"Mensaje":"Petición errónea."}); 
	else {		
		var body = request.body;
		var data = {};
		for (var key in body) 
			data[key] = validator.escape(validator.trim(body[key]));
			
		finderModel.find(request.params.model, data, function(error, data) {
			if (data)
				response.status(200).json(data);
			else
				response.status(400).json({"Mensaje":"Error al buscar los datos."});
		});
	}
});


module.exports = router;