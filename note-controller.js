(function(exports){
  function NoteController( list = new NoteList,  listView = NoteListView) {
    this.list = list;
    this.list.create('Favourite Harry potter character: Hedwig')
    this.view = new listView(list)
  }

  NoteController.prototype.insertHtml = function() {
    var element = document.getElementById('app')
    element.innerHTML = this.view.listNotes()
  }
  // 
  // NoteController.prototype.makeUrlChangeViewNoteForCurrentPage = function () {
  //   window.addEventListener("hashchange", showNoteForCurrentPage);
  // };
  //
  // NoteController.prototype.showNoteForCurrentPage = function() {
  //   showNote(getNoteFromUrl(window.location));
  // };
  //
  // NoteController.prototype.getNoteFromUrl = function(location) {
  //   return location.hash.split("#")[1];
  // }
  //
  // NoteController.showNote = function(note) {
  //   document
  //     .getElementById('viewnote')
  //     .innerHTML = note;
  // }

  exports.NoteController = NoteController
})(this);
