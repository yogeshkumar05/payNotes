'use strict';


var mongoose = require('mongoose'),
Note = mongoose.model('Notes');

exports.validateLogin = function(req, res) {
    console.log(req.query);

    const {username, password} = req.query;
    if(username === 'user@example.com' && password === '1234') {
        res.json(200);
    }

    res.json(201);
};

exports.list_all_notes = function(req, res) {
  Note.find({}, function(err, note) {
    if (err)
      res.send(err);
    res.json(note);
  });
};

exports.create_note = function(req, res) {
  var note = new Note(req.body);
  console.log(req.body);
  note.save(function(err, note) {
    if (err)
      res.send(err);
    res.json(note);
  });
};


exports.read_note = function(req, res) {
  Note.findById(req.params.noteId, function(err, note) {
    if (err)
      res.send(err);
    res.json(note);
  });
};


exports.update_note = function(req, res) {
  console.log(req.params);
  console.log(req.body);
  Note.findOneAndUpdate({_id: req.params.Id}, req.body, {new: true}, function(err, note) {
    if (err)
      res.send(err);
    res.json(note);
  });
};


exports.delete_note = function(req, res) {
  Note.remove({
    _id: req.params.noteId
  }, function(err, note) {
    if (err)
      res.send(err);
    res.json({ message: 'Note successfully deleted' });
  });
};
