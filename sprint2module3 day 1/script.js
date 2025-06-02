/* 
for(start; condition; update or increment);
while(codition);
*/

for (let i = 1; i <= 5; i++) {
    console.log("Count is:", i);
}

const fruits =  ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log("Fruits at index", i, "is", fruits[i]);
}

//Print even numbers between 2 and 10
for (let i = 0; i <= 24; i += 2) {
    console.log("Even Number", i);
}

let count = 10;
while (count > 0) {
    console.log("Countdown:", count);
    count--;
};

// let userInput = "";
// const secretWord = "hello";

// while(userInput !== secretWord) {
//     userInput = prompt("Guess the secret word");
// }

// console.log("You guessed correctly!")

// let number = 0;
// while (number !== 7) {
//     number = Math.floor(Math.random() * 10) +1
//     console.log("Rolled:", number);
// }

// let password = "";

// while (password !== "password123") {
//     password = prompt("Enter the password:")
// }

const snackMenu = ["doritos", "stringcheese", "pretzels", "goldfish"];
const chosenSnack = [];

let snackCount = 0;

while (snackCount < 3) {
    let userSnack = prompt (
        `Pick a snack! Choices are: ${snackMenu.join(",")}`
    ).toLowerCase();

    if(snackMenu.includes(userSnack)) {
        console.log(`${userSnack} added to your order`);
        chosenSnack.push(userSnack);
        snackCount++;
    } else {
        console.log(`"${userSnack}" is not available. Try Again`);
    }
}

console.log("Here is what you ordered:");
for (let i = 0; i < chosenSnack.length; i++) {
    console.log(`Snack ${i + 1}: ${chosenSnack[i]}`);
}

const snackTally = {};

for (let i = 0; i < chosenSnack.length; i++) {
    let snack = chosenSnack[i];
    if (snackTally[snack]) {
        snackTally[snack]++;
    } else {
        snackTally[snack] = 1;
    }
}

console.log("Snack Counts: ", snackTally);