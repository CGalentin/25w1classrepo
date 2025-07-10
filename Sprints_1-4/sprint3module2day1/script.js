const greet = function(name) {
    return `Hello, ${name}`;
};

function add(a,b) {
    return a + b
};

console.log("Traditional 2:", add(4, 6));
console.log(greet("Chris"));

const greetArrow = (name) => {
    return `Hello ${name}`;
};

const addArrow = (a,b) => a+b;

console.log(greetArrow("Jemekia"));
console.log("Arrow", addArrow(4,6));

const user = {
    name: "Eli",
    //regular function (method)
    regularFunction: function() {
        console.log("regularFunction", this.name)
    },
    //arrow function (method)
    arrowFunction: () => {
        console.log("arrowFunction", this.name)
    }
}

user.regularFunction();
user.arrowFunction();

const prices = [1, 2, 3];
const withTax = prices.map(i => i * 2);
console.log("Prices", withTax);


const counter = {
    count: 0,
    increment: function () {
        this.count++;
        console.log(this.count);
    }
}

counter.increment();
counter.increment();
counter.increment();

function argCount() {
    console.log(arguments.length)
}

argCount(2,3,5,6,4)

function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total;
}

const sumArrow = (...nums) => {
    console.log("All Arguments Recieved:", nums);
    return nums.reduce((total, n) => total + n, 0);
};

console.log(sumArrow(5, 10, 30, 10));
/*
Starts with a total = 0
0 + 5 = 5
5 + 10 = 15
15 + 30 = 45
45 + 10 = 55
*/
console.log(sum(2,3,5))

const processInvoice = (amount, rushFee = 0) => {
    console.log(`Base: $${amount}, Rush Shipping Fee: $${rushFee}`);
    return amount + rushFee;
};

console.log("Invoice Total:", processInvoice(200))
console.log("Invoice Total:", processInvoice(200,50))

const logEvents = (message = "No message", level = "INFO", timestamp = new Date().toString()) => {
    console.log(`[${level}] ${timestamp} - ${message}`);
}

logEvents("Database Connected")
logEvents("User Deleted", "WARN")

const multiLog = (...messages) => {
    messages.forEach(msg => {
        console.log(`[MULTI] ${msg}`)
    })
}

multiLog("Server started", "User Authenticated", "Data Loaded")







