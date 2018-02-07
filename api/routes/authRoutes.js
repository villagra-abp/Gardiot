var express = require('express');
var router = express.Router();
var passport = require('passport');
var returnURL = "";



router.get('/auth/google', passport.authenticate('google', {scope: ['profile','email'],prompt:'consent',session: false}));

router.get('/auth/google/callback', passport.authenticate('google', {session: false }), function(request, response) {
    if (request.user.token){
      if (request.hostname == 'gardiot.ovh') 
        response.writeHead(301,{Location: 'https://' + request.hostname + '/oauthconfirmation/'+ request.user.token});
     else
        response.writeHead(301,{Location: 'http://' + request.headers.host + '/oauthconfirmation/'+ request.user.token});
      response.end();
    }

    else
      response.json({"Mensaje":"Cuenta añadida correctamente"});
});



//Configurar ruta 'sigout'
//route.get('/sigout');


router.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email'], session: false}));

router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login', session: false }), function(request, response) {
    if (request.user.token){
      if (request.hostname == 'gardiot.ovh') 
        response.writeHead(301,{Location: 'https://' + request.hostname + '/oauthconfirmation/'+ request.user.token});
     else
        response.writeHead(301,{Location: 'http://' + request.headers.host + '/oauthconfirmation/'+ request.user.token});
      response.end();
    }

    else
      response.json({"Mensaje":"Cuenta añadida correctamente"});
});

module.exports = router;
