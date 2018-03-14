var connection = require('../config/connection');

var task = {};

task.getMyTasksForToday = function (number, page, user, callback) {
	if (connection) {
		let minPeak = (page - 1) * number;
		let TodayDate = new Date();
		let year = TodayDate.getFullYear();
		let month = TodayDate.getMonth() + 1;
		let day = TodayDate.getDate();
		let rightDate = '' + year + '-' + month + '-' + day;
		connection.query('SELECT Treatment.id AS treatment, Treatment.name, Plant.commonName, MyPlant.id AS myplant, Plant.id AS plant, MyPlant.name, Garden.title FROM User, Garden, MyPlant, Plant, Task, TreatmentPlant, Treatment WHERE User.id = Garden.user AND Garden.id = MyPlant.garden AND MyPlant.id = Task.myPlant AND Task.treatmentPlant = TreatmentPlant.treatment AND Task.tPlant = TreatmentPlant.plant AND TreatmentPlant.treatment = Treatment.id AND TreatmentPlant.plant = Plant.id AND User.id = "' + user + '" AND Task.date = "' + rightDate + '" ORDER BY Plant.commonName LIMIT ' + minPeak + ',' + number, function(error, row) {
			if (error)
				callback(error, null);
			else
				callback(null, row);
		});
	}
}

task.getMyTasksByDate = function (number, page, user, date, callback) {
	if (connection) {
		connection.query('SELECT Treatment.id AS treatment, Treatment.name, Plant.commonName, MyPlant.id AS myplant, Plant.id AS plant, MyPlant.name, Garden.title FROM User, Garden, MyPlant, Plant, Task, TreatmentPlant, Treatment WHERE User.id = Garden.user AND Garden.id = MyPlant.garden AND MyPlant.id = Task.myPlant AND Task.treatmentPlant = TreatmentPlant.treatment AND Task.tPlant = TreatmentPlant.plant AND TreatmentPlant.treatment = Treatment.id AND TreatmentPlant.plant = Plant.id AND User.id = "' + user + '" AND Task.date = "' + date + '" ORDER BY Plant.commonName LIMIT ' + minPeak + ',' + number, function(error, row) {
			if (error)
				callback(error, null);
			else
				callback(null, row);
		});
	}
}

task.getMyTasksByMonth = function (user, date, callback) {
	if (connection) {
		let dateM = new Date(date);
		let month = dateM.getMonth() + 1;
		let year = dateM.getFullYear();
		connection.query('SELECT Treatment.name, Plant.commonName, MyPlant.name, Garden.title, Task.date FROM User, Garden, MyPlant, Plant, Task, TreatmentPlant, Treatment WHERE User.id = Garden.user AND Garden.id = MyPlant.garden AND MyPlant.id = Task.myPlant AND Task.treatmentPlant = TreatmentPlant.treatment AND Task.tPlant = TreatmentPlant.plant AND TreatmentPlant.treatment = Treatment.id AND TreatmentPlant.plant = Plant.id AND User.id = "' + user + '" AND MONTH(Task.date) = ' + month + ' AND YEAR(Task.date) = ' + year + ' ORDER BY Task.date ', function(error, row) {
			if (error)
				callback(error, null);
			else
				callback(null, row);
		});
	}
}

task.getTasksByMyPlant = function (number, page, user, myplant, callback) {
	if (connection) {
		let minPeak = (page - 1) * number;
		connection.query('SELECT Treatment.id AS treatment, Treatment.name, Plant.commonName, MyPlant.name, Plant.id AS plant, Garden.title, Task.date FROM Garden, MyPlant, Plant, Task, TreatmentPlant, Treatment WHERE User.id = Garden.user AND Garden.id = MyPlant.garden AND MyPlant.id = Task.myPlant AND Task.treatmentPlant = TreatmentPlant.treatment AND Task.tPlant = TreatmentPlant.plant AND TreatmentPlant.treatment = Treatment.id AND TreatmentPlant.plant = Plant.id AND  User.id = "' + user + '" AND MyPlant.id = ' + myplant + ' ORDER BY Task.date LIMIT ' + minPeak + ',' + number, function(error, row) {
			if (error)
				callback(error, null);
			else
				callback(null, row);
		});
	}	
} 

task.insertTasks = function (myPlant, plant, callback) {
	if (connection) {
		connection.query('SELECT treatment, frequency, initDate, finalDate FROM TreatmentPlant WHERE plant = ' + plant , function(error, row) {
			if (error)
				callback (error, null);
			else {	
				sql = 'INSERT INTO Task (tPlant, treatmentPlant, myPlant, mPlant, date) VALUES ';	
				for (var object in row) {
					let initDate, finalDate, sqlBase;
					for (var detail in row[object]) {
						if (detail == 'treatment') 
							sqlBase = '(' + plant + ',' + row[object][detail] + ',' + myPlant + ',' + plant;
						else if (detail == 'frequency' && row[object][detail] != null) {
							todayDate = new Date();
							for (let i = 0; i < 100; i++) {
								todayDate.setDate(todayDate.getDate() + row[object][detail])
								let month = todayDate.getMonth() + 1;
								sql += sqlBase + ',"' + todayDate.getFullYear() + '-' + month + '-' + todayDate.getDate() + '"),';							
							}
						}
						else if (detail == 'initDate' &&  row[object][detail] != null) 
							initDate = new Date(row[object][detail]);
						else if (detail == 'finalDate' &&  row[object][detail] != null) 
							finalDate = new Date(row[object][detail]);
						if (typeof initDate !== 'undefined' && typeof finalDate !== 'undefined') 
							for (initDate; initDate <= finalDate; initDate.setDate(initDate.getDate() + 1)) {
								let month = initDate.getMonth() + 1;
								sql += sqlBase + ',"' + initDate.getFullYear() + '-' + month + '-' + initDate.getDate() + '"),';																			
							}
					}		
				}
				sql = sql.slice(0, -1);
				connection.query(sql, function(error, result) {
					if (error)
						callback(error, null);
					else
						callback(null, result.affectedRows);
				});
			}
		});
	}
}

task.setTaskDone = function (myPlant, plant, treatment, date, callback) { //Un usuario puede marcar como hecha la de otro. Revisar
	if (connection) {
		connection.query('UPDATE Task SET done = 1, dateDone = "' + date + '" WHERE tPlant =' + plant + ', treatmentPlant =' + treatment + ', myPlant =' + myPlant + ', mPlant =' + plant, function(error, row) {
			if (error)
				callback(error, null);
			else
				callback(null, result.affectedRows);
		});
	}
}

task.deleteTasksByMyPlant = function (myPlant, callback) { //Se borran las las proximas tareas o todas. Cuidado con ON delete cascade de MyPlant
	if (connection) {
		connection.query('DELETE FROM Task WHERE myPlant = ' + myPlant, function (error, row) {
	    	if (error)
        		callback(error, null);
        	else
        		callback(null, result.affectedRows);
		});
	}
}

module.exports = task;