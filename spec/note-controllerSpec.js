describe('Note controller', function() {
  function MockNoteList() {}
  MockNoteList.prototype.create = function() {
  }
  var list = new MockNoteList()

  function MockListView() {}
  MockListView.prototype.listNotes = function() {
    return '<ul><li><div>Favourite Harry potter character: Hedwig</div></li></ul>'
    }
  

  it('can be instantiated', function() {
    noteController = new NoteController(list, MockListView);
    assert.isTrue(noteController instanceof NoteController)
  });


  it('can insert HTML', function() {
    noteController = new NoteController();
    window.onload = function() {
      noteController.insertHtml()
      var app = document.getElementById('app')
      assert.isTrue(app.innerHTML ===  '<ul><li><div>Favourite Harry potter character: Hedwig</div></li></ul>')
    }
  })
})
