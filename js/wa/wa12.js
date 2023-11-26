const questionBtn = document.querySelector('#js-new-quote');
const answerBtn = document.querySelector('#js-new-answer');
const questionTxt = document.querySelector('#js-quote-text');
const answerTxt = document.querySelector('#js-answer-text');
let answer = '';

questionBtn.addEventListener('click', getQuote);
answerBtn.addEventListener('click', displayAnswer);

async function getQuote(event){
    const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'bed3d3238cmsheab41b22ad6a8eep194fc3jsnca119823eea9',
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
      }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log("Download complete", result.body);
        answerTxt.textContent = '';
        displayQuote(result.body[0]['setup']);
        answer = result.body[0]['punchline'];
      } catch (error) {
        console.error(`Download error: ${error.message}`);
        alert('YOU ARE A FAILURE!!!')
      }
}

function displayQuote(question){
    questionTxt.textContent = question;
}

function displayAnswer(){
    answerTxt.textContent = answer;
}

getQuote();