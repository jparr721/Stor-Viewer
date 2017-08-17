const express = require('express');
const bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { User } = require('./models/user');
var { Test } = require('./models/test');
const user_data = require('./routes/user_data');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/user', user_data);

app.listen(port, () => {
  console.log(`Started app on port: ${port}`);
});


module.exports = { app };
