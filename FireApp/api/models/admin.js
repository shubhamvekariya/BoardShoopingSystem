const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Admin
let Admin = new Schema({
  AdminId: {
    type: String
  },
  Password: {
    type: String
  }
},{
    collection: 'admin'
});

module.exports = mongoose.model('admin', Admin);