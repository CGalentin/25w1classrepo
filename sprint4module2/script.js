//Data types: strings, numbers, boolean
// "hello"
// 5 3.14
// true, false

let num = 5;
let str = String(num)
console.log(num)
console.log(str)

console.log(typeof num);

let txt = "10";
let convert = Number(txt);

console.log(typeof convert)

//create function that returns "Welcome" if the input is "admin" otherwise return "Access denied"
function checkUser(username){
    if (username === "admin") {
        return "Welcome"
    } else {
        return "Access Denied"
    }
}

console.log(checkUser("admin"))
console.log(checkUser("guest"))

//Write a function that takes a string if the string is "yes" return "confirmed", otherwise "denied"

function confirmResponse(response) {
    if (response === "yes") {
        return "confirmed"
    } else {
        return "denied"
    }
}

console.log(confirmResponse("yes"));
console.log(confirmResponse("gym"));

//Write a function that takes a number. If number is even return "Even" if it's odd retun "Odd"
function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

console.log(evenOrOdd(11))
console.log(evenOrOdd(6))

/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.*/

var isValid = function(s) {
    let stack = [];
    let pairs = {
        ')': '(',
        '}' : '{',
        ']' : '['
    }

    //Loop through each character in the string
    for (let char of s) {
        //if it is an opening bracket, push to stack array
        if (char === '(' || char === "[" || char === "{") {
            stack.push(char);
        }
        //if it is a closing bracket, push to the array
        else if (char === ')' || char === "]" || char === '}') {
            //Pop the last item from the array and check if it matches
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
       
    }
     //if array is empty, all brackets matched
     return stack.length === 0;
}


// var isValid = function(s) {
//     let stack = [];
//     let pairs = {
//         ')': '(',
//         '}' : '{',
//         ']' : '['
//     }

//     //Loop through each character in the string
    
//     for (let char of s) {
//         if (pairs[char]) {
//             if (stack.pop() !== pairs[char]) return false
//         } else {
//             stack.push(char);
//         }
//     }
//     return stack.length === 0;
// };

console.log(isValid("()")); // true
console.log(isValid("() [] {}" )) //true
console.log(isValid("(]")) //false
console.log(isValid("([}")) //false
//console.log(isValid("{[]}")) //true