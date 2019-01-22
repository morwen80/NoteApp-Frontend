class App {
  constructor() {
    this.adapter = new Adapter();

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.createNotes = this.createNotes.bind(this);
    this.addNotes = this.addNotes.bind(this);
  }

  attachEventListeners() {
    document.querySelector('#noteList').addEventListener('click', this.handleEditClick);
    document.querySelector('#update').addEventListener('submit', this.handleFormSubmit);
  }

  createNotes(notes) {
    notes.forEach(note => {
      new Note(note);
    });
    this.addNotes();
  }

  addNotes() {
    document.querySelector('#noteList').innerHTML = '';
    Note.all.forEach(
      note => (document.querySelector('#noteList').innerHTML += note.renderSingleNote())
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const note = Note.findById(id);
    const title = e.target.querySelector('input').value;
    const content = e.target.querySelector('textarea').value;
    const bodyJSON = { title, content };

    this.adapter.updateNote(note.id, bodyJSON).then(updatedNote => {
      const note = Note.findById(updatedNote.id);
      note.update(updatedNote);
      this.addNotes();
    });
  }

  handleEditClick(e) {
    const id = parseInt(e.target.dataset.id);
    const note = Note.findById(id);
    document.querySelector('#update').innerHTML = note.renderUpdateForm();
  }
}
