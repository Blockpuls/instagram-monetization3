const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    instagramId: { type: String, unique: true },
    earnings: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', userSchema);
