const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');

let NewFoodSchema = new mongoose.Schema({
	name: {
		type: String,
	},
});

var Food = mongoose.model('Food', NewFoodSchema, 'food');

module.exports = { Food };
