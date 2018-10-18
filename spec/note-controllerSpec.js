describe('Note controller', function() {
  function MockNoteList() {}
  MockNoteList.prototype.create = function() {
  }
  var list = new MockNoteList()

  function MockListView() {}
  MockListView.prototype.listNotes = function() {
    return '<ul><li><div><a href="note/0">Favourite Harry pott</a></div></li></ul>'
    }

  noteController = new NoteController(list, MockListView);

  it('can be instantiated', function() {
    assert.isTrue(noteController instanceof NoteController)
  });


  it('can insert HTML', function() {
    window.onload = function() {
      noteController.insertHtml()
      var app = document.getElementById('app')
      assert.isTrue(app.innerHTML ===  '<ul><li><div><a href="note/0">Favourite Harry pott</a></div></li></ul>')
    }
  })

  // it('shows the whole note', function() {
  //   window.onload = function() {
  //     noteController.insertHtml()
  //     document.getElementById('app').click();
  //     var noteDiv = document.getElementById('viewnote')
  //     assert.isTrue(noteDiv.innerHTML === 'Favourite Harry potter character: Hedwig')
  //   }
  // })
})
