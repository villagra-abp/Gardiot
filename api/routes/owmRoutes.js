var express = require('express');
var router = express.Router();

var owmModel = require('../models/owm');

router.get('/owm/:code/:city', function (request, response) {
  var city = request.params.city,
      code = request.params.code;
  owmModel.getOwm (city, code, function(error, data){
    data = JSON.stringify(data);
    data = data.replace(/\\/g, "");
    data= data.substring(1, data.length-1);
    console.log(data);
    response.status(200).send(data);
  });
});


module.exports = router;
