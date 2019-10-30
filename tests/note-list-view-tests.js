function testViewTwoNoteListHTML(){
  var note1 = new Note("hello")
  var note2 = new Note("goodbye")
  var noteList = new NoteList()

  noteList.createNote(note1)
  noteList.createNote(note2)

  var noteListView = new NoteListView(noteList)
  // console.log("view HTML", noteListView.viewNoteListHTML())

  assert.isEqual(noteListView.viewNoteListHTML() === "<ul><li><div>hello</div></li><li><div>goodbye</div></li></ul>" )
}

function testViewOneNoteListHTML(){
  var note1 = new Note("hello")
  var noteList = new NoteList()
  noteList.createNote(note1)
  var noteListView = new NoteListView(noteList)

  assert.isEqual(noteListView.viewNoteListHTML() === "<ul><li><div>hello</div></li></ul>" )
}

function testViewZeroNoteListHTML(){
  var noteList = new NoteList()
  var noteListView = new NoteListView(noteList)

  assert.isEqual(noteListView.viewNoteListHTML() === "<ul><li><div></div></li></ul>" )
}

testViewTwoNoteListHTML();
testViewOneNoteListHTML();
testViewZeroNoteListHTML();
