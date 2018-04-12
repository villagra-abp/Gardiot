var connection = require('../config/connection');

var myPlant = {};

myPlant.getMyPlantsByGarden = function(garden, user, callback) {
  if(connection) {
    connection.query('SELECT MyPlant.id, MyPlant.name, xCoordinate, yCoordinate, seed, number, plant, Plant.commonName, Soil.name AS soil FROM MyPlant, Soil, Garden, Plant WHERE MyPlant.plant = Plant.id AND Garden.id = MyPlant.garden AND MyPlant.garden = ' + garden + ' AND MyPlant.soil = Soil.id AND Garden.user = "' + user + '" ' , function (error, rows){
      if(error)
        callback (error, null);
      else
        callback(null, rows);
    });
  }
}


myPlant.getMyPlantById = function(garden, user, id, callback) {
	if (connection) {
		connection.query('SELECT MyPlant.name, xCoordinate, yCoordinate, seed, number, plant, Plant.commonName, Soil.name FROM MyPlant, Soil, Garden, Plant WHERE MyPlant.plant = Plant.id  AND Plant.id = ' + id + ' AND Garden.id = MyPlant.garden AND MyPlant.garden = ' + garden + ' AND MyPlant.soil = Soil.id AND Garden.user = "' + user + '" ', function(error, row) {
			if (error)
				callback (error, null);
			else
				callback(null, row);
		});
	}
}

myPlant.insertMyPlant = function(garden, data, callback) {
  if(connection) {
    sql = 'INSERT INTO MyPlant SET ';
    for (var key in data)
      if (typeof data[key]!== 'undefined')
        sql += key + ' = "' + data[key] + '",';
    sql = sql.slice(0, -1);
    sql += ', garden = ' + garden;
    connection.query(sql, function(error, result){
      if(error)
        callback(error, null);
      else
        callback(null, result.insertId);
    });
  }
}

myPlant.updateMyPlant = function(id, data, callback) {
  if(connection) {
    var sql = 'UPDATE MyPlant SET ';
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

myPlant.deleteMyPlant = function(id, callback) {
  if(connection) {
    connection.query('DELETE FROM MyPlant WHERE id = "' + id + '"', function(error, result) {
      if (error)
        callback(error, null);
      else
        callback(null, result.affectedRows);
    });
  }
}

myPlant.isOwner = function (user, garden, callback) {
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

myPlant.changePosition = function (id, x, y, callback) {
  if (connection) {
    connection.query('UPDATE MyPlant SET xCoordinate = ' + x + ', yCoordinate = ' + y + ' WHERE id = ' + id, function (error, result) {
      if (error)
        callback(error, null);
      else 
        callback(null, result.affectedRows);
    });
  }
}

module.exports = myPlant;
