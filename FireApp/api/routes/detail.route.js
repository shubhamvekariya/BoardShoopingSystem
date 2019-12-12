const express = require('express');
const app = express();
const detailRoutes = express.Router();

// Require Detail model in our routes module
let Detail = require('../models/Detail');

detailRoutes.route('/').get(function (req, res) {
  Detail.find(function (err, detail){
  if(err){
    console.log(err);
  }
  else {
    res.json(detail);
  }
});
});

// Defined store route
detailRoutes.route('/add').post(function (req, res) {
  let detail = new Detail(req.body);
  detail.save()
    .then(detail => {
      res.status(200).json({'detail': 'detail in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});
module.exports = detailRoutes;