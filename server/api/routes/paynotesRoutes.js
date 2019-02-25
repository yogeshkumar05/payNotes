'use strict';
module.exports = function(app) {
  var notesList = require('../controllers/paynotesController');

  app.route('/notes')
    .get(notesList.list_all_notes)
    .post(notesList.create_note);


  app.route('/notes/:Id')
    .get(notesList.read_note)
    .put(notesList.update_note)
    .delete(notesList.delete_note);

  app.route('/login')
    .get(notesList.validateLogin);
};