const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new mongoose.Schema({
    name:  { type: String, min: 2, max: 50, required: true },
    image: { type: String, required: true },
    description : { type: String, required: true },
    city : { type: Schema.Types.ObjectId, ref: 'City', required: true }
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;