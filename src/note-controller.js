(function (exports) {

  function NoteController(noteListModel = new NoteList()) {
    this.noteListModel = noteListModel
    this.noteListView = new NoteListView(noteListModel)
  };

  NoteController.prototype.renderHTML = function(document) {
    el = document.getElementById("app")
    return el.innerHTML = this.noteListView.viewNoteListHTML()
  };

  exports.NoteController = NoteController;
})(this);


// let new_note = new Note("Favourite drink: Gin")

// let noteListModel = new NoteList()
// noteListModel.createNote(new_note)

// let noteController = new NoteController(noteListModel)
// noteController.renderHTML(document);
