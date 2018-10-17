describe('note list view', function() {
  it('returns a string of HTML', function() {
    var noteList = new NoteList();
    noteList.create('BOOO')
    var noteListView = new NoteListView(noteList)
    assert.isTrue(noteListView.listNotes() === '<ul><li><div>BOOO</div></li></ul>')
  })
})
