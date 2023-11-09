// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS


const insertX = ["BooBoo the Fool",
"Big Daddy Kane",
"Father Time"]
const insertY = ["the YMCA",
"XBar",
"the strip club"]
const insertZ = ["implodes",
"crystalized into a pillar of salt",
"gave a piglet a makeover"]


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', function () {
    if(customName.value){
        result();
    } else {
        alert("WRITE A NAME FOOL!!!\nWRITE A NAME FOOL!!!\nWRITE A NAME FOOL!!!\nWRITE A NAME FOOL!!!\nWRITE A NAME FOOL!!!\nWRITE A NAME FOOL!!!\nWRITE A NAME FOOL!!!\nWRITE A NAME FOOL!!!\nWRITE A NAME FOOL!!!");
    }
}
);
//add conditional based on if the textbox has value

function result() {
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    const xItem = randomValueFromArray(insertX);
    const storyText = `It was 94 fahrenheit outside, so ${xItem} went to shake some ass. When they got to ${yItem}, they popped, locked, and dropped it for awhile, then ${zItem}. Bob saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day in the deep south, so it's to be expected. "We Outsiiiiiiide!!!" Bob shouted, to which ${xItem} replied "You already KNOOOWWWWW!!!".`
    let newStory = storyText;
// to make it dynamic on each button click I had to move variables into the function itself

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace(/Bob/g, name);
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300 / 14).toString().concat(' stone');
        const temperature =  Math.round((94-32) * (5/9)).toString().concat(' centigrade');
        newStory = newStory.replace("300 pounds", weight);
        newStory = newStory.replace("94 fahrenheit", temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}