const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  image : { type: String, default: ''}
}, { timestamps: true });

const images_starmarg = mongoose.model('images_starmarg', userSchema);

module.exports = images_starmarg;
