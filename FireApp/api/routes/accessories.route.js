const express = require('express');
const app = express();
const accessoriesRoutes = express.Router();

// Require Accessories model in our routes module
let Accessories = require('../models/accessories');

// Defined get data(index or listing) route
accessoriesRoutes.route('/').get(function (req, res) {
    Accessories.find(function (err, accessories){
    if(err){
      console.log(err);
    }
    else {
      res.json(accessories);
    }
  });
});

accessoriesRoutes.route('/find/:id').get(function (req, res) {
  let id = req.params.id;
  Accessories.findById(id, function (err, accessories){
      res.json(accessories);
  });
});


// Defined store route
accessoriesRoutes.route('/add').post(function (req, res) {
  let accessories = new Accessories(req.body);
  accessories.save()
    .then(accessories => {
      res.status(200).json({'accessories': 'accessories in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

accessoriesRoutes.route('/delete/:id').get(function (req, res) {
  Accessories.findByIdAndRemove({_id: req.params.id}, function(err, accessories){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});

accessoriesRoutes.route('/edit/:id').post(function (req, res) {
  Accessories.findById(req.params.id, function(err, accessories) {
  if (!accessories){res.status(400).send("unable to Load the database"+req.params.id);}
  
  else {
      accessories.AccessoryName = req.body.AccessoryName;
      accessories.Description1 = req.body.Description1;
      accessories.Description2 = req.body.Description2;
      accessories.Description3 = req.body.Description3;
      accessories.Description4 = req.body.Description4;
      accessories.Description5 = req.body.Description5;
      accessories.Price = req.body.Price;
      accessories.ShippingTime = req.body.ShippingTime;

      accessories.save().then(accessories => {
        res.json('Update complete');
    })
    .catch(err => {
          res.status(400).send("unable to update the database");
    });
  }
});
});


module.exports = accessoriesRoutes;