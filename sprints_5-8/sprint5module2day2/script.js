const stageContainer = document.getElementById('stage-container');
const header2 = document.getElementsByClassName('hero');
const stages = document.querySelectorAll('.stage');
const header = document.querySelector('.hero');
const buttons = document.querySelectorAll('.show-lineup');

//Capturing Phase Example 
// document.addEventListener('click', (e) => {
//     console.log('Document - Capuring Phase')
// }, true)

//Bubbling Phase 
// document.addEventListener('click', (e) => {
//     console.log('Document - Bubbling Phase')
// })

/*
[Document]
    |
[Stage Container]
    |
[Stage Card]
    |
[Button]
*/

//Listener on the Stage Container  (parent of all Stage Cards)

// header2.addEventListener('click' , (e) => {
//     console.log('Event Container Clicked - Header')
//     console.log('Event Target', e.target)
//     console.log('Current Target', e.currentTarget)
// })

stageContainer.addEventListener('click', (e) => {
    console.log('Stage Container Clicked');
    console.log('Event Target', e.target);
    console.log('Current Target:', e.currentTarget);
})

//Listener for individual stage cards
stages.forEach(stage => {
    stage.addEventListener('click', (e) => {
        console.log(`${stage.id} clicked`)
    })
})

//Stopping Propagation 
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Button Clicked - Propagation Stopped')
        alert(`Line-up for: ${button.parentElement.querySelector('h3').textContent}`);
    })
})

header.addEventListener('click', () => {
    console.log('Hero Section Clicked - Change Header Color')

    //Array of fun colors - Rock ON!
    const colors = ['#1adbc2', '#f50531', '#0531f5', '#f59d05', '#9505f5'];
    const randomColor = colors[Math.floor(Math.random()* colors.length)];

    header.style.backgroundColor = randomColor;

    //Reset after 2 seconds
    setTimeout(() => {
        header.style.backgroundColor = ''
    }, 2000)
})