// COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// RAW TEXT STRINGS
const insertX = ['Bobby the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'Downing Street'];
const insertZ = ['spontaneously combusted', 'exploded', 'turned into a slug and crawled away'];

// EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {
  let newStory = "It was 94 fahrenheit outside, so ";
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory += `${xItem} went for a long run. When they got to ${yItem}, they stared in laughter for a few moments, then ${zItem}. David saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a very cold day.`;


  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 / 2.20462) + ' stone';
    const temperature =  Math.round((94 - 32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
