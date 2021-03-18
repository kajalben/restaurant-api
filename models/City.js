const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new mongoose.Schema({
    name:  { type: String, min: 2, max: 50, required: true },
})

const City = mongoose.model('City', citySchema);

module.exports = City;