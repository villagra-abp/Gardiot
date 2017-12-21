var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email'], prompt:'consent', session: false}));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login', session: false }), function(request, response) {
    if (request.user.token) 
    	response.json({"Token": request.user.token});
    else
    	response.json({"Mensaje":"Cuenta añadida correctamente"});
    response.redirect('localhost:4200/details')
});
//router.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email'], session: false}));

/*router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login', session: false }), function(request, response) {
    res.redirect('/');
});*/


module.exports = router;