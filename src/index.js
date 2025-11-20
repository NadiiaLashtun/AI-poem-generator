function poemGenerate(event) {
  event.preventDefault();

  new Typewriter('#poem-box', {
    strings: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    autoStart: true,
    delay: 20,
    cursor: '',
  });
}

let formElement = document.querySelector('#form-poem-generator');
formElement.addEventListener('submit', poemGenerate);
