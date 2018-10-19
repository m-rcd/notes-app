describe('Note list', function() {
  var noteList = new NoteList();

  it('can be instantiated with a counter', function() {
    assert.isTrue(noteList instanceof NoteList)
    assert.isTrue(noteList.idCounter === 0)
  })

  it('shows list of notes', function() {
    assert.isTrue(noteList.showNotes() === noteList.list)
    assert.isArray(noteList.showNotes())
  })

  it('create and store a new note with an ID', function() {
    noteList.create('Hello')
    assert.isTrue(noteList.list[0].text === 'Hello')
    assert.isTrue(noteList.list[0].id === 0)
    assert.isTrue(noteList.idCounter === 1)
  })
})
