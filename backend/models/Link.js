const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    postId: { type: String, required: true },
    affiliateUrl: { type: String, required: true }
});

module.exports = mongoose.model('Link', linkSchema);
