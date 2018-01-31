var express = require('express');
var router = express.Router();

var geonamesModel = require('../models/geonames');

router.get('/geonamesByZip/:zip', function (request, response) {
  var zip = request.params.zip;
  geonamesModel.getByZip (zip, function(error, data){
    data = JSON.stringify(data);
    data = data.replace(/\\/g, "");
    data= data.substring(1, data.length-1);
    response.status(200).send(data);
  });
});



module.exports = router;
