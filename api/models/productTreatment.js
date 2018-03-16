var connection = require('../config/connection');

var productTreatment = {};

productTreatment.getProductsByTreatmentAndPlant = function(number, page, sort, treatment, plant, callback) {
	if (connection) {
		let minPeak = (page - 1) * number;
	    let orderSentence = '';
	    if (sort.toUpperCase() === 'DESC')
	      orderSentence = 'DESC';
		connection.query('SELECT COUNT(*) OVER () AS NUMPRODUCTS, P.* FROM Product P, ProductTreatment, TreatmentPlant WHERE ProductTreatment.treatment = TreatmentPlant.treatment AND ProductTreatment.product = Product.id AND ProductTreatment.plant = TreatmentPlant.plant AND ProductTreatment.treatment = ' + treatment + ' AND ProductTreatment.plant = ' + plant + ' ORDER BY Product.name ' + orderSentence + ' LIMIT ' + minPeak + ',' + number, function(error, row) {
			if (error)
				callback (error, null);
			else
				callback(null, row);
		});
	}
}

productTreatment.insertProductTreatment = function (data, callback) {
	if(connection) {
	    sql = 'INSERT INTO ProductTreatment SET ';
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

productTreatment.deleteProductTreatment = function(plant, treatment, product, callback) {
  if(connection) {
    connection.query('DELETE FROM ProductTreatment WHERE plant = ' + plant + ' AND treatment = ' + treatment + ' AND product = ' + product, function(error, result) {
      if (error)
        callback(error, null);
      else
        callback(null, result.affectedRows);
    });
  }
}

module.exports = productTreatment;
