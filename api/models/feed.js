var connection = require('../config/connection');

var feed = {};

feed.getFeeds = function(number, page, sort, callback) {
  if(connection) {
    let minPeak = (page - 1) * number;
    let orderSentence = '';
    if (sort.toUpperCase() === 'DESC')
      orderSentence = 'DESC';
    connection.query('SELECT * FROM Feed ORDER BY date ' + orderSentence + ' LIMIT ' + minPeak + ',' + number , function (error, rows){
      if(error) 
        callback (error, null);
      else 
        callback(null, rows);
    });
  }
}

feed.getUnseenFeedsForToday = function (callback) {

}

feed.setFeedSeen = function (callback) {
  
}


feed.getFeedsNumber = function (callback) {
  if (connection) {
    connection.query('SELECT COUNT(*) AS number FROM Feed', function (error, number) {
      if (error) callback (error, null);
      else callback (null, number);
    });
  }
}

feed.getFeedById = function(id, callback) {
  if (connection) {
    connection.query('SELECT name, text, date FROM Feed WHERE id = ' + id, function(error, row) {
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
      else
        callback(null, result.affectedRows);
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
