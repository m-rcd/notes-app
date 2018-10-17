describe('note list view', function() {
  it('returns the first 20 character of string of HTML', function() {
    function MockNote() {
      this.text = 'Hello my name is Cristina and I like hedwig and i like chocolate!';
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
    assert.isTrue(noteListView.listNotes() === '<ul><li><div>Hello my name is Cri</div></li></ul>')
  })
})
