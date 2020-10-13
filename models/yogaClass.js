const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const YogaClassSchema = new Schema({
  dateTime: {type: Date},
  title: { type: String},
  price: {type: Number},
  instructor: {type: String},
  description: {type: String},
  user: {type: Schema.Types.ObjectId, ref:'User'},
  yogaClassSize: {type: Number},
  students: [{type: Schema.Types.ObjectId, ref:'User'}]
});

module.exports = mongoose.model('Class', YogaClassSchema);