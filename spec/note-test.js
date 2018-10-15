(function(exports) {

  function testReturnText() {
    var note = new Note('text');
    assert.isTrue(note.returnText() === 'text');
  };

  testReturnText();
})(this);
