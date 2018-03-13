var express = require('express');
var router = express.Router();
var config = require('../config/main');
var sendgrid = require('../config/sendgrid');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var nodemailer = require('nodemailer');
var cors = require('cors'); //CORS standard
var validator = require('validator');

var userModel = require('../models/user');
var forgetPasswordModel = require('../models/forgetPassword');

router.post('/forgetPassword', cors(), function (request, response) {
	if (!request.body.email)
		response.status(400).json({"Mensaje":"Introduce el correo electrónico para restablecer tu contraseña"});
	else if (!validator.isEmail(request.body.email))
		response.status(400).json({"Mensaje":"Introduce un email válido"});
	else {
		var id = validator.trim(request.body.email);
		userModel.getUserById(id, function (error, user) {
			if (typeof user[0] !== 'undefined') {
				var tokenNew = jwt.sign({}, config.secret, {
					expiresIn: '1h',
					subject: id
				});
				forgetPasswordModel.getForgetPasswordTokenByUser(id, function(error, token) {
					if (error) response.status(500).json({"Mensaje":"Imposible recuperar el token de verificacion."});
					else if (typeof token[0] === 'undefined') {
						forgetPasswordModel.insertForgetPasswordToken(id, tokenNew, function(error, result) {
							if (error) response.status(500).json({"Mensaje":"Error"});
							else {
								var transporter = nodemailer.createTransport({service: 'Sendgrid', auth: {user: sendgrid.auth, pass: sendgrid.password} }); //Coger de fichero   ***\nhttps:\/\/' + request.hostname + '\/dist\/resetPassword\/' + tokenNew + '\n'***
								var mailOptions = {from: 'symbiosegardiot@gmail.com', to: id, subject: 'Restablecer contraseña en Gardiot', text: 'Hola,\n\n' + 'Por favor restablece tu contraseña con el siguiente enlace: \n localhost:4200\/reset-pass-back\/' + tokenNew + '\n'};
								transporter.sendMail(mailOptions, function(err) {
									if (err) response.status(500).json({"Mensaje": err.message});
									else response.status(201).json({"Mensaje":"Un email para restablecer la contraseña se ha enviado a " + id + "."});
								});
							}
						});
					}
					else { //Se actualiza
						forgetPasswordModel.updateForgetPasswordToken(id, tokenNew, function(error, result) {
							if (error) response.status(500).json({"Mensaje":"Error"});
							else {
								var transporter = nodemailer.createTransport({service: 'Sendgrid', auth: {user: sendgrid.auth, pass: sendgrid.password} }); //Coger de fichero  ***\nhttps:\/\/' + request.hostname + '\/dist\/resetPassword\/' + tokenNew + '\n'***
								var mailOptions = {from: 'symbiosegardiot@gmail.com', to: id, subject: 'Restablecer contraseña en Gardiot', text: 'Hola,\n\n' + 'Por favor restablece tu contraseña con el siguiente enlace: \n localhost:4200\/reset-pass-back\/' + tokenNew + '\n'};
								transporter.sendMail(mailOptions, function(err) {
									if (err) response.status(500).json({"Mensaje": err.message});
									else response.status(201).json({"Mensaje":"Un email para restablecer la contraseña se ha enviado a " + id + "."});
								});
							}
						});
					}
				});
			}
			else response.status(404).json({"Mensaje":"No existe el usuario"});
		});
	}
});

router.put('/resetPassword/:token', cors(), function (request, response) {
	if (!request.body.password || !request.body.password2)
		response.status(400).json({"Mensaje":"Introduce ambas contraseñas"});
	else if (!request.params.token)
		response.status(500).json({"Mensaje":"Error con la petición. Token no encontrado"});
	else {
		jwt.verify(request.params.token, config.secret, function(err, decoded) {
			if (err) response.status(500).json(err);
			else {
				forgetPasswordModel.getUserByForgetPasswordToken(request.params.token, function (error, user) {
					if (error) response.status(500).json({"Mensaje":"Error"});
					else if (typeof user[0] === 'undefined') response.status(404).json({"Mensaje":"No existe el usuario o este usuario no ha solicitado un cambio de contraseña."});
					else {
						userModel.genHash(request.body.password, function(error, hash) {
							if (!error) {
								userModel.updatePassword (user[0].userId, hash, function(error, data) {
									if (data) {
										forgetPasswordModel.deleteForgetPasswordTokenByUser(user[0].userId, function (error, data) {
											response.status(200).json({"Mensaje":"Contraseña actualizada. Por favor autentícate con tu nueva contraseña."});
										});
									}
									else
										response.status(500).json({"Mensaje":"Error al actualizar la contraseña"});
								});
							}
						});
					}
				});
			}
		});
	}
});

module.exports = router;
