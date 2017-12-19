var express = require('express');
var router = express.Router();
var config = require('../config/main');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var validator = require('validator');

var userModel = require('../models/user');
var requireAdmin = require('../functions/adminCheck');



/***************************
*		NO AUTH ROUTES
***************************/

//*** Registro de usuario. Registrar solo con id, password de momento

router.post('/register', function(request, response) {
	if (!request.body.id || !request.body.password) {
		response.status(500).json({"Mensaje":"Introduce usuario y contraseña"});
	}
	else {
		var userData = {
			id: request.body.id,
			password: request.body.password,
			name: request.body.name,
			birthDate: request.body.birthDate,
			photo: request.body.photo,
			city: request.body.city,
			plan: request.body.plan
		};
		var validate = validateInput(userData);
		if (validate.length > 0)
			response.status(400).json({"Mensaje": validate});
		else {
			userData = sanitizeInput(userData);
			userModel.genHash(userData.password, function(error, hash) {
				if (!error) {
					userData.password = hash;
					userModel.insertUser(userData, function(error, data) {
						if (data)
							response.status(200).json({"Mensaje":"Insertado"});
						else
							response.status(500).json({"Mensaje":"Error"});
					});
				}
			});
		}
	}
});


//*** Autenticacion con id, password

router.post('/authenticate', function(request, response) {
	var id = validator.normalizeEmail(validator.trim(request.body.id));
	userModel.getUserById(id, function (error, user) {
		if (typeof user !== 'undefined' && user.length > 0) {
			if (user[0].active == 1) {
				userModel.checkPassword(request.body.password, user[0].password, function(err, isMatch) {
					if (isMatch && !err) {
						var token = jwt.sign({}, config.secret, {
							expiresIn: '6h',
							audience: "gardiot.ovh",
							subject: user[0].id
						});
						response.status(200).json({"Token":token});
					}
					else response.status(401).json({"Mensaje":"Las contraseñas no coinciden"});
				});
			}
			else response.status(403).json({"Mensaje":"Cuenta no activa"});
		}
		else response.status(404).json({"Mensaje":"No existe el usuario"});
	});
});

/*router.get('/hash/:passwd', function(request, response) {
	userModel.genHash(request.params.passwd, function(error, hash) {
		if (!error) response.status(200).json(hash);
	});
});*/

/***************************
*		USER ROUTES
***************************/

//***Muestra al usuario actual. Sin parametros

/*router.get('/user', passport.authenticate('jwt', {session: false}), function(request, response) {
	userModel.getUserById(request.user.id, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0)
			response.status(200).json(data);
		else
			response.status(404).json({"Mensaje":"No existe"});
	});
});*/

router.get('/user', passport.authenticate('jwt', {session: false}), function(request, response) {
	response.status(200).json(request.user); //PASSPORT devuelve siempre el objeto user
});


//***Actualiza al usuario actual

router.put('/user', passport.authenticate('jwt', {session: false}), function(request, response) {
	var userData = {
		id: request.body.id,
		password: request.body.contrasenya,
		name: request.body.name,
		birthDate: request.body.birthDate,
		photo: request.body.photo,
		city: request.body.city,
		plan: request.body.plan,
		oldId: request.user.id
	};
	var validate = validateInput(userData);
	if (validate.length > 0)
		response.status(400).json({"Mensaje": validate});
	else {
		userData = sanitizeInput(userData);
		if (userData.password) {
			userModel.genHash(userData.password, function(error, hash) {
				if (!error) userData.password = hash;
			});
		}
		userModel.updateUser(userData, function(error, data) {
			if (data)
				response.status(200).json({"Mensaje":"Actualizado"});
			else
				response.status(500).json({"Mensaje":"Error"});
		});
	}
});


//*** Darse de baja. Sin parametros

router.patch('/user', passport.authenticate('jwt', {session: false}),  function(request, response) {
	userModel.deactivateUser(token.id, function(error, data) {
		if (data == 1)
			response.status(200).json({"Mensaje":"Cuenta desactivada"});
		else if (data == 0)
			response.status(404).json({"Mensaje":"No existe"});
		else
			response.status(500).json({"Mensaje":"Error"});
	});
});

//*** Logout

router.get('/logout', passport.authenticate('jwt', {session: false}),  function(request, response) {
	request.logout();
});

/***************************
*		ADMIN ROUTES
***************************/

//*** Lista todos los usuarios

router.get('/users', passport.authenticate('jwt', {session: false}), requireAdmin, function(request, response) {
	userModel.getUser (function(error, data) {
		response.status(200).json(data);
	});
});

//*** Muestra a un usuario concreto. Pasar usuario como /user/juanito@gmail.com

router.get('/user/:id', passport.authenticate('jwt', {session: false}), requireAdmin, function(request, response) {
	userModel.getUserById(request.params.id, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0)
			response.status(200).json(data);
		else
			response.status(404).json({"Mensaje":"No existe"});
	});
});


//*** Desactiva a un usuario. Misma forma que antes

router.patch('/user/:id', passport.authenticate('jwt', {session: false}), requireAdmin, function(request, response) {
	userModel.deactivateUser(request.params.id, function(error, data) {
		if (data == 1)
			response.status(200).json({"Mensaje":"Desactivado"});
		else if (data == 0)
			response.status(404).json({"Mensaje":"No existe"});
		else
			response.status(500).json({"Mensaje":"Error"});
	});
});


/*
router.put('/user', function(request, response) {
	var userData = {
		id: request.body.id,
		password: request.body.contrasenya,
		name: request.body.name,
		birthDate: request.body.birthDate,
		photo: request.body.photo,
		city: request.body.city,
		plan: request.body.plan
	};
	userData = sanitizeInput(userData);
	userModel.updateUser(userData, function(error, data) {
		if (data && data.mensaje) {
			response.status(200).json(data);
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
}); */


function sanitizeInput(data) {
	if (data.id) { data.id = validator.normalizeEmail(data.id); data.id = validator.trim(data.id);}
	if (data.name) { data.name = validator.trim(data.name); data.name = validator.stripLow(data.name); data.name = validator.escape(data.name);}
	//if (data.birthDate) data.birthDate = validator.toDate(data.birthDate);
	if (data.photo) data.photo = validator.trim(data.photo);
	if (data.city) { data.city = validator.trim(data.city); data.city = validator.toInt(data.city);}
	if (data.plan) { data.name = validator.trim(data.name); data.name = validator.stripLow(data.name); data.name = validator.escape(data.name);}
	if (data.oldId) { data.oldId = validator.normalizeEmail(data.oldId); data.oldId = validator.trim(data.oldId);}
	return data;
}

function validateInput(data) {
	var resp = '';
	if (data.id && !validator.isEmail(data.id)) resp += 'Email no válido, ';
	if (data.name && !validator.isAlpha(data.name, 'es-ES')) resp += 'Nombre no válido, ';
	if (data.birthDate && validator.isAfter(data.birthDate)) resp += 'Fecha no válida, ';
	if (data.city && !validator.isInt(data.city)) resp += 'Ciudad no válida, ';
	if (data.photo && !validator.isURL(data.photo)) resp += 'Foto no válida, ';
	if (data.plan && !validator.isAlpha(data.plan, 'es-ES')) resp += 'Plan no válido, ';

	if (resp) resp = resp.slice(0, -2);
	return resp;
}

module.exports = router;
