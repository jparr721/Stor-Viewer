const express = require('express');
const { ObjectID } = require('mongodb');
const router = express.Router();
const { User } = require('../models/user');

const app = express();

// Get user info for an ID
app.get('/:id', (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
User.findOne({
  _id: id,
  _creator: req.user._id
}).then((user) => {
  if (!user) {
    return res.status(404).send();
  }

  return res.send({ user });
}).catch((e) => {
    res.status(400).send(e);
  });
});

module.exports = router;
