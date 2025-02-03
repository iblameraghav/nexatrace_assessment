const mongoose = require('mongoose');

const scanSchema = new mongoose.Schema({
  url: { type: String, required: true },
  result: { type: Object, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Scan', scanSchema);
