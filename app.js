const updateGreetingButton = document.getElementById('update-greeting-button');
const greetingInput = document.getElementById('greeting-input');
const greetingDisplay = document.getElementById('greeting-display');

updateGreetingButton.addEventListener('click', () => {
    // console.log('you clicked the button');
    const newGreeting = greetingInput.value;
    greetingDisplay.textContent = newGreeting;

});

const updateButton = document.getElementById('update-button');
const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');

updateButton.addEventListener('click', () => {
    // console.log('you clicked the button');
    //  this code tuns when button is clicked
    const newName = nameInput.value;
    nameDisplay.textContent = newName;
});


const updatePinkButton = document.getElementById('update-pink-button');
const pinkBackgroundInput = document.getElementById('background-display');
const pinkBackgroundDisplay = document.getElementById('background-display')

updatePinkButton.addEventListener('click', () => {
    const pinkBackground =
        pinkBackgroundDisplay.textContent = pinkBackground;
})


