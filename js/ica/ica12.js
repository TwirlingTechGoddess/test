const questionBtn = document.querySelector('#js-new-quote');
const answerBtn = document.querySelector('#js-new-answer');
const questionTxt = document.querySelector('#js-quote-text');
const answerTxt = document.querySelector('#js-answer-text');
let answer = '';

questionBtn.addEventListener('click', getQuote);
answerBtn.addEventListener('click', displayAnswer);

async function getQuote(event){
    // console.log(event.target);
    try {
        const response = await fetch('https://trivia.cyberwisp.com/getrandomchristmasquestion');
        const result = await response.json();
        console.log("Download complete", result);
        answerTxt.textContent = '';
        displayQuote(result['question']);
        answer = result['answer'];
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