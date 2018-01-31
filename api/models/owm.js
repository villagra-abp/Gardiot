var connection = require('../config/connection');

var owm = {};

owm.getWeatherCityCode = function(city, code, callback) {
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var req = new XMLHttpRequest();
  req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' +city+ ',' +code+ '&appid=2538e8122b2865837d34f3a23e22e3f1', false);
  req.send(null);
    callback(null, req.responseText);
}

owm.getWeatherCity = function(city, callback) {
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var req = new XMLHttpRequest();
  req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' +city+ '&appid=2538e8122b2865837d34f3a23e22e3f1', false);
  req.send(null);
    callback(null, req.responseText);
}

owm.getWeatherCoord = function(lon, lat, callback) {
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var req = new XMLHttpRequest();
  req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+ '&lon='+ lon+ '&appid=2538e8122b2865837d34f3a23e22e3f1', false);
  req.send(null);
    callback(null, req.responseText);
}

owm.getWeatherZip = function(zip, code, callback) {
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var req = new XMLHttpRequest();
  req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip='+ zip +','+ code +'&appid=2538e8122b2865837d34f3a23e22e3f1', false);
  req.send(null);
    callback(null, req.responseText);
}

owm.getForecastCityCode = function(city, code, callback) {
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var req = new XMLHttpRequest();
  req.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?q=' +city+ ',' +code+ '&appid=2538e8122b2865837d34f3a23e22e3f1', false);
  req.send(null);
    callback(null, req.responseText);
}

owm.getForecastCoord = function(lon, lat, callback) {
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var req = new XMLHttpRequest();
  req.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?lat='+lat+ '&lon='+ lon+ '&appid=2538e8122b2865837d34f3a23e22e3f1', false);
  req.send(null);
    callback(null, req.responseText);
}

owm.getForecastZip = function(zip, code, callback) {
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var req = new XMLHttpRequest();
  req.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?zip='+ zip +','+ code +'&appid=2538e8122b2865837d34f3a23e22e3f1', false);
  req.send(null);
    callback(null, req.responseText);
}
module.exports = owm;
