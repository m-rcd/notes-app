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

  exports.NoteController = NoteController
})(this);
