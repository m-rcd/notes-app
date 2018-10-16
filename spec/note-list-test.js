(function(exports) {

  function testShowNote() {
    var noteList = new NoteList();
    noteList.createAndStoreNote('Hello')
    assert.isTrue(noteList.showNote() === noteList.list)
  };

  testShowNote();

  function testCreateNote() {
    var noteList = new NoteList();
    noteList.createAndStoreNote('Hello')
    assert.isTrue(noteList.list.includes(note))
  }

  testCreateNote()
})(this);
