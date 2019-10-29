(function(exports) {

  function NoteListView(noteListModel) {
    this.allNotes = noteListModel;
  }

  NoteListView.prototype.viewNoteListHTML = function() {
    var newNoteList = []

    oldNoteList = this.allNotes.notes

    for (let index = 0; index < oldNoteList.length; index++) {

      newNoteList.push(oldNoteList[index].text)
      // console.log("oldlist", oldNoteList[index].text)
    }
    note = newNoteList.join("</div></li><li><div>")

    return "<ul><li><div>" + note + "</div></li></ul>"
  }


  exports.NoteListView = NoteListView;
})(this);
