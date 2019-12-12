const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Accessories
let Accessories = new Schema({
  _id: {
    type: Number
  },
  AccessoryName: {
    type: String
  },
  Description1: {
    type: String
  },
  Description2: {
    type: String
  },
  Description3: {
    type: String
  },
  Description4: {
    type: String
  },
  Description5: {
    type: String
  },
  Price: {
    type: Number
  },
  ShippingTime: {
    type: Number
  }
},{
    collection: 'accessories'
});

module.exports = mongoose.model('accessories', Accessories);