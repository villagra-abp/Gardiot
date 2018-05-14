//Dependencies
var express = require('express');
var bodyParser = require('body-parser'); //Parsing body data handled
var helmet = require('helmet'); //Security
var morgan = require('morgan'); //POST Body console logger
var passport = require('passport'); //Authentication strategies
var jwt = require('jsonwebtoken'); //Session tokens
var cors = require('cors'); //CORS standard
var multer = require('multer');
var config = require('./config/main');

//Express init and load modules
var app = express();
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(helmet());
if (process.env.NODE_ENV === "production")
	app.use(morgan('tiny', {
		skip: function (request, response) {return response.statusCode < 400}
	}));	
else
	app.use(morgan('dev'));


app.use(passport.initialize());
require('./config/passport');

require('./functions/cron'); //Purga tokens

//Routes
app.use('/api', require('./routes/userRoutes'));
app.use('/api', require('./routes/authRoutes'));
app.use('/api', require('./routes/owmRoutes'));
app.use('/api', require('./routes/geonamesRoutes'));
app.use('/api', require('./routes/verificationTokenRoutes'));
app.use('/api', require('./routes/forgetPasswordRoutes'));
app.use('/api', require('./routes/finderRoutes'));
app.use('/api', require('./routes/gardenRoutes'));
app.use('/api', require('./routes/uploadRoutes'));
app.use('/api', require('./routes/myPlantRoutes'));
//app.use('/api', require('./routes/soilRoutes'));
app.use('/api', require('./routes/productRoutes'));
app.use('/api', require('./routes/feedRoutes'));
app.use('/api', require('./routes/treatmentRoutes'));
app.use('/api', require('./routes/plantRoutes'));
app.use('/api', require('./routes/familyRoutes'));
app.use('/api', require('./routes/taskRoutes'));
app.use('/api', require('./routes/treatmentPlantRoutes'));
app.use('/api', require('./routes/productTreatmentRoutes'));

//Start server
app.listen(config.port, function () {
  console.log('API running on port ' + config.port);
}).on('error', function(err) {
	console.log('Error handled: ' + err);
});

process.on('uncaughtException', function(err) {
	console.log('Except handled: ' + err);
});
