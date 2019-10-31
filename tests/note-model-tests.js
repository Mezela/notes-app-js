function testNewNoteHasID(){
  // console.log("id", ID.currentID)
  ID.reset()
  var note1 = new Note("hello")
  var note2 = new Note("goodbye")
  
  // console.log("note1", note1.id)
  // console.log("note2", note2.id)
  assert.isEqual(note1.id === 0)
  assert.isEqual(note2.id === 1)
}

function testviewText() {
  var note = new Note("hello");
  assert.isEqual(note.viewText() === "hello" )
}

testviewText();
testNewNoteHasID();
