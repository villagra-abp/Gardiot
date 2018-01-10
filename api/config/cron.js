var CronJob = require('cron').CronJob;
var connection = require('../config/connection');
var jwt = require('jsonwebtoken');

var job = new CronJob({
  cronTime: '30 * * * * *',
  onTick: function() {
    if (connection) {
      connection.query('SELECT * FROM VerificationToken', function(error, rows) {
        if (error)
          console.log("CronJob: Unable to retrieve VerificationTokens");
        else if (typeof rows !== 'undefined' || rows != null)
          for (var i = 0; i < rows.lenght; i ++) {
            jwt.verify(rows[i].token, config.secret, function(err, decoded) {
              if (err && err.name == 'TokenExpiredError') {
                connection.query('DELETE FROM VerificationToken WHERE id = ' + rows[i].userId, function(error, rows) {
                  if (error) console.log("CronJob: Unable to delete expired VerificationToken assigned to " + rows[i].userId);
                });
              } 
              else if (err) console.log("CronJob Error: " + err.message);
              else {}           
            }
          }
      });
    }
  },
  start: false,
  timeZone: 'Spain/Madrid'
});
job.start();