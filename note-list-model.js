(function(exports){

  function NoteList() {
    this.list = [];
  }

  NoteList.prototype.storeNewNote = function (value) {
    note = new Note(value)
    this.list.push(note)
  }

    NoteList.prototype.showNotes = function () {
      return this.list
    };


  exports.NoteList = NoteList;
})(this);
