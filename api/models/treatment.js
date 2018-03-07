var connection = require('../config/connection');

var treatment = {};

treatment.getTreatments = function(number, page, sort, callback) {
  if(connection) {
    let minPeak = (page - 1) * number;
    let orderSentence = '';
    if (sort.toUpperCase() === 'DESC')
      orderSentence = 'DESC';
    connection.query('SELECT T.*, Plant.commonName  FROM Treatment T, Plant WHERE Plant.id = Treatment.plant ORDER BY T.name ' + orderSentence + ' LIMIT ' + minPeak + ',' + number , function (error, rows){
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

treatment.getTreatmentsByPlant = function(number, page, sort, plant, callback) {
  if(connection) {
    let minPeak = (page - 1) * number;
    let orderSentence = '';
    if (sort.toUpperCase() === 'DESC')
      orderSentence = 'DESC';
    connection.query('SELECT COUNT(*) OVER () AS number, T.*, Plant.commonName FROM Treatment T, Plant WHERE Plant.id = Treatment.plant AND Plant.id = ' + plant + ' ORDER BY T.name ' + orderSentence + ' LIMIT ' + minPeak + ',' + number, function (error, rows){
      if (error) 
        callback (error, null);   
      else 
        callback(null, row);  
    });
  }
}

treatment.getTreatmentsByProduct = function(number, page, sort, id, callback) {
  if (connection) {
    let minPeak = (page - 1) * number;
      let orderSentence = '';
      if (sort.toUpperCase() === 'DESC')
        orderSentence = 'DESC';
    connection.query('SELECT COUNT(*) OVER () AS number, T.* FROM Treatment T, TreatmentProduct, Product WHERE TreatmentProduct.treatment = Treatment.id AND TreatmentProduct.product = Product.id AND Product.id = ' + id + ' ORDER BY Treatment.name ' + orderSentence + ' LIMIT ' + minPeak + ',' + number, function(error, row) {
      if (error) 
        callback (error, null);   
      else 
        callback(null, row);    
    });
  }
}

/*treatment.getTreatmentsByGarden = function(garden, callback) {
  if(connection) {
    var sentence = 'SELECT Treatment.id, Treatment.name, Treatment.description FROM Garden';
    sentence += ' INNER JOIN MyPlant on MyPlant.garden=Garden.id INNER JOIN Plant';
    sentence += ' ON Plant.id=MyPlant.plant INNER JOIN TreatmentPlant ON TreatmentPlant.plant=Plant.id';
    sentence += ' INNER JOIN Treatment ON Treatment.id=TreatmentPlant.plant where Garden.id=' + garden;
    connection.query(sentence , function (error, rows){
      if(error) {
        throw error;
      }
      else {
        callback(null, rows);
      }
    });
  }
}*/


treatment.getTreatmentById = function(id, callback) {
  if (connection) {
    connection.query('SELECT T.*, commonName FROM Treatment T, Plant WHERE T.id = ' + id, function(error, row) {
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
