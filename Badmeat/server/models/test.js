const mongoose = require('mongoose');

var TestSchema = new mongoose.Schema({
  text: {
    type: String,
  },
});

var Test = mongoose.model('Test', TestSchema);

module.exports = { Test };
