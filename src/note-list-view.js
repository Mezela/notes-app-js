(function(exports) {

  function NoteListView(noteListModel) {
    this.allNotes = noteListModel;
  }

  NoteListView.prototype.viewNoteListHTML = function() {
    var newNoteList = []

    oldNoteList = this.allNotes.notes

    for (let index = 0; index < oldNoteList.length; index++) {

      newNoteList.push(oldNoteList[index].text.slice(0,20))
      // console.log("oldlist", oldNoteList[index].text)
    }
    note = newNoteList.join("</div></li><li><div>")
    
    return "<ul><li><div>" + note + "</div></li></ul>"
    // console.log("string", string)
  }


  exports.NoteListView = NoteListView;
})(this);
