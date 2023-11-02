// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS


const insertX = ["Willy the Goblin",
"Big Daddy",
"Father Christmas"]
const insertY = ["the soup kitchen",
"Disneyland",
"the White House"]
const insertZ = ["spontaneously combusted",
"melted into a puddle on the sidewalk",
"turned into a slug and crawled away"]
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);
const xItem = randomValueFromArray(insertX);
const storyText = `It was 94 fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. Bob saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.`

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);
//add conditional based on if the textbox has value

function result() {
    let newStory = storyText;
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