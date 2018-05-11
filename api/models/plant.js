var connection = require('../config/connection');
var validator = require('validator');

var plant = {};

plant.getPlants = function(number, page, orderBy, sort, callback) {
  if(connection) {
    let minPeak = (page - 1) * number;
    let orderSentence = '';
    let orderByParam = '';
    if (sort.toUpperCase() === 'DESC')
      orderSentence = 'DESC';
    if (orderBy.toUpperCase() === 'NAME')
      orderByParam = 'commonName ' + orderSentence;
    else if (orderBy.toUpperCase() === 'FAMILY')
      orderByParam = 'Family.id ' + orderSentence + ', commonName';
    connection.query('SELECT Plant.id, family, commonName, photo, name, _3DModel FROM Plant, Family WHERE Plant.family = Family.id ORDER BY ' + orderByParam + ' LIMIT ' + minPeak  + ',' + number , function (error, rows){
      if(error)
        callback(error, null);
      else
        callback(null, rows);
    });
  }
}

plant.getPlantsSowing = function(callback) {
  if (connection) {
    connection.query('SELECT id, commonName FROM Plant WHERE DAYOFYEAR(initDatePlant) <= DAYOFYEAR(NOW())  AND DAYOFYEAR(finDatePlant)>= DAYOFYEAR(NOW())', function (error, rows) {
      if (error)
        callback(error, null);
      else
        callback (null, rows);
    });
  }
}

plant.getPlantsNumber = function (callback) {
  if (connection) {
    connection.query('SELECT COUNT(*) AS NUMPLANTAS FROM Plant', function (error, number) {
      if (error) callback (error, null);
      else callback (null, number);
    });
  }
}

plant.getPlantById = function(id, callback) {
	if (connection) {
		connection.query('SELECT Plant.id, scientificName, commonName, Plant.description, photo, family, depth, distance, diseaseResist, initDatePlant, finDatePlant, initDateBloom, finDateBloom, initDateHarvest, finDateHarvest, leaveType, name FROM Plant, Family WHERE Plant.id = ' + id + ' AND Plant.family = Family.id', function(error, row) {
			if (error)
				callback(error, null);
			else
				callback(null, row);
		});
	}
}

plant.getPlantsByFamily = function(id, number, page, sort, callback) { //HAY QUE AFINAR MAS LOS CAMPOS A DEVOLVER
  if (connection) {
    let minPeak = (page - 1) * number;
    let maxPeak = page * number;
    let orderSentence = '';
    if (sort.toUpperCase() === 'DESC')
      orderSentence = 'DESC';
    connection.query('SELECT COUNT(*) OVER () AS number, Plant.id, family, commonName, photo, name FROM Plant, Family WHERE Plant.family = family.id AND family.id = ' + id + 'ORDER BY commonName ' + orderSentence + ' LIMIT ' + minPeak + ',' + maxPeak, function(error, row) {
      if (error)
        callback(error, null);
      else
        callback(null, row);
    });
  }
}

plant.insertPlant = function(data, callback) {
  if(connection) {
    sql = 'INSERT INTO Plant SET ';
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
plant.updatePlant = function(data, id, callback) {
  if(connection) {
    var sql = 'UPDATE Plant SET ';
    for (var key in data)
      if (typeof data[key]!== 'undefined')
        sql += key + ' = "' + data[key] + '",';
    sql = sql.slice(0, -1);
    sql += ' WHERE id= "' + id +'"';
    connection.query(sql, function(error, result) {
			if (error)
        callback(error, null);
      else{
        callback(null, result.affectedRows);
      }
		});
  }
}

plant.updateViews = function(id, callback) {
  if(connection){
    var sql = 'UPDATE Plant SET views = views +1 WHERE id= ' + id;
    connection.query(sql, function(error, result) {
      if (error){
        callback(error, null);
      }
      else{
        callback(null, result.affectedRows);
      }
    });
  }
}

plant.deletePlant = function(id, callback) {
  if(connection) {
    connection.query('DELETE FROM Plant WHERE id = "' + id + '"', function(error, result) {
			if (error)
				callback(error, null);
			else
				callback(null, result.affectedRows);
		});
  }
}




module.exports = plant;
