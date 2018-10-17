(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.listNotes = function() {
    htmlString = '<ul>'
    this.noteList.list.map(item => htmlString += '<li><div>' + item.text + '</div></li>')
    htmlString += '</ul>'
   return htmlString
}

  exports.NoteListView = NoteListView;
})(this);
