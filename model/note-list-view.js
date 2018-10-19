'use strict';

(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.listNotes = function() {
    var htmlString = '<ul>'
    this.noteList.list.map(item => htmlString += `<li><div><a href="#note/${item.id}">${item.text.substring(0,20)}</a></div></li>`)
    htmlString += '</ul>'
   return htmlString
}

  exports.NoteListView = NoteListView;
})(this);
