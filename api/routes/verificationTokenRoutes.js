var express = require('express');
var router = express.Router();
var config = require('../config/main');
var sendgrid = require('../config/sendgrid');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var nodemailer = require('nodemailer');

var userModel = require('../models/user');
var verificationTokenModel = require('../models/verificationToken');

//*** Confirmacion correo tras registro

router.post('/confirmation/:token', function(request, response) {
	jwt.verify(request.params.token, config.secret, function(err, decoded) { //Hay que ver si esto hace una comparacion automatica de los tiempos de expiracion
		if (err) response.status(500).json(err);
		else {
			verificationTokenModel.getUserByVerificationToken(request.params.token, function (error, user) {
				if (error) response.status(500).json({"Mensaje":"Error"});
				else if (typeof user[0] === 'undefined') response.status(404).json({"Mensaje":"No existe el usuario"}); 
				else {
					userModel.activateUser(user[0].userId, function(error, data) {
						if (data == 1)
							response.status(200).json({"Mensaje":"Cuenta verificada. Por favor autentícate."});
						else if (data == 0)
							response.status(404).json({"Mensaje":"No existe la cuenta"});
						else if (error)
							response.status(500).json({"Mensaje":error.message});
					});
				}
			});
		}
	});	
	
});

//*** Reenvio del correo 

router.post('/resend', passport.authenticate('jwt', {session: false}), function(request, response) {
	verificationTokenModel.getVerificationTokenByUser(request.user.id, function(error, token) {
		var tokenNew = jwt.sign({}, config.secret, {
			expiresIn: '1h',
			subject: request.user.id
		});
		if (error) response.status(500).json({"Mensaje":"Imposible recuperar el token de verificacion."});
		else if (typeof token === 'undefined' || token == null) { //Se reinserta
			verificationTokenModel.insertVerificationToken(request.user.id, tokenNew, function(error, token2) {
				if (error) response.status(500).json({"Mensaje":"Error"});
				else {
					var transporter = nodemailer.createTransport({service: 'Sendgrid', auth: {user: sendgrid.auth, pass: sendgrid.password} }); //Coger de fichero
					var mailOptions = {from: 'symbiosegardiot@gmail.com', to: request.user.id, subject: 'Verifica tu dirección de correo electrónico', text: 'Hola,\n\n' + 'Por favor verifica tu cuenta con el siguiente enlace: \nhttp:\/\/' + request.hostname + '\/app\/confirmation\/' + token2 + '\n'};
					transporter.sendMail(mailOptions, function(err) {
						if (err) response.status(500).json({"Mensaje": err.message});
						else response.status(201).json({"Mensaje":"Un email de verificación se ha enviado a " + request.user.id + "."});
					});
				}
			});
		}
		else { //Se actualiza
			verificationTokenModel.updateVerificationToken(request.user.id, tokenNew, function(error, token2) {
				if (error) response.status(500).json({"Mensaje":"Error"});
				else {
					var transporter = nodemailer.createTransport({service: 'Sendgrid', auth: {user: sendgrid.auth, pass: sendgrid.password} }); //Coger de fichero
					var mailOptions = {from: 'symbiosegardiot@gmail.com', to: request.user.id, subject: 'Verifica tu dirección de correo electrónico', text: 'Hola,\n\n' + 'Por favor verifica tu cuenta con el siguiente enlace: \nhttp:\/\/' + request.hostname + '\/app\/confirmation\/' + token2 + '\n'};
					transporter.sendMail(mailOptions, function(err) {
						if (err) response.status(500).json({"Mensaje": err.message});
						else response.status(201).json({"Mensaje":"Un email de verificación se ha enviado a " + request.user.id + "."});
					});
				}
			});
		}
	});	
});

module.exports = router;