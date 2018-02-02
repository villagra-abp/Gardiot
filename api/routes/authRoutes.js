var express = require('express');
var router = express.Router();
var passport = require('passport');



router.get('/auth/google', passport.authenticate('google', {scope: ['profile','email'],prompt:'consent',session: false, failureRedirect: '/login'}));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login', session: false }), function(request, response) {
    if (request.user.token)
      response.json({"Token": request.user.token});
    else
      response.json({"Mensaje":"Cuenta añadida correctamente"});
});

	

//Configurar ruta 'sigout'
//route.get('/sigout');


router.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email'], session: false}));

router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login', session: false }), function(request, response) {
   	if (request.user.token)
      response.json({"Token": request.user.token});
    else
      response.json({"Mensaje":"Cuenta añadida correctamente"});
});

module.exports = router;