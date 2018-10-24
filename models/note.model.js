const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  id: {type: Number, required: true},
  title: {type: String, maxlength: 100, required: true},
  count: {type: Number, required: true},
  url: {type: String},
  content: {type: String},
}, {timestamps: {createdAt: 'created', updatedAt: 'updated'}});

module.exports = mongoose.model('note', NoteSchema);