const jedi = {
    name: "Luke Skywalker",
    lightsaberColor: "Green", 
    age: 23,
    isTrainedByYoda: true,
}

//Getting properties from an object
console.log('Jedi Profile:', jedi);
console.log("Welcome Master: ", jedi.name, jedi.lightsaberColor); //dot notation
console.log("Luke's Light Saber Color is: ", jedi['lightsaberColor'], jedi.name)
console.log(`Jedi Master: ${jedi.name} who has a ${jedi.lightsaberColor} Light saber`);

jedi.planet = "Tatoonine" //add a property to the object 
console.log(`${jedi.name}'s home planet is ${jedi.planet}`);

delete jedi.age;
console.log(jedi);

const starships = ["X-Wing", "TIE Fighter", "Millenium Falcon", "Death Star"];
console.log(starships);
console.log("First Starship", starships[0])
console.log("Second Starship", starships[1])
console.log("Third Starship", starships[2])
console.log("Fourth Starship", starships[3])

starships[1] = "TIE Interceptor";
console.log(starships);

//Working with length
console.log("Fleet Size:", starships.length)

starships.push("A-Wing");
console.log(starships)

starships.pop();
console.log(starships);

starships.splice(1,0, "A-Wing");
console.log("New Addition before TIE after X-Wing", starships)

starships.splice(1,1)
console.log("Removed A-Wing as index 2", starships)

starships.splice(1,1, "TIE Fighter");
console.log(starships);

const holoMessages = "May the force be with you!";
console.log(holoMessages);
const words = holoMessages.split(" ");
console.log(words);
console.log(words[words.length -1]);