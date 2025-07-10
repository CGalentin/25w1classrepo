// setTimeout(() => {
//     console.log("1. Start Cooking");
// },2000);



// setTimeout(() => {
//     console.log("2. Dish is ready after 3 seconds");
// }, 3000)

// setTimeout(() => {
//     console.log("3. Keep prepping for other dishes") 
// },5000);

// console.log("Start Timer")

// setTimeout(() => {
//     console.log("Almost There")
// },2000);

// setTimeout(() => {
//     console.log("Times Up")
// }, 4000);

//window.onkeydown = () => console.log("User clicked item")

// let count = 0
// window.onclick = () => { count++; console.log('Button Clicked ' + count + ' times')}

document.getElementById("launch").addEventListener("click", () => {
    console.log("🚀 Rocket Launched")
})

document.addEventListener("keydown", () => {
    if (event.key === "b" || "y" || "x") {
        console.log("🔥 Ignition started...")

        let countdown = 10;

        function runCountDown() {
            if (countdown > 0) {
                console.log(`Countdown: ${countdown}`)
                countdown--

                setTimeout(runCountDown, 1000);
            } else {
                console.log("🚀 Liftoff!")
            }
        }
        runCountDown();
    }
})