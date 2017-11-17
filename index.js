//Dependencies
var express = require('express');
var mongoose = require('mongoose'); //Creating Models and Schemas. MONGODB
var bodyParser = require('body-parser'); //Parsing data handled
var mariadb = require('mariasql'); //Load MariaDB
var connection = require('express-mariaconnection');//Middleware for MariaDB
var helmet = require('helmet'); //Security

//MongoDB
mongoose.connect('mongodb:'); //Introducir direccion MongoDB
mongoose.Promise = global.Promise;

//MariaDB
var dbinfo = { //Rellenar con lo que toque
	host: '',
	user: 'root',
	password: '',
	charset: 'utf8',
	db: ''
}

//Express init and load modules
var app = express();
app.use(connection(mariadb, dbinfo));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(helmet());

//Routes
app.use('/api', require('./routes/api'));

//Start server
app.listen(3000, function () {
  console.log('API running on port 3000');
});
