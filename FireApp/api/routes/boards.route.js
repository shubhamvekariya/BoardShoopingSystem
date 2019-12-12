const express = require('express');
const app = express();
const boardsRoutes = express.Router();

// Require Boards model in our routes module
let Boards = require('../models/boards');

// Defined get data(index or listing) route
boardsRoutes.route('/').get(function (req, res) {
    Boards.find(function (err, boards){
    if(err){
      console.log(err);
    }
    else {
      res.json(boards);
    }
  });
});

boardsRoutes.route('/find/:id').get(function (req, res) {
  let id = req.params.id;
  Boards.findById(id, function (err, boards){
      res.json(boards);
  });
});

// Defined store route
boardsRoutes.route('/add').post(function (req, res) {
  let boards = new Boards(req.body);
  boards.save()
    .then(boards => {
      res.status(200).json({'boards': 'boards in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

boardsRoutes.route('/delete/:id').get(function (req, res) {
  Boards.findByIdAndRemove({_id: req.params.id}, function(err, boards){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});

boardsRoutes.route('/edit/:id').post(function (req, res) {
  Boards.findById(req.params.id, function(err, boards) {
  if (!boards){res.status(400).send("unable to Load the database"+req.params.id);}
  
  else {
      boards.BoardName = req.body.BoardName;
      boards.Speed = req.body.Speed;
      boards.Range = req.body.Range;
      boards.Warranty = req.body.Warranty;
      boards.Price = req.body.Price;
      boards.ShippingTime = req.body.ShippingTime;

      boards.save().then(boards => {
        res.json('Update complete');
    })
    .catch(err => {
          res.status(400).send("unable to update the database");
    });
  }
});
});


module.exports = boardsRoutes;