function testNoteControllerReturnsHTML(){

  let ElementDouble = {
    innerHTML: "Favourite drink: Gin and Tonic"
  }

  let DocumentDouble = {
    getElementById: function(){
      return ElementDouble
    }
  }

  // let elementDouble = new ElementDouble();
  // let documentDouble = new DocumentDouble();
  

  let note = new Note("New Favourite drink: Water")
  let noteListModel = new NoteList()
  noteListModel.createNote(note)
  let noteController = new NoteController(noteListModel)


  assert.isEqual(noteController.renderHTML(DocumentDouble) === '<ul><li><div>New Favourite drink:</div></li></ul>')

}

testNoteControllerReturnsHTML();
