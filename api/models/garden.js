var connection = require('../config/connection');

var garden = {};

garden.getGarden = function(number, page, callback) {
  if(connection) {
    let minPeak = (page - 1) * number;
    connection.query('SELECT id, title, name FROM Garden, User WHERE Garden.user = User.id AND Garden.public = 1 LIMIT ' + minPeak + ',' + number , function (error, rows){
      if(error)
        callback (error, null);
      else
        callback(null, rows);
    });
  }
}


garden.getGardenById = function(id, callback) {
	if (connection) {
		var sentence = 'SELECT *, Garden.id as gardenId, MyPlant.id as id FROM Garden RIGHT JOIN MyPlant ON MyPlant.garden=Garden.id ';
    sentence += 'RIGHT JOIN Plant ON Plant.id=MyPlant.plant ';
    sentence += 'WHERE Garden.id = "' + id + '" ';
		connection.query(sentence, function(error, row) {
			if (error)
				callback (error, null);
			else {
        if(row.length==0){
          var shortSentence = 'SELECT *, Garden.id as gardenId FROM Garden WHERE Garden.id = "' + id + '" ';
          connection.query(shortSentence, function(shortError, shortRow) {
            if (shortError) {
              callback(shortError, null);
            }
            else {
              callback(null, shortRow);
            }
          });
        }
        else
          callback(null, row);
      }
		});
	}
}

garden.getGardenByUser = function(user, callback) {
  if (connection) {
    var sentence = 'SELECT *, Garden.id as gardenId, MyPlant.id as id FROM Garden RIGHT JOIN MyPlant ON MyPlant.garden=Garden.id ';
    sentence += 'RIGHT JOIN Plant ON Plant.id=MyPlant.plant ';

    sentence += 'WHERE Garden.user = "' + user + '" ';
    connection.query(sentence, function(error, row) {
      if (error)
        callback (error, null);
      else {
        if(row.length==0){
          var shortSentence = 'SELECT *, Garden.id as gardenId FROM Garden WHERE Garden.user = "' + user + '" ';
          connection.query(shortSentence, function(shortError, shortRow) {
            if (shortError) {
              callback(shortError, null);
            }
            else {
              callback(null, shortRow);
            }
          });
        }
        else{
          callback(null, row);
        }
      }
    });
  }
}

garden.insertGarden = function(data, callback) {
  if(connection) {
    sql = 'INSERT INTO Garden SET ';
    for (var key in data)
      if (typeof data[key]!== 'undefined')
        sql += key + ' = "' + data[key] + '",';
    sql = sql.slice(0, -1);
    connection.query(sql, function(error, result){
      if(error)
          callback(error, null);
      else
        callback(null, result.insertId);
    });
  }
}

garden.isOwner = function (user, garden, callback) {
  if (connection) {
    connection.query('SELECT user FROM Garden WHERE id = ' + garden, function (error, result) {
      if (error)
        callback(error, null);
      else {
        if (result[0].user == user) callback (null, true);
        else callback (null, false);
      }
    });
  }
}

garden.updateGarden = function(id, data, callback) {
  if(connection) {
    var sql = 'UPDATE Garden SET ';
    for (var key in data)
      if (typeof data[key]!== 'undefined')
        sql += key + ' = "' + data[key] + '",';
    sql = sql.slice(0, -1);
    sql += ' WHERE id = "' + id +'"';
    connection.query(sql, function(error, result) {
      if (error)
        callback(error, null);
      else{
        callback(null, result.affectedRows);
      }
    });
  }
}

garden.deleteGarden = function(id, callback) {
  if(connection) {
    var sentence = 'DELETE FROM Garden WHERE id = "' + id + '"';
    connection.query(sentence, function(error, result) {
			if (error)
				callback(error, null);
			else
				callback(null, result.affectedRows);
		});
  }
}

garden.checkMyPlantsBounds = function (id, width, length, callback) {
  if (connection) {   
    var sqlAddition = '';
    if (typeof width !== 'undefined') {
      width = (width - 1) /2;
      sqlAddition += ' AND (xCoordinate > ' + width  + ' OR xCoordinate < ' + width*(-1) + ') ';
    }
    if (typeof length !== 'undefined') {
      length = (length - 1) /2;
      if (sqlAddition != '')
        sqlAddition +=  ' OR (yCoordinate > ' + length  + ' OR yCoordinate < ' + length*(-1) + ') ';
      else 
        sqlAddition +=  ' AND (yCoordinate > ' + length  + ' OR yCoordinate < ' + length*(-1) + ') ';
    }
    if (sqlAddition != '') {
      var sql = 'SELECT COUNT(*) AS number FROM MyPlant WHERE garden = ' + id + sqlAddition;
      connection.query(sql, function (error, rows) {
        if (error) 
          callback(error, null);
        else if (rows[0].number == 0)
          callback(null, true);
        else 
          callback (null, false);
      });
    }
    else
      callback(null, true);
  }
}


module.exports = garden;
