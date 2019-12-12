const express = require('express');
const app = express();
const paymentRoutes = express.Router();

// Require Payment model in our routes module
let Payment = require('../models/Payment');

// Defined get data(index or listing) route
paymentRoutes.route('/').get(function (req, res) {
  Payment.find(function (err, payment){
  if(err){
    console.log(err);
  }
  else {
    res.json(payment);
  }
});
});

// Defined store route
paymentRoutes.route('/add').post(function (req, res) {
  let payment = new Payment(req.body);
  payment.save()
    .then(payment => {
      res.status(200).json({'payment': 'payment in added successfully','obj': payment});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});
module.exports = paymentRoutes;