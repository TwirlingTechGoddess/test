let url = 'https://api.pexels.com/v1/search?query=dad&per_page=1';
const questionBtn = document.querySelector('#js-new-quote');
const answerBtn = document.querySelector('#js-new-answer');
const questionTxt = document.querySelector('#js-quote-text');
const answerTxt = document.querySelector('#js-answer-text');
let answer = '';

questionBtn.addEventListener('click', getQuote);
answerBtn.addEventListener('click', displayAnswer);

 function generateImage(){
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            authorization: 'a2ULNxz4rOvrqxMiDP2Hx26OBcwFkDXDHFPZjJvBN31WqxCCTZvUlU5S'
        }
    };
    try {
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                const bckgrndImg = data.photos[0].src.large2x 
                document.body.style.backgroundImage = `url(${bckgrndImg})`;
                url = data.next_page;
            })
    } catch (error) {
          console.error(`Download error: ${error.message}`);
          alert('PIC FAILURE!!!')
    }
}

async function getQuote(event){
    generateImage();
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
        answerTxt.textContent = '';
        displayQuote(result.body[0]['setup']);
        answer = result.body[0]['punchline'];
      } catch (error) {
        console.error(`Download error: ${error.message}`);
        alert('JOKE FAILURE!!!')
      }
}

function displayQuote(question){
    questionTxt.textContent = question;
}

function displayAnswer(){
    answerTxt.textContent = answer;
}

getQuote();