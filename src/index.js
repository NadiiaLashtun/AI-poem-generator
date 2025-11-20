function poemDisplay(response) {
  console.log(response);

  new Typewriter('#poem-box', {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: '',
  });
}

function poemGenerate(event) {
  event.preventDefault();
  let topicElement = document.querySelector('#topic');
  let apiKey = 'b8f1o699a3b107e215cf47a31fc0ate8';
  let prompt = `Generate poem on topic ${topicElement.value}`;
  let context =
    "Your are the best poem writer. Write short poem in 4 lines using topic. and show in HTML format without word html. Sign it like 'SheCodes AI' after poem ot the RIGHT bottom corner in tag <strong>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(poemDisplay);
}

let formElement = document.querySelector('#form-poem-generator');
formElement.addEventListener('submit', poemGenerate);
