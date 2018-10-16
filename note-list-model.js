'use strict';
(function(exports){

  function NoteList() {
    this.list = [];
  }

  NoteList.prototype.showNotes = function () {
    return this.list
  };

  NoteList.prototype.create = function (value) {
    var note = new Note(value)
    this.list.push(note)
  }

  exports.NoteList = NoteList;
})(this);
