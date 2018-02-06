var express = require('express');
var router = express.Router();
var passport = require('passport');
var returnURL = "";



router.get('/auth/google', passport.authenticate('google', {scope: ['profile','email'],prompt:'consent',session: false, failureRedirect: '/login'}));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login', session: false }), function(request, response) {
    if (request.user.token){
      response.writeHead(301,
        {Location: 'http://localhost:4200/oauthconfirmation/'+ request.user.token});
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
      response.writeHead(301,
        {Location: 'http://localhost:4200/oauthconfirmation/'+ request.user.token});
        response.end();
    }
    else
      response.json({"Mensaje":"Cuenta añadida correctamente"});
});

module.exports = router;
