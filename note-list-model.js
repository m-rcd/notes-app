(function(exports){

  function NoteList() {
    this.list = [];
  }

  NoteList.prototype.createAndStoreNote = function (value) {
    note = new Note(value)
    this.list.push(note)
  }

    NoteList.prototype.showNote = function () {
      return this.list
    };


  exports.NoteList = NoteList;
})(this);
