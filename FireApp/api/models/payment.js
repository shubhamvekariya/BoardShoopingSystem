const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Detail
let Payment = new Schema({
  Fname: {
    type: String
  },
  Email: {
    type: String
  },
  NameOnCard
  : {
    type: String
  },
  EDate: {
    type: String
  },
  Board_id:{
      type:Number
  },
  NoOfItem:{
    type:Number
}
},{
    collection: 'payment'
});

module.exports = mongoose.model('payment', Payment);