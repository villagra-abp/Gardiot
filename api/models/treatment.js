var connection = require('../config/connection');

var treatment = {};

treatment.getTreatments = function(number, page, sort, callback) {
  if(connection) {
    let minPeak = (page - 1) * number;
    let orderSentence = '';
    if (sort.toUpperCase() === 'DESC')
      orderSentence = 'DESC';
    connection.query('SELECT * FROM Treatment ORDER BY name ' + orderSentence + ' LIMIT ' + minPeak + ',' + number , function (error, rows){
      if(error) 
        callback (error, null);
      else 
        callback(null, rows);
    });
  }
}

treatment.getTreatmentsNumber = function (callback) {
  if (connection) {
    connection.query('SELECT COUNT(*) AS number FROM Treatment', function (error, number) {
      if (error) callback (error, null);
      else callback (null, number);
    });
  }
}

treatment.getTreatmentById = function(id, callback) {
  if (connection) {
    connection.query('SELECT name, description FROM Treatment WHERE id = ' + id, function(error, row) {
      if (error) 
        callback (error, null);   
      else 
        callback(null, row);    
    });
  }
}

treatment.insertTreatment = function(data, callback) {
if(connection) {
    sql = 'INSERT INTO Treatment SET ';
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



treatment.updateTreatment = function(data, id, callback) {
  if(connection) {
    var sql = 'UPDATE Treatment SET ';
    for (var key in data)
      if (typeof data[key]!== 'undefined')
        sql += key + ' = "' + data[key] + '",';
    sql = sql.slice(0, -1);
    sql += ' WHERE id = ' + id;
    connection.query(sql, function(error, result) {
      if (error)
        callback(error, null);
      else{
        callback(null, result.affectedRows);
      }
    });
  }
}

treatment.deleteTreatment = function(id, callback) {
  if(connection) {
    connection.query('DELETE FROM Treatment WHERE id = ' + id, function(error, result) {
      if (error)
        callback(error, null);
      else
        callback(null, result.affectedRows);
    });
  }
}


module.exports = treatment;
