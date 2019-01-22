class App {
  attachEventListeners() {
    document.querySelector('#noteList').addEventListener('click', e => {
      console.log('clicked');
    })
  }
}
