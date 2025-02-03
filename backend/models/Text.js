const mongoose = require('mongoose');

const textSchema = new mongoose.Schema({
  originalText: { type: String, required: true },
  corrections: { type: Array, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Text', textSchema);
