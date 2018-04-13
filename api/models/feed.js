var connection = require('../config/connection');

var feed = {};

feed.getFeeds = function(number, page, sort, callback) {
  if(connection) {
    let minPeak = (page - 1) * number;
    let orderSentence = '';
    if (sort.toUpperCase() === 'DESC')
      orderSentence = 'DESC';
    connection.query('SELECT * FROM Feed ORDER BY dateInit ' + orderSentence + ' LIMIT ' + minPeak + ',' + number , function (error, rows){
      if(error)
        callback (error, null);
      else
        callback(null, rows);
    });
  }
}

feed.getUnseenFeedsForToday = function (user, callback) {
  if (connection) {
    let TodayDate = new Date();
    let year = TodayDate.getFullYear();
    let month = TodayDate.getMonth() + 1;
    let day = TodayDate.getDate();
    let rightDate = '' + year + '-' + month + '-' + day;
    connection.query('SELECT id, name, text FROM Feed, UserFeed WHERE UserFeed.feed = Feed.id AND UserFeed.viewed = 0 AND UserFeed.user = "' + user + '" AND  dateInit <= "' + rightDate + '"  AND  dateFinal >= "' + rightDate + '"   ORDER BY Feed.name', function (error, rows) {
      if(error)
        callback (error, null);
      else
        callback(null, rows);
    });
  }
}

feed.setFeedSeen = function (feed, user, callback) {
  if (connection) {
    connection.query('UPDATE UserFeed SET viewed = 1 WHERE user = "' + user + '" AND feed = ' + feed, function (error, result) {
        if (error)
        callback(error, null);
      else
        callback(null, result.affectedRows);
    })
  }
}


feed.getFeedsNumber = function (callback) {
  if (connection) {
    connection.query('SELECT COUNT(*) AS NUMFEEDS FROM Feed', function (error, number) {
      if (error) callback (error, null);
      else callback (null, number);
    });
  }
}

feed.getFeedById = function(id, callback) {
  if (connection) {
    connection.query('SELECT name, text, dateInit, dateFinal FROM Feed WHERE id = ' + id, function(error, row) {
      if (error)
        callback (error, null);
      else
        callback(null, row);
    });
  }
}

/*feed.getFeedSearch = function(name, callback) {
	if (connection) {
		var sentence = 'SELECT * from Feed where name like "%'+name+'%" order by name ASC';
		connection.query(sentence, function(error, row) {
			if (error) {
				throw error;
			}
			else {
				callback(null, row);
			}
		});
	}
}*/

feed.insertFeed = function(data, callback) {
  if(connection) {
    sql = 'INSERT INTO Feed SET ';
    for (var key in data)
      if (typeof data[key]!== 'undefined')
        sql += key + ' = "' + data[key] + '",';
    sql = sql.slice(0, -1);
    connection.query(sql, function(error, result){
      if(error)
        callback(error, null);
      else {
        connection.query('INSERT INTO UserFeed (user, feed) SELECT id, '+ result.insertId + ' FROM User', function (err, row) {
          if(err)
            callback(err, null);
          else
            callback(null, row.affectedRows);
        });
      }
    });
  }
}

feed.updateFeed = function(data, id, callback) {
  if(connection) {
    var sql = 'UPDATE Feed SET ';
    for (var key in data)
      if (typeof data[key]!== 'undefined')
        sql += key + ' = "' + data[key] + '",';
    sql = sql.slice(0, -1);
    sql += ' WHERE id = ' + id;
    connection.query(sql, function(error, result) {
      if (error)
        callback(error, null);
      else
        callback(null, result.affectedRows);
    });
  }
}



feed.deleteFeed = function(id, callback) {
  if(connection) {
    connection.query('DELETE FROM Feed WHERE id = ' + id, function(error, result) {
      if (error)
        callback(error, null);
      else
        callback(null, result.affectedRows);
    });
  }
}


module.exports = feed;
