const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Detail
let Detail = new Schema({
  Fname: {
    type: String
  },
  Lname: {
    type: String
  },
  Email: {
    type: String
  },
  Phone_Number
  : {
    type: Number
  },
  Address: {
    type: String
  }
},{
    collection: 'detail'
});

module.exports = mongoose.model('detail', Detail);