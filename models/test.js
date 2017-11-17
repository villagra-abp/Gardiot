//Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema
var testSchema = new Schema({
	name:{
		type: String,
		required: [true, 'Name field required']
	},
	id:{
		type : Number,
	}
});

//Model
var Test = mongoose.model('test', testSchema);
module.exports = Test;
