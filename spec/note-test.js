describe('Note', function() {
  var note = new Note('text', 1);

  it('can be instantiated with an Id', function() {
    assert.isTrue(note instanceof Note)
    assert.isTrue(note.id === 1)
  })

  it('returns test', function() {
    assert.isTrue(note.returnText() === 'text');
    assert.isString(note.returnText());
  })

})
