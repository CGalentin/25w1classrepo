const cat = {
	name: "Calcipher",
	breed: "Siamese",
	age: 7,

	meow: function () {
		console.log(`${this.name} says: Meow!`);
	},
};

cat.meow();

const gamer = {
	username: "MisterNugget",
	level: 5,
	xp: 1200,

	levelUp: function () {
        this.level += 1
        console.log(`${this.username} just leveled up to ${this.level}`);
    },
};

gamer.levelUp();
gamer.levelUp();
gamer.levelUp();
gamer.levelUp();
console.log(gamer)

const car = {
    make: "Chevy",
    model: "Chevelle",
    mileage: 30000,
    fuel: 30, //30% fuel level

    drive: function (miles) {
        if (this.fuel <= 0) {
            console.log(`${this.make} ${this.model} is out of fuel and cannot make the trip`);
        } else {
            this.mileage += miles;
            this.fuel -= 5;
            console.log(`${this.make} ${this.model} drove ${miles} miles. New Mileage: ${this.mileage}. Fuel left: ${this.fuel}%`)
        }
    },

    refuel: function () {
        this.fuel = 100;
        console.log(`${this.make} ${this.model} has been refueld. Fuel is at ${this.fuel}%`);
    },

   report: function () {
        console.log(`Status Report -> ${this.make} ${this.model}: Mileage: ${this.mileage}, Fuel level is at ${this.fuel}%`);
    }
};

car.report();
car.drive(20);
car.drive(15);
car.report();
car.refuel();
car.report();

