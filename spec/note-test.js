describe('Note', function() {
  it('returns test', function() {
    var note = new Note('text');
    assert.isTrue(note.returnText() === 'text');
    assert.isString(note.returnText());
  })
})
