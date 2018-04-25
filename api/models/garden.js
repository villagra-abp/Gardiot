var connection = require('../config/connection');
var geo = require('geo-hash');

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
          var shortSentence = 'SELECT *, Garden.id as gardenId FROM Garden WHERE Garden.user = "' + user + '" ';
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
      sentence +='zip ="' + data.zip + '",';
    }
    if(data.longitude && data.latitude) {
      var geohash = geo.encode(data.latitude, data.longitude, 8);
      sentence +='geoHash ="' + geohash + '" ';
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

garden.updateGarden = function(data, callback) {
  if(connection) {
    var sentence =  'UPDATE Garden SET ';
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
      sentence +='zip ="' + data.zip + '",';
    }
    if(data.longitude && data.latitude) {
      var geohash = geo.encode(data.latitude, data.longitude, 8);
      sentence +='geoHash ="' + geohash + '" ';
    }
    sentence = sentence.slice(0, -1);
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
