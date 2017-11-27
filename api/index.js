//Dependencies
var express = require('express');
var cors = require('cors');
//var mongoose = require('mongoose'); //Creating Models and Schemas. MONGODB
var bodyParser = require('body-parser'); //Parsing body data handled
var mariadb = require('mariasql'); //Load MariaDB
//var connection = require('express-mariaconnection');//Middleware for MariaDB
var helmet = require('helmet'); //Security
//var dbinfo = require('./models/connection');

//MongoDB
//mongoose.connect('mongodb:'); //Introducir direccion MongoDB
//mongoose.Promise = global.Promise;

//Express init and load modules
var app = express();
//app.use(connection(mariadb, dbinfo));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use(helmet());

//Routes
app.use('/api', require('./routes/jardinRoutes'));
app.use('/api', require('./routes/usuariosRoutes'));

//Start server
app.listen(3000, function () {
  console.log('API running on port 3000');
});
