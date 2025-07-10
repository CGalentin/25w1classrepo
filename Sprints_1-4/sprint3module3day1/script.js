const user = {
    name: "Alex",
    age: 32,
    location: "Austin"
};

const userCopy = {...user};
console.log(userCopy);

const name1 =  user.name;
const age1 = user.age;
console.log("First Method you learned:", name1, age1);

//Destructure in one line
const { name, age, location: userLocation } = user;
console.log("Destructuring Properties out of an Object:", name, age);
console.log("User lives at", userLocation);

const colors = ["red", "green", "blue", "purple", "orange"];

const firstColor = colors[0];
const secondColor = colors[1];

console.log("First Method you Learned - Indexing:", firstColor, secondColor);

const [first, second, third, fourth] = colors;

console.log("Destructuring Assignment with Array:", fourth)

function getCoordinates() {
    return [24.3, 30.1];
}

const [x, y] = getCoordinates();

console.log("Destructuring a Return Statement:", x, y)

// const coords = getCoordinates();
// const x = coords[0]
// const y = coords [1]

// console.log("What you learned so far:", x,y)

//...spread operator

const orginalArray = ["First", "Second", "Third"];
const copy = orginalArray.slice();
const copy2 = [...orginalArray];

console.log(copy)
console.log(copy2)

//Tenary Operator
const isLoggedIn = true;
//let message;

const message = isLoggedIn ? "Welcome Back" : "Please Log in";

// if (isLoggedIn) {
//     message = "Welcome"
// } else {
//     message = "Please Log in"
// }

console.log(message)

const forecast = {
    temp: 75,
    condition: "Sunny Weather",
    state: "Florida"
}

const {temp, condition} = forecast
const weatherMessage = temp > 80 ? "It's Hot!" : "Nice Day!";

// let temp = forecast.temp;
// let condition = forecast.condition;

// let weatherMessage;

// if (temp > 80) {
//     weatherMessage = "It's Hot" 
// } else {
//     weatherMessage = "It's a Nice Day"
// }

console.log(weatherMessage);
