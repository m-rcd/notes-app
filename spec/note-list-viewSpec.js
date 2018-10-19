describe('note list view', function() {

  function MockNote() {
    this.text = 'Hello my name is Cristina and I like hedwig and i like chocolate!';
    this.id = 0
  }

  function MockNoteList() {
    this.list = []
  }

  MockNoteList.prototype.create = function(value) {
    this.list.push(value)
  }

  var noteList = new MockNoteList();
  var note = new MockNote();
  noteList.create(note)
  var noteListView = new NoteListView(noteList)

  it('can be instantiated with a notelist', function() {
    assert.isTrue(noteListView instanceof NoteListView)
  })

  it('returns the first 20 character of string of HTML', function() {
    assert.isTrue(noteListView.listNotes() === '<ul><li><div><a href="#note/0">Hello my name is Cri</a></div></li></ul>')
  })

  it('url contains id', function() {
    window.onload = function() {
      document.getElementById('note-0').click();
      assert.isTrue(window.location === 'localhost:8000#note/0')
    }
  })
})
