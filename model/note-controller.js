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
    return location.hash.split("#note/")[0];
  }

  NoteController.prototype.showNote = function(note) {
    var singleNoteView = new SingleNoteView(note)
    document
      .getElementById('viewnote')
      .innerHTML = singleNoteView.noteString() ;
  }

  NoteController.prototype.submitNote = function() {
    document.list = this.list

    document
    .getElementById('submit')
    .addEventListener('click', function(clickEvent) {
      clickEvent.preventDefault()
      var text = document.getElementById('msg').value
      console.log(text)
      document.list.create(text)
    })
  }


  exports.NoteController = NoteController
})(this);

var noteController = new NoteController()
noteController.submitNote()
