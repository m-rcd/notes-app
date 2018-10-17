(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.listNotes = function() {
    htmlString = '<ul>'
    this.noteList.list.map(item => htmlString += '<li><div>' + item.text.substring(0,20) + '</div></li>')
    htmlString += '</ul>'
   return htmlString
}

  exports.NoteListView = NoteListView;
})(this);
