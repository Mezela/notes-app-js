
function testSingleNoteViewReturnsNoteModelHTML(){

  let note = new Note("Test note")

  let singleNoteView = new SingleNoteView(note)

  assert.isEqual(singleNoteView.toHTML() === '<div>Test note</div>')
}

testSingleNoteViewReturnsNoteModelHTML();
