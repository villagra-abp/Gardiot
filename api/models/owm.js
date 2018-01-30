var connection = require('../config/connection');

var owm = {};

owm.getOwm = function(city, code, callback) {
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var req = new XMLHttpRequest();
  req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' +city+ ',' +code+ '&appid=2538e8122b2865837d34f3a23e22e3f1', false);
  req.send(null);
    callback(null, req.responseText);
}


owm.getOwmById = function(id, callback) {

}

module.exports = owm;
