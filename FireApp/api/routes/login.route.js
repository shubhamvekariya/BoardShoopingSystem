const express = require('express');
const app = express();
const adminRoutes = express.Router();

// Require Admin model in our routes module
let Admin = require('../models/Admin');

adminRoutes.route('/login/:id/').get(function (req, res) {
    let AdminId = req.params.id;
    Admin.findOne({"AdminID":AdminId}, function (err, admin){
        res.json(admin);
    });
  });
  // Defined get data(index or listing) route
adminRoutes.route('/').get(function (req, res) {
  Admin.find(function (err, admin){
  if(err){
    console.log(err);
  }
  else {
    res.json(admin);
  }
});
});

adminRoutes.route('/find/:id').get(function (req, res) {
let id = req.params.id;
Admin.findById(id, function (err, admin){
    res.json(admin);
});
});

adminRoutes.route('/delete/:id').get(function (req, res) {
Admin.findByIdAndRemove({_id: req.params.id}, function(err, admin){
    if(err) res.json(err);
    else res.json('Successfully removed');
});
});

adminRoutes.route('/edit/:id').post(function (req, res) {
Admin.findById(req.params.id, function(err, admin) {
if (!admin){res.status(400).send("unable to Load the database"+req.params.id);}

else {
    admin.AdminID = req.body.AdminId;
    admin.Password = req.body.Password;

    admin.save().then(admin => {
      res.json('Update complete');
  })
  .catch(err => {
        res.status(400).send("unable to update the database");
  });
}
});
});
module.exports = adminRoutes;