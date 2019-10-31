
window.onload = function(){

  // NoteList setup
  ID.reset()
  let noteList = new NoteList()
  let note1 = new Note("Favourite drink: Gin and Tonic")
  let note2 = new Note("It's Halloween! 🎃")
  let note3 = new Note("💅🏾")
  noteList.createNote(note1)
  noteList.createNote(note2)
  noteList.createNote(note3)
  // let noteListView = new NoteListView(noteList)
  let noteController = new NoteController(noteList)
  noteController.renderHTML(document)
  let noteListView = new NoteListView(noteList)


  // Setup single pages

  function makeURLChangeShowForNote(){
    window.addEventListener("hashchange", showNoteAtCurrentPage)
  }

  function showNoteAtCurrentPage(){
    showNote(getNoteFromURL(window.location))
  }

  function getNoteFromURL(location){
    return location.hash.split("#notes/")[1];
  }

  function showNote(noteID){
    document.getElementById("app").innerHTML = noteListView.getById(noteID).text
  }

  makeURLChangeShowForNote()

  function addNewNote(){
    document
    .getElementById("text")
    .addEventListener("submit", function(submitEvent){
      
      submitEvent.preventDefault();
      console.log(submitEvent.target[0].value)
      // (submitEvent.target[0].value

    })
  }
  addNewNote();
}
