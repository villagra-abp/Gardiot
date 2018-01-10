var CronJob = require('cron').CronJob;
var connection = require('../config/connection');
var jwt = require('jsonwebtoken');

var verificationTokenJob = new CronJob({
  cronTime: '30 * * * * *',
  onTick: function() {
    if (connection) {
      connection.query('SELECT * FROM VerificationToken', function(error, rows) {
        if (error)
          console.log("CronJob: Unable to retrieve VerificationTokens");
        else if (typeof rows !== 'undefined' || rows != null) {
          for (var i = 0; i < rows.lenght; i ++) {
            jwt.verify(rows[i].token, config.secret, function(err, decoded) {
              if (err && err.name == 'TokenExpiredError') {
                connection.query('DELETE FROM VerificationToken WHERE id = ' + rows[i].userId, function(error, rows) {
                  if (error) console.log("CronJob: Unable to delete expired VerificationToken assigned to " + rows[i].userId);
                });
              } 
              else if (err) console.log("CronJob-Verification Error: " + err.message);
              else {}           
            });
          }
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
        else if (typeof rows !== 'undefined' || rows != null) {
          for (var i = 0; i < rows.lenght; i ++) {
            jwt.verify(rows[i], config.secret, function(err, decoded) {
              if (err && err.name == 'TokenExpiredError') {
                connection.query('DELETE FROM VerificationToken WHERE token = ' + rows[i], function(error, rows) {
                  if (error) console.log("CronJob: Unable to delete expired InactiveToken " + rows[i]);
                });
              } 
              else if (err) console.log("CronJob-Inactive Error: " + err.message);
              else {}           
            });
          }
        }         
      });
    }
  },
  start: false,
  timeZone: 'Europe/Madrid'
});

inactiveTokenJob.start();
verificationTokenJob.start();