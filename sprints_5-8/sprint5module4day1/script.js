const launchBtn = document.getElementById('launchBtn')
const output = document.getElementById('output')
const launchGif = document.getElementById('launchGif')

console.log("Mission Control Initialized and Ready")

//Utility Function 
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

//Show the GIF during launch delay
function showLaunchGif() {
    launchGif.src = 'https://cdnl.iconscout.com/lottie/premium/thumb/space-shuttle-animation-download-in-lottie-json-gif-static-svg-file-formats--rocket-startup-spaceship-pack-animations-4628094.gif'
    launchGif.style.display = 'block'
}

function hideLaunchGif() {
    launchGif.style.display = 'none';
}

//Countdown Function
async function countdown(seconds) {
    for (let i = seconds; i > 0; i--) {
        output.textContent = `Launch in T-minus ${i}...`
        await delay(1000); 
    }
}

//Launch Simulation Function
function initiateLaunchSequence() {
    return new Promise((resolve, reject) => {
        output.textContent = "Final System Checks In Progress..."

        setTimeout(() => {
            const success = Math.random() > 0.3
            if (success) {
                resolve("Launch Successful! Rocket is in Orbit!")
            } else {
                reject ("Launch Failed, Mission Aborted!")
            }
        }, 3000)
    })
}

//Main Mission Logic
async function executeMission() {
    console.log('Launch Command Recieved')
    output.style.borderColor = 'black'

    try {
        await countdown(5); 

        showLaunchGif();

        const result = await initiateLaunchSequence()

       hideLaunchGif() 

        output.textContent = result; //Shows the success message
        output.style.borderColor = '#0BDA8F' 
        console.log("Mission Success:", result)
    } catch (error) {
        hideLaunchGif();
        output.textContent = error; 
        output.style.borderColor = "#CD1C18"
        console.error("Mission Failed", error)
    }
}
console.log('launchGif', launchGif)
launchBtn.addEventListener('click', () => {
    executeMission();
})