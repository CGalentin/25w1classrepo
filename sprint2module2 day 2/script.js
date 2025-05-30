const startCar = [
    "Open Door",
    "Get into Seat",
    "Put on Seatbelt", 
    "Put key in the ignition",
    "Turn the the key",
    "Push Gas",
    "Put in drive"
];

//for (condition, logic, increment )

console.log(startCar);

startCar.push("Hit the Gas & GO!")

for (let i = 0; i < startCar.length; i++) {
    console.log(`Step ${i + 1}: ${startCar[i]}`);
}


const rocketShip = {
    engines: "Ready",
    navigation: "Ready",
    commSupport: "Ready",
    communication: "Standby",
    blaster: "Offline"
}

for (let system in rocketShip) {
    console.log(`System ${system} - Status: ${rocketShip[system]}`);
}

const systemsCheck = {
    thrusters: "OK",
    heatShield: "FAIL",
    power: "OK",
    comms: "FAIL"
}

for (let part in systemsCheck) {
    if (systemsCheck[part] === "FAIL") {
        console.log(`ALERT: ${part} is not ready, abort!`)
    } else {
        console.log(`${part} is good to go!`)
    }
}