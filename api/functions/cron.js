var CronJob = require('cron').CronJob;
var connection = require('../config/connection');
var jwt = require('jsonwebtoken');
var config = require('../config/main');
var dateFormat = require('../functions/dateFormatter');

var plantModel = require('../models/plant');
var feedModel = require('../models/feed');

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

var nextMonthTasks = new CronJob({
  cronTime: '00 00 00 22 * *',
  onTick: function() {
    if (connection) {
      connection.query('SELECT tPlant, myPlant, treatmentPlant, MAX(date) AS date, frequency FROM Task, TreatmentPlant WHERE TreatmentPlant.treatment = Task.treatmentPlant AND frequency IS NOT NULL AND MONTH(date) = MONTH(NOW()) AND YEAR(date) = YEAR(NOW()) GROUP BY tPlant, myPlant, treatmentPlant', function (error, rows) {
        if (error)
          console.log("CronJob: Failed to retrieve tasks. Error: " + error.message);
        else {
          var sql = 'INSERT INTO Task (tPlant, treatmentPlant, myPlant, mPlant, date) VALUES ';
          var sqlBase = '';
          var now = new Date();
          for (var i = 0; typeof rows[i]!== 'undefined'; i++) {
            sqlBase = '(' + rows[i].tPlant + ',' + rows[i].treatmentPlant + ',' + rows[i].myPlant + ',' + rows[i].tPlant;
            var next = new Date(rows[i].date);
            next.setDate(next.getDate() + rows[i].frequency);
            while (now.getMonth() + 1 >= next.getMonth()) {
              sql += sqlBase + ',' + dateFormat(next) + '),';
              next.setDate(next.getDate() + rows[i].frequency);
            }
          }
          if (sqlBase != '') {
            sql = sql.slice(0, -1);
            connection.query(sql, function (err, result) {
              if (err)
                console.log("CronJob: Failed inserting next month tasks. Error: " + err.message);
              
            });
          }
        }    
      });
    }
  },
  start: false,
  timeZone: 'Europe/Madrid'
});

var autoWeeklyFeed = new CronJob({
  cronTime: '00 00 08 * * 1',
  onTick: function() {
    plantModel.getPlantsSowing(function(error, data) {
      if (error)
        console.log("CronJob: Failed to retrieve plants sowing. Error: "+ error.message);
      else if (typeof data !== 'undefined' && Object.keys(data).length > 0){
        var today = new Date();
        var month = today.getMonth() + 1;
        var endWeek = new Date();
        endWeek.setDate(endWeek.getDate() + 6);
        var monthFinal = endWeek.getMonth() + 1;
        var feedData = {
          name: 'Plantas para sembrar del ' + today.getDate() + '/' + month + ' al ' + endWeek.getDate() + '/' + monthFinal,
          text: 'Hola Gardioters, esta semana es la ideal para plantar ',
          dateInit: dateFormat(today),
          dateFinal: dateFormat(endWeek)
        };
        for (var plant in data) 
          feedData.text += data[plant].commonName + ', ';
        feedData.text = feedData.text.slice(0, -2);
        feedModel.insertFeed(feedData, function(error, data) {
          if (error)
            console.log("CronJob: Failed to insert weekly feed. Error: " + error.message);
        });
      }
    });
  },
  start: false,
  timeZone: 'Europe/Madrid',
  runOnInit: true
});

forgetPasswordTokenJob.start();
inactiveTokenJob.start();
verificationTokenJob.start();
nextMonthTasks.start();
autoWeeklyFeed.start();