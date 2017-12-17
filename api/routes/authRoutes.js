var express = require('express');
var router = express.Router();
var passport = require('passport');

var userModel = require('../models/user');

router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email'], session: false}));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', session: false }),
  function(request, response) {
    response.status(200).json({"Mensaje":"Google Callback working"});
  });
router.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email'], session: false}));

router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login', session: false }), function(request, response) {
    res.redirect('/');
});

router.get('/google', passport.authenticate('google', {scope: ['profile', 'email'], session: false}), function(request, response) {
	response.status(200).json({"Mensaje":"Google OAuth working"});
});

module.exports = router;