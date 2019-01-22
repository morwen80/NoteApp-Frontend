class Note {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.content = data.content;
    Note.all.push(this);
  }

  renderSingleNote() {
    return `
    <li>
      <h3>${this.title}
      <button data-id=${this.id}>Edit</button>
      </h3>
    </li>
      `
  }
}

Note.all = [];
