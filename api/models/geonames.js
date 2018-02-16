var connection = require('../config/connection');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var geonames = {};


geonames.getByZip = function(zip, code, callback) {
  var req = new XMLHttpRequest();
  req.open('GET', 'http://api.geonames.org/postalCodeSearchJSON?postalcode='+zip+'&country='+ code+'&username=escaoba', false);
  req.send(null);
    callback(null, req.responseText);
}

geonames.getAllCountries = function(callback) {
  var req = new XMLHttpRequest();
  req.open('GET', 'http://api.geonames.org/countryInfoJSON?username=escaoba', false);
  req.send(null);
    callback(null, req.responseText);
}

geonames.getCities= function(code, callback) {
  var req = new XMLHttpRequest();
  req.open('GET', 'http://api.geonames.org/searchJSON?country='+ code+'&username=escaoba', false);
  req.send(null);
    callback(null, req.responseText);
}

geonames.searchByZip = function(zip, code, callback) {
  var req = new XMLHttpRequest();
  req.open('GET', 'http://api.geonames.org/postalCodeSearchJSON?username=escaoba&country='+code+'&postalcode_startsWith='+zip, false);
  req.send(null);
    callback(null, req.responseText);
}

module.exports = geonames;
