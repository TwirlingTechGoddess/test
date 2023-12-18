const numbers = document.querySelector("h2");    
const buTT = document.querySelector("button");    
const resultElement = document.getElementById('result');

function submitPhoneNumber() {
    window.close();
}

  
function addNumber(event) {
  console.log(numbers.innerText);
  console.log(Number(numbers.innerText));
  numbers.textContent += event.target.value;
  if(numbers.innerText.length === 10) {
    buTT.disabled = false;
  } else {
    buTT.disabled = true;
  }
}

function deleteNumber() {
  const numm = numbers.innerText.split('').slice(0, numbers.innerText.length-1).join('');
  numbers.textContent = numm;
  if(numbers.innerText.length === 10) {
    buTT.disabled = false;
  } else {
    buTT.disabled = true;
  }
}