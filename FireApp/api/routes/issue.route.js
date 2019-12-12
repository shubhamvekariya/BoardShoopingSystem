const express = require('express');
const app = express();
const issueRoutes = express.Router();

// Require Issue model in our routes module
let Issue = require('../models/issue');

issueRoutes.route('/').get(function (req, res) {
  Issue.find(function (err, issue){
  if(err){
    console.log(err);
  }
  else {
    res.json(issue);
  }
});
});

// Defined store route
issueRoutes.route('/add').post(function (req, res) {
  let issue = new Issue(req.body);
  issue.save()
    .then(issue => {
      res.status(200).json({'issue': 'issue in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});
module.exports = issueRoutes;