
  document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.attachEventListeners();

    app.adapter.fetchNotes().then(app.createNotes);
  });
