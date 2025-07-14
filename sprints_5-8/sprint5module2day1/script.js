//Handleing a click event
const alertButton = document.getElementById('alertButton');

alertButton.addEventListener('click', () => {
    alert('Button was Click')
    console.log('Button was Clicked')
})

//Handling a Mouseover Event
const hoverButton = document.getElementById('hoverButton');
hoverButton.addEventListener('mouseover', () => {
    hoverButton.textContent = 'Now Hovering Over Button'
    hoverButton.style.backgroundColor = "blue"
})

hoverButton.addEventListener('mouseout', () => {
    hoverButton.textContent = 'Hover Over Me!';
    hoverButton.style.backgroundColor = "#45a049"
})

//Handling Input Events
const nameInput = document.getElementById('nameInput');
const output = document.getElementById('output')

nameInput.addEventListener('input', (event) => {
    output.textContent = `Hello, ${event.target.value}`;
})

//Preventing Default Form Actions
const form = document.getElementById('sampleForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Form Submission Prevented')
})

//Listening for Keyboard Events
const keyOutput = document.getElementById('keyOutput');

document.addEventListener('keydown', (event) => {
    console.log(event); //View the event object
    keyOutput.textContent = `You pressed: ${event.key}`;
})



