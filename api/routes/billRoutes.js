var express = require('express');
var router = express.Router();

var billModel = require('../models/bill');

router.get('/bill', function (request, response) {
  billModel.getBill (function(error, data){
    response.status(200).json(data);
  });
});


router.get('/bill/:id', function(request, response) {
	var id = request.params.id;
	billModel.getBillById(id, function(error, data) {
		if (typeof data !== 'undefined' && data.length > 0) {
			response.status(200).json(data);
		}
		else {
			response.status(404).json({"Mensaje":"No existe"});
		}
	});
});

router.post('/bill', function(request, response) {
	var billData = {
		amount: request.body.amount,
		paid: request.body.paid,
    paidDay: request.body.paidDay,
    emitedDay: request.body.emitedDay,
    user: request.body.user,
	};
	console.log(request.body);
	billModel.insertBill(billData, function(error, data) {
		if (data) {
			response.status(200).json({"Mensaje":"Insertado"});
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.put('/bill', function(request, response) {
	var billData = {
		id: request.body.id,
    amount: request.body.amount,
		paid: request.body.paid,
    paidDay: request.body.paidDay,
    emitedDay: request.body.emitedDay,
    user: request.body.user,
	};
	console.log(billData);
	billModel.updateBill(billData, function(error, data) {
		if (data && data.mensaje) {
			response.status(200).json(data);
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

router.delete('/bill/:id', function(request, response) {
	var id = request.params.id;
	billModel.deleteBill(id, function(error, data) {
		if (data == 1) {
			response.status(200).json({"Mensaje":"Borrado"});
		}
		else if (data == 0) {
			response.status(404).json({"Mensaje":"No existe"});
		}
		else {
			response.status(500).json({"Mensaje":"Error"});
		}
	});
});

module.exports = router;
