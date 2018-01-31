var express = require('express');
var router = express.Router();

var geonamesModel = require('../models/geonames');

router.get('/geonamesByZip/:zip/:code', function (request, response) {
  var zip = request.params.zip,
      code = request.params.code;
  geonamesModel.getByZip (zip, code, function(error, data){
    process.nextTick(function() {
      data = JSON.stringify(data);
      data = data.replace(/\\/g, "");
      data= data.substring(1, data.length-1);

      response.status(200).send(data);
    });

  });
});

router.get('/geonamesAllCountries', function (request, response) {
  geonamesModel.getAllCountries (function(error, data){
    process.nextTick(function() {
      data = JSON.stringify(data);
      data = data.replace(/\\/g, "");
      data= data.substring(1, data.length-1);

      response.status(200).send(data);
    });
  });
});

router.get('/geonamesCities/:code', function (request, response) {
  var code = request.params.code;
  geonamesModel.getCities(code, function(error, data){
    process.nextTick(function() {
      data = JSON.stringify(data);
      data = data.replace(/\\/g, "");
      data= data.substring(1, data.length-1);

      response.status(200).send(data);
    });
  });
});



module.exports = router;
