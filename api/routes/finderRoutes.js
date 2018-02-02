var express = require('express');
var router = express.Router();
var passport = require('passport');

var requireAdmin = require('../functions/adminCheck');
var requireActive = require('../functions/userActiveCheck');
var requireActiveToken = require('../functions/tokenCheck');

router.post('/find/:model', /*passport.authenticate('jwt', {session: false}), requireActive, requireActiveToken,*/ function(request, response) {
	if (!request.params.model)
		response.status(400).json({"Mensaje":"Petición errónea."}); 
	else {
		if (request.params.model == 'user') {
			var userData = {
				id: request.body.id,
				name: request.body.name,
				birthDate: request.body.birthDate,
				city: request.body.city,
				plan: request.body.plan
			};
		}
		else if (request.params.model == 'category') {

		}
		else 
			response.status(400).json({"Mensaje":"Modelo incorrecto"});
	}
});

module.exports = router;