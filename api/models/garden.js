var connection = require('../config/connection');

var garden = {};

garden.getGarden = function(callback) {
  if(connection) {
    connection.query('SELECT * FROM Garden' , function (error, rows){
      if(error) {
        throw error;
      }
      else {
        callback(null, rows);
      }
    });
  }
}


garden.getGardenById = function(id, callback) {
	if (connection) {
		var sentence = 'SELECT * FROM Garden WHERE id = ' + id;
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

garden.getGardenByUser = function(user, callback) {
  if (connection) {
    var sentence = 'SELECT *, Garden.id as gardenId, MyPlant.id as id FROM Garden RIGHT JOIN MyPlant ON MyPlant.garden=Garden.id ';
    sentence += 'RIGHT JOIN Plant ON Plant.id=MyPlant.plant ';

    sentence += 'WHERE Garden.user = "' + user + '" ';
    connection.query(sentence, function(error, row) {
      if (error) {
        throw error;
      }
      else {
        if(row.length==0){
          var shortSentence = 'SELECT * FROM Garden WHERE Garden.user = "' + user + '" ';
          connection.query(shortSentence, function(shortError, shortRow) {
            if (shortError) {
              throw shortError;
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
    var sentence = 'INSERT INTO Garden SET title = "'+data.title+'", user= "'+data.user+'",';
    if(data.width) {
      sentence +=' width =' + data.width + ',';
    }
    if(data.length) {
      sentence +=' lenght =' + data.length + ',';
    }
    if(data.soil) {
      sentence +=' soil =' + data.soil + ',';
    }
    if(data.longitude) {
      sentence +=' longitude =' + data.longitude + ',';
    }
    if(data.latitude) {
      sentence +='latitude =' + data.latitude + ',';
    }
    if(data.countryCode) {
      sentence +='countryCode ="' + data.countryCode + '",';
    }
    if(data.city) {
      sentence +='city ="' + data.city + '",';
    }
    if(data.zip) {
      sentence +='zip ="' + data.zip + '" ';
    }
    sentence = sentence.slice(0, -1);

    connection.query(sentence, function(error, result){
      if(error)
        throw error;
      else
        callback(null, result.insertId);
    });
  }
}

garden.isProprietary = function(user, id, callback) {
  if(connection){
    var sentence = 'select user from Garden where id =' + id;

    connection.query(sentence, function(error, row) {
      if (error) {
      }
      else {
        if(user.id == row[0].user){
          callback(null, true);
        }else{
          callback(null, false);
        }

      }
    });
  }
}

garden.updateGarden = function(data, callback) {
  if(connection) {
    commaCounter=0;
    var sentence =  'UPDATE Garden SET ';
    if(data.title){
      sentence += 'title = "' + data.title + '"' ;
      commaCounter++;
    }

    if(data.width) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='width ="' + data.width + '"';
      commaCounter++;
    }
    if(data.length) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='lenght ="' + data.length + '"';
      commaCounter++;
    }
    if(data.longitude) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='longitude ="' + data.longitude + '"';
      commaCounter++;
    }
    if(data.latitude) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='latitude ="' + data.latitude + '"';
      commaCounter++;
    }
    if(data.soil) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='soil ="' + data.soil + '"';
      commaCounter++;
    }
    if(data.user) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='user ="' + data.user + '"';
      commaCounter++;
    }
    if(data.countryCode) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='countryCode ="' + data.countryCode + '"';
      commaCounter++;
    }
    if(data.city) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='city ="' + data.city + '"';
      commaCounter++;
    }
    if(data.zip) {
      if(commaCounter>0)
        sentence +=', ';
      sentence +='zip ="' + data.zip + '"';
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

garden.deleteGarden = function(id, callback) {
  if(connection) {
    var sentence = 'DELETE FROM Garden WHERE id = "' + id + '"';
    connection.query(sentence, function(error, result) {
			if (error)
				throw error;
			else
				callback(null, result.affectedRows);
		});
  }
}


module.exports = garden;
