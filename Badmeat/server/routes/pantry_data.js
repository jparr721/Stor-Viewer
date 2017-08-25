const express = require('express');
const router = express.Router();
const { ObjectID } = require('mongodb');
const { Food } = require('../models/pantryItem');

const app = express();

// Add new item
router.post('/new-item', (req, res) => {
  var newFood = new Food({
    name: req.body.name,
  });
  newFood.save().then((food) => {
    res.send(food);
  }, (e) => {
    res.status(400).send(e);
  });
});

router.get('/', (req, res) => {
  Food.find().then((foods) => {
    res.send({ foods });
  }, (e) => {
    res.status(400).send(e);
  });
});

router.get('/:id', (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Food.findOne({
    _id: id
  }).then((food) => {
    if (!food) {
      return res.status(404).send();
    }

    res.status(200).send({ food });
  }).catch((e) => {
    res.status(400).send(e);
  });
});

module.exports = router;
