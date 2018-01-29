var CronJob = require('cron').CronJob;
var connection = require('../config/connection');
var jwt = require('jsonwebtoken');
var config = require('../config/main');

var verificationTokenJob = new CronJob({
  cronTime: '30 * * * * *',
  onTick: function() {
    if (connection) {
      connection.query('SELECT * FROM VerificationToken', function(error, rows) {
        if (error)
          console.log("CronJob: Unable to retrieve VerificationTokens");
        for (var i = 0; typeof rows[i] !== 'undefined'; i ++) {
          if (typeof rows[i] === 'undefined') break;
          jwt.verify(rows[i].token, config.secret, function(err, decoded) {
            if (err && err.name == 'TokenExpiredError') {
              connection.query('DELETE FROM VerificationToken WHERE userId = "' + rows[i].userId + '"', function(error, rows) {
                if (error) console.log("CronJob: Unable to delete expired VerificationToken assigned to " + rows[i].userId);
              });
            } 
            else if (err) console.log("CronJob-Verification Error: " + err.message);
            else {}           
          });
        }            
      });
    }
  },
  start: false,
  timeZone: 'Europe/Madrid'
});

var inactiveTokenJob = new CronJob({
  cronTime: '30 * * * * *',
  onTick: function() {
    if (connection) {
      connection.query('SELECT token FROM InactiveToken', function(error, rows) {
        if (error)
          console.log("CronJob: Unable to retrieve InactiveTokens");
        for (var i = 0; typeof rows[i] !== 'undefined'; i ++) {
          if (typeof rows[i] === 'undefined') break;
          jwt.verify(rows[i].token, config.secret, function(err, decoded) {
            if (err && err.name == 'TokenExpiredError') {
              connection.query('DELETE FROM InactiveToken WHERE token = "' + rows[i].token + '"', function(error, rows) {
                if (error) console.log("CronJob: Unable to delete expired InactiveToken " + rows[i].token);
              });
            } 
            else if (err) console.log("CronJob-Inactive Error: " + err.message);
            else {}           
          });
        }                 
      });
    }
  },
  start: false,
  timeZone: 'Europe/Madrid'
});

var forgetPasswordTokenJob = new CronJob({
  cronTime: '30 * * * * *',
  onTick: function() {
    if (connection) {
      connection.query('SELECT * FROM ForgetPasswordToken', function(error, rows) {
        if (error)
          console.log("CronJob: Unable to retrieve ForgetPasswordTokens");
        for (var i = 0; typeof rows[i] !== 'undefined'; i ++) {
          if (typeof rows[i] === 'undefined') break;
          jwt.verify(rows[i].token, config.secret, function(err, decoded) {
            if (err && err.name == 'TokenExpiredError') {
              connection.query('DELETE FROM ForgetPasswordToken WHERE userId = "' + rows[i].userId + '"', function(error, rows) {
                if (error) console.log("CronJob: Unable to delete expired ForgetPasswordToken assigned to " + rows[i].userId);
              });
            } 
            else if (err) console.log("CronJob-ResetPassword Error: " + err.message);
            else {}           
          });
        }            
      });
    }
  },
  start: false,
  timeZone: 'Europe/Madrid'
});

forgetPasswordTokenJob.start();
inactiveTokenJob.start();
verificationTokenJob.start();