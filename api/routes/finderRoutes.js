var express = require('express');
var router = express.Router();
var passport = require('passport');
var validator = require('validator');

var routeRequirements = require('../functions/routeRequirements');
var filter = require('../functions/filter');

var userModels = ["PLANT"];
var adminModels = ["USER","PRODUCT","TREATMENT","FEED"];

var finderModel = require('../models/finder');

router.post('/find/:model/:number/:page/:order/:sort', passport.authenticate('jwt', {session: false}), routeRequirements, function(request, response) {
	if (!validator.isInt(request.params.number, {gt: 0}) || !validator.isInt(request.params.page, {gt: 0}) || !validator.isAscii(request.params.model) || !validator.isAscii(request.params.sort) || !validator.isAscii(request.params.order))
		response.status(400).json({"Mensaje":"Petición errónea."});
	else {
    if (!checkPrivileges(request, request.params.model))
      response.status(401).json({"Mensaje":"No tienes privilegios para realizar esa búsqueda"});
    else {
      var body = filter(request.body);
      finderModel.find(request.params.model, body, request.params.number, request.params.page, request.params.order, request.params.sort, function(error, data) {
        
        if (error) {
          if (error.errno == '1054')
            response.status(400).json({"Mensaje":"Búsqueda de claves incorrecta."});
          else  if (error.errno == '1052')
            response.status(400).json({"Mensaje":"Claves ambiguas"});
          else if (error)
            response.status(400).json({"Mensaje":"Error al buscar los datos: " + error.message});
        }      
        else if (data){

          response.status(200).json(data);
        }else{
          data = [];
          response.status(200).json(data);
        }
      });
    }
	}
});

function checkPrivileges (request, model) {
  let modelUp = model.toUpperCase();
  if (userModels.indexOf(modelUp)!= -1
    || (adminModels.indexOf(modelUp)!= -1 && request.user.admin == 1)) //Se pasa el request.user sin el passport? Yo creo que no
    return true;
  else
    return false;
}

module.exports = router;
