const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Boards
let Boards = new Schema({
  _id: {
    type: Number
  },
  BoardName: {
    type: String
  },
  Speed: {
    type: Number
  },
  Range: {
    type: Number
  },
  Warranty: {
    type: Number
  },
  Price: {
    type: Number
  },
  ShippingTime: {
    type: Number
  }
},{
    collection: 'boards'
});

module.exports = mongoose.model('boards', Boards);