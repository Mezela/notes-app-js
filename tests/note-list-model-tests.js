

function testCreateNote(){
  var note = new Note("hello")
  var noteList = new NoteList()
  // assert test below is not working. Not sure why???
  // assert.isEqual(noteList.notes === [])
  
  noteList.createNote(note)

  // assert test below is not working. Not sure why???
  // assert.isEqual(noteList.notes === [note])

  assert.isEqual(noteList.notes[0].text === note.text)
};

function testViewAllNotes(){
  var note1 = new Note("hello")
  var note2 = new Note("goodbye")
  var noteList = new NoteList()

  noteList.createNote(note1)
  noteList.createNote(note2)

  assert.isEqual(noteList.viewAllNotes() === noteList.notes )
  assert.isEqual(noteList.viewAllNotes().length === 2 )
}

testViewAllNotes();
testCreateNote();
