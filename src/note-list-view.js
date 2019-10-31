(function(exports) {

  function NoteListView(noteListModel) {
    this.allNotes = noteListModel;
  }

  NoteListView.prototype.viewNoteListHTML = function() {
    var newNoteList = []

    oldNoteList = this.allNotes.notes

    for (let index = 0; index < oldNoteList.length; index++) {
      result = oldNoteList[index].text.slice(0,20)
      noteID = oldNoteList[index].id
      newNoteList.push("<a href=#notes/" + noteID + ">" + result + "</a>")
      // console.log("oldlist", oldNoteList[index].text)
    }
    note = newNoteList.join("</div></li><li><div>")
    
    return "<ul><li><div>" + note + "</div></li></ul>"
    // console.log("string", string)
  }

  NoteListView.prototype.getById = function(id){
    console.log("allNotes", this.allNotes.viewAllNotes())
    return this.allNotes.viewAllNotes()[id]
  }

  exports.NoteListView = NoteListView;
})(this);
