
  document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.attachEventListeners();

  const endPoint = 'http://localhost:3000/api/v1/notes';
  const noteList = document.querySelector('#noteList')
  fetch(endPoint)
    .then(res => res.json())
    .then(json => {
      json.forEach(note => {
        const newNote = new Note(note);
        noteList.innerHTML += newNote.renderSingleNote();

      });
    });
});
