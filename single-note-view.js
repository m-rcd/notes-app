(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.noteString = function() {
    var text = this.note.returnText()
    return '<div>' + text + '</div>'
  }

  exports.SingleNoteView = SingleNoteView;
})(this)
