'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var NoteSchema = new Schema({
  title: {
    type: String,
    required: 'Kindly enter the name of the note'
  },
  details: {
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Notes', NoteSchema);