var connection = require('../config/connection');

var task = {};

task.getMyTasksForToday = function (user, callback) {
	if (connection) {
		let TodayDate = new Date();
		let year = TodayDate.getFullYear();
		let month = TodayDate.getMonth() + 1;
		let day = TodayDate.getDate();
		let rightDate = '' + year + '-' + month + '-' + day;
		connection.query('SELECT Treatment.id AS treatment, Treatment.name, Plant.commonName, MyPlant.id AS plant, MyPlant.name, Garden.title FROM User, Garden, MyPlant, Plant, Task, TreatmentPlant, Treatment WHERE User.id = Garden.user AND Garden.id = MyPlant.garden AND MyPlant.id = Task.myPlant AND Task.treatmentPlant = TreatmentPlant.treatment AND Task.tPlant = TreatmentPlant.plant AND TreatmentPlant.treatment = Treatment.id AND TreatmentPlant.plant = Plant.id AND User.id = "' + user + '" AND Task.date = "' + rightDate + '"', function(error, row) {
			if (error)
				callback(error, null);
			else
				callback(null, row);
		});
	}
}

task.getMyTasksByDate = function (user, date, callback) {
	if (connection) {
		connection.query('SELECT Treatment.id AS treatment, Treatment.name, Plant.commonName, MyPlant.id AS plant, MyPlant.name, Garden.title FROM User, Garden, MyPlant, Plant, Task, TreatmentPlant, Treatment WHERE User.id = Garden.user AND Garden.id = MyPlant.garden AND MyPlant.id = Task.myPlant AND Task.treatmentPlant = TreatmentPlant.treatment AND Task.tPlant = TreatmentPlant.plant AND TreatmentPlant.treatment = Treatment.id AND TreatmentPlant.plant = Plant.id AND User.id = "' + user + '" AND Task.date = "' + date + '"', function(error, row) {
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
		connection.query('SELECT Treatment.name, Plant.commonName, MyPlant.name, Garden.title, Task.date FROM User, Garden, MyPlant, Plant, Task, TreatmentPlant, Treatment WHERE User.id = Garden.user AND Garden.id = MyPlant.garden AND MyPlant.id = Task.myPlant AND Task.treatmentPlant = TreatmentPlant.treatment AND Task.tPlant = TreatmentPlant.plant AND TreatmentPlant.treatment = Treatment.id AND TreatmentPlant.plant = Plant.id AND User.id = "' + user + '" AND MONTH(Task.date) = ' + month + ' AND YEAR(Task.date) = ' + year, function(error, row) {
			if (error)
				callback(error, null);
			else
				callback(null, row);
		});
	}
}

//task.getTaskByPlantAndTreatment Dame mis tareas para esta planta mia



module.exports = plant;