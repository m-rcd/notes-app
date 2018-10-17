'use strict';
(function(exports){

  function NoteList() {
    this.list = [];
    this.idCounter = 0
  }

  NoteList.prototype.showNotes = function () {
    return this.list
  };

  NoteList.prototype.create = function (value) {
    var note = new Note(value, this.idCounter)
    this.idCounter += 1
    this.list.push(note)
  }

  exports.NoteList = NoteList;
})(this);
