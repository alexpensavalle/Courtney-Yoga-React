var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  position: {
    type: String,
    default: 'student'
  },
}, 

{timestamps: true}

);

module.exports = mongoose.model('User', userSchema);