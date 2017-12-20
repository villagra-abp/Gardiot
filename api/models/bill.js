var connection = require('../config/connection');

var bill = {};

bill.getBill = function(callback) {
  if(connection) {
    connection.query('SELECT * FROM Bill' , function (error, rows){
      if(error) {
        throw error;
      }
      else {
        callback(null, rows);
      }
    });
  }
}


bill.getBillById = function(id, callback) {
	if (connection) {
		var sentence = 'SELECT * FROM Bill WHERE id = ' + id;
		connection.query(sentence, function(error, row) {
			if (error) {
				throw error;
			}
			else {
				callback(null, row);
			}
		});
	}
}

bill.insertBill = function(data, callback) {
  if(connection) {
    var sentence = 'INSERT INTO Bill(amount, paid, paidDay, emitedDay, user) values("'+data.amount+'", "'+data.paid+'", "'+data.paidDay+'", "'+data.emitedDay+'", "'+data.user+'")';
    connection.query(sentence, function(error, result, fields){
      if(error)
        throw error;
      else
        callback(null, result.affectedRows);
    });
  }
}

bill.updateBill = function(data, callback) {
  if(connection) {
    commaCounter=0;
    var sentence =  'UPDATE Bill SET ';
    if(data.amount){
      sentence += 'amount = "' + data.amount + '"' ;
      commaCounter++;
    }
    
    if(data.paid) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='paid ="' + data.paid + '"';
      commaCounter++;
    }
    if(data.paidDay) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='paidDay ="' + data.paidDay + '"';
      commaCounter++;
    }
    if(data.emitedDay) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='emitedDay ="' + data.emitedDay + '"';
      commaCounter++;
    }
    if(data.user) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='user ="' + data.user + '"';
      commaCounter++;
    }
    sentence += ' WHERE id = "' + data.id +'"';
    connection.query(sentence, function(error, result) {
			if (error){
				throw error;
      }
			else{
        if(result.affectedRows < 1){
          callback(null, {"mensaje":"No existe"});
        }else{
  				callback(null, {"mensaje":"Actualizado"});
        }
      }
		});
  }
}

bill.deleteBill = function(id, callback) {
  if(connection) {
    var sentence = 'DELETE FROM Bill WHERE id = "' + id + '"';
    connection.query(sentence, function(error, result) {
			if (error)
				throw error;
			else
				callback(null, result.affectedRows);
		});
  }
}


module.exports = bill;
