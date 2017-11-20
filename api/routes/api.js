//Dependencies
var express = require('express');
var router = express.Router();

//Models
var Test = require('../models/test');

//Routes with MongoDB
router.get('/test', function(req, res){
	res.send('API WORKING');
});

//Routes with MariaDB
router.get('/test', function (req, res){
	if(err) return res.status(400).json(err);

	req.getConnection(function(err, connection){
		connection.query('QUERY-CUAL-SEA;', [], function (err, result){
			if (err) return res.status(400).json(err);
			return res.status(200).json(result);
		});
	});
}
//Return
module.exports = router;
