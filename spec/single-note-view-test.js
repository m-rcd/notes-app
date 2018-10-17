describe('Single note view', function() {
  function MockNote() {}
  MockNote.prototype.returnText = function() {
    return 'Favourite Harry potter character: Hedwig'
  }
  var mockNote = new MockNote();

  var singleNoteView = new SingleNoteView(mockNote);

  it('can instatiate single note view object', function() {
    assert.isTrue(singleNoteView instanceof SingleNoteView)
  });

  it('returns a string of HTML', function() {
    assert.isTrue(singleNoteView.noteString() === '<div>Favourite Harry potter character: Hedwig</div>')
  })
})
