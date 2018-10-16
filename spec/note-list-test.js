describe('Note list', function() {
  it('shows list of notes', function() {
    var noteList = new NoteList();
    assert.isTrue(noteList.showNotes() === noteList.list)
    assert.isArray(noteList.showNotes())
  })

  it('create and store a new note', function() {
    var noteList = new NoteList();
    noteList.create('Hello')
    assert.isTrue(noteList.list[0].text === 'Hello')
  })
})
