var express = require('express');
var router = express.Router();
var passport = require('passport');
var cors = require('cors'); //CORS standard
var corsOptions = require('../config/cors');

router.options('/auth/google', cors(corsOptions));
router.get('/auth/google',  cors(corsOptions),  passport.authenticate('google', {scope: ['profile', 'email'], prompt:'consent', session: false}));
//router.get('/auth/google',  passport.authenticate('google', {scope: ['profile', 'email'], prompt:'consent', session: false}));

router.options('/auth/google/callback', cors(corsOptions));
router.get('/auth/google/callback', cors(corsOptions), passport.authenticate('google', { failureRedirect: '/login', session: false }), function(request, response) {
    if (request.user.token) 
    	response.json({"Token": request.user.token});
    else
    	response.json({"Mensaje":"Cuenta añadida correctamente"});
});
//router.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email'], session: false}));

/*router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login', session: false }), function(request, response) {
    res.redirect('/');
});*/


module.exports = router;