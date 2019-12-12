const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Issue
let Issue = new Schema({
    Email: {
    type: String
  },
  Subject: {
    type: String
  },
  Issue: {
    type: String
  },
  Fname: {
    type: String
  },
  Phone_Number: {
    type: Number
  },
  Order_No: {
    type: String
  }
},{
    collection: 'issue'
});

module.exports = mongoose.model('issue', Issue);