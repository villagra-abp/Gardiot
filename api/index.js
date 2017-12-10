//Dependencies
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser'); //Parsing body data handled
var mariadb = require('mariasql'); //Load MariaDB
var helmet = require('helmet'); //Security
var morgan = require('morgan'); //Console logger
var bcrypt = require('bcryptjs'); //Hash para las password


//Express init and load modules
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

//Routes
app.use('/api', require('./routes/jardinRoutes'));
app.use('/api', require('./routes/userRoutes'));
app.use('/api', require('./routes/toolRoutes'));
app.use('/api', require('./routes/productRoutes'));
app.use('/api', require('./routes/treatmentRoutes'));
app.use('/api', require('./routes/categoryRoutes'));
app.use('/api', require('./routes/plantRoutes'));
app.use('/api', require('./routes/soilRoutes'));
app.use('/api', require('./routes/gardenRoutes'));
app.use('/api', require('./routes/myPlantRoutes'));
app.use('/api', require('./routes/eventRoutes'));

//Start server
app.listen(3000, function () {
  console.log('API running on port 3000');
});
