function testNoteControllerReturnsHTML(){

  function DocumentDouble() {
    this.innerHTML = "Favourite drink: Gin and Tonic"
  }

  DocumentDouble.prototype = {
    getElementById: function(){
      return this.innerHTML;
    }
  }

  let note = new Note("Favourite drink: Gin and Tonic")
  let noteListModel = new NoteList()
  noteListModel.createNote(note)
  let noteController = new NoteController(noteListModel)

  let documentDouble = new DocumentDouble();

  assert.isEqual(noteController.renderHTML(documentDouble) === '<ul><li><div>Favourite drink: Gin and Tonic</div></li></ul>')

}

testNoteControllerReturnsHTML();
