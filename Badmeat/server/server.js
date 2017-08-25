const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');

const { User } = require('./models/user');

const user_data = require('./routes/user_data');
const pantry_data = require('./routes/pantry_data');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

router.post('/', (req, res) => {
  res.send({ message: 'Api connections available...' });
});

app.use('/api', router);
app.use('/user', user_data);
app.use('/food', pantry_data);

app.listen(port, () => {
  console.log(`Started app on port: ${port}`);
});


module.exports = { app };
