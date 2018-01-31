var connection = require('../config/connection');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var geonames = {};


geonames.getByZip = function(zip, callback) {
  var req = new XMLHttpRequest();
  req.open('GET', 'http://api.geonames.org/postalCodeSearchJSON?postalcode='+zip+'&username=escaoba', false);
  req.send(null);
    callback(null, req.responseText);
}

module.exports = geonames;
