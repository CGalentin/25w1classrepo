function generateWelcomeMessage(name) {
    return `Welcome to our service, ${name}! We are excited that you signed up!`
};

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+$/;
    return emailPattern.test(email);

}

class Customer {
    constructor(name, email, createdBy) {
        //validate email address
        if (!isValidEmail(email)) {
            console.log(`Invalid email for ${name}, "${email}"`);
            throw new Error("Customer creation failed due to invalid email");
        }
        this.name = name;
        this.email = email;
        this.status = "New";
        this.createdBy = createdBy;
    }

    //Method 1: Calls an external helper funciton
    sendWelcomeEmail() {
        const message = generateWelcomeMessage(this.name);
        console.log(`Sending email to ${this.email}`);
        console.log(message);
    }

    //Method 2: A method that calls another method within a class
    onboardCustomer() {
        this.sendWelcomeEmail(); //use Method 1
        this.status = "Active" //update the internal status
        console.log(`${this.name} is now marked as ${this.status}`);
        console.log(`Created by: ${this.createdBy}`);
    }
}

//Create a new customer
try {
    const customer1 = new Customer("Sarah", 'sarah@mail.com', 'dpeters');
    customer1.onboardCustomer();
} catch (err) {
    console.log("Could not create new customer")
}

//console.log(customer1)
const customer2 = new Customer("Derek", "derek@mail.com", "jcortinas");
console.log(customer2)

customer2.onboardCustomer();
console.log(customer2);

class AccountManager {
    constructor(name, region) {
        this.name = name;
        this.region = region;
        this.customers = [];
    }

    addCustomer (customer) {
        this.customers.push(customer);
        console.log(`${customer.name} has been assigned to ${this.name}`);
    }
}

const manager1 = new AccountManager("Michael", "East Coast");

//manager1.addCustomer(customer1);
console.log(manager1)
manager1.addCustomer(customer2);

//Immutable Example
const email1 = "user@email.com"
let email2 = email1; //This is a copy not the actual email1

email2 = "admin@emaill"

console.log(email1) //immutable
console.log(email2) // this one was mutable

// mutable example
const customerA = {name: "Chris"}
const customerB = customerA //This is not a copy, this is the actual value this is an object

customerB.name = "Eli"

console.log(customerA.name);
console.log(customerB.name);

