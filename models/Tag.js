const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new mongoose.Schema({
    name:  { type: String, min: 2, max: 50, required: true },
    restaurants: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }]
})

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;