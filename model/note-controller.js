'use strict';

(function(exports){
  function NoteController(list = new NoteList(),  listView = NoteListView) {
    this.list = list;
    this.list.create('Favourite Harry potter character: Hedwig')
    this.view = new listView(list)
  }

  NoteController.prototype.insertHtml = function() {
    var element = document.getElementById('app')
    element.innerHTML = this.view.listNotes()
  }

  NoteController.prototype.makeUrlChangeViewNoteForCurrentPage = function () {
    var boundShowNoteForCurrentPage = this.showNoteForCurrentPage.bind(this)
    window.addEventListener("hashchange", boundShowNoteForCurrentPage);
  };

  NoteController.prototype.showNoteForCurrentPage = function() {
    var noteId = this.getNoteIdFromUrl(window.location)
    var notes = this.list.showNotes()
    var note = notes.find(function(element) {
      return element.id === Number(noteId)
    })
    this.showNote(note);
  };

  NoteController.prototype.getNoteIdFromUrl = function(location) {
    return location.hash.split("#note/")[1];
  }

  NoteController.prototype.showNote = function(note) {
    var singleNoteView = new SingleNoteView(note)
    document
      .getElementById('viewnote')
      .innerHTML = singleNoteView.noteString() ;
  }

  exports.NoteController = NoteController
})(this);
