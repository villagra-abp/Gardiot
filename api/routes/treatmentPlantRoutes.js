var express = require('express');
var router = express.Router();
var passport = require('passport');
var validator = require('validator');
var routeRequirements = require('../functions/routeRequirements');

var treatmentPlantModel = require('../models/treatmentPlant');

router.get('/treatmentPlant/:id/:number/:page/:sort', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.id, {gt: 0}) || !validator.isInt(request.params.number, {gt: 0}) || !validator.isInt(request.params.page, {gt: 0}) ||  !validator.isAscii(request.params.sort))
		response.status(400).json({"Mensaje":"Petición incorrecta"});
	else {
		treatmentModel.getTreatmentsByPlant(request.params.number, request.params.page, request.params.sort, request.params.id, function(error, data) {
			if (typeof data !== 'undefined') 
				response.status(200).json(data);
			else 
				response.status(404).json({"Mensaje":"No existe"});
		});
	}
});



module.exports = router;