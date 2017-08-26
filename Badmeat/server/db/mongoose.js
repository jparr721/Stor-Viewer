var mongoose = require('mongoose');

// Set it up to use promises
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Badmeat');

module.exports = { mongoose };
