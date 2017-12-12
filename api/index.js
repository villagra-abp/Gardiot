//Dependencies
var express = require('express');
var cors = require('cors'); //CORS standard
var bodyParser = require('body-parser'); //Parsing body data handled
var helmet = require('helmet'); //Security
var morgan = require('morgan'); //POST Body console logger
var passport = require('passport'); //Authentication strategies
var jwt = require('jsonwebtoken'); //Session tokens
var _ = require('lodash'); //_ functionality


var config = require('./config/main');

//Express init and load modules
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use(passport.initialize());
require('./config/passport');

//Routes
app.use('/api', require('./routes/userRoutes'));
app.use('/api', require('./routes/categoryRoutes'));
app.use('/api', require('./routes/eventRoutes'));
app.use('/api', require('./routes/gardenRoutes'));
app.use('/api', require('./routes/myPlantRoutes'));
app.use('/api', require('./routes/plantRoutes'));
app.use('/api', require('./routes/productRoutes'));
app.use('/api', require('./routes/registryRoutes'));
app.use('/api', require('./routes/soilRoutes'));
app.use('/api', require('./routes/toolRoutes'));
app.use('/api', require('./routes/treatmentRoutes'));


//Start server
app.listen(config.port, function () {
  console.log('API running on port ' + config.port);
});
