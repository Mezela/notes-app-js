(function(exports){

  function NoteList(){
    this.notes = [];
  }

  NoteList.prototype.createNote = function(note) {
    this.notes.push(note);
  }
  
  NoteList.prototype.viewAllNotes = function() {
    return this.notes;
  }

  exports.NoteList = NoteList;
})(this)


