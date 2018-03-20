var connection = require('../config/connection');

var treatmentPlant = {};

treatmentPlant.getTreatmentsByPlant = function(number, page, sort, plant, callback) {

  if(connection) {
    let minPeak = (page - 1) * number;
    let orderSentence = '';
    if (sort.toUpperCase() === 'DESC')
      orderSentence = 'DESC';
    connection.query('SELECT COUNT(*) OVER () AS number, T.*, frequency, initDate, finalDate, commonName FROM Treatment T, Plant, TreatmentPlant WHERE Plant.id = TreatmentPlant.plant AND T.id = TreatmentPlant.treatment AND Plant.id = ' + plant + ' ORDER BY T.name ' + orderSentence + ' LIMIT ' + minPeak + ',' + number, function (error, row){
      if (error)
        callback (error, null);
      else
        callback(null, row);
    });
  }
}

treatmentPlant.insertTreatmentPlant = function (data, callback) {
	if(connection) {
	    sql = 'INSERT INTO TreatmentPlant SET ';
	    for (var key in data)
      if (typeof data[key]!=='undefined')
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

treatmentPlant.updateTreatmentPlant = function(data, plant, treatment, callback) {
  if(connection) {
    var sql = 'UPDATE TreatmentPlant SET ';
    for (var key in data)
      if (typeof data[key]!== 'undefined')
        sql += key + ' = "' + data[key] + '",';
    sql = sql.slice(0, -1);
    sql += ' WHERE plant = ' + plant + ' AND treatment = ' + treatment;
    connection.query(sql, function(error, result) {
      if (error)
        callback(error, null);
      else{
        callback(null, result.affectedRows);
      }
    });
  }
}

treatmentPlant.deleteTreatmentPlant = function(plant, treatment, callback) {
  if(connection) {
    connection.query('DELETE FROM TreatmentPlant WHERE plant = ' + plant + ' AND treatment = ' + treatment, function(error, result) {
      if (error)
        callback(error, null);
      else
        callback(null, result.affectedRows);
    });
  }
}



module.exports = treatmentPlant;
