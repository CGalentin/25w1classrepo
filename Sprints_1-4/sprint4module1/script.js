//Easy
//1. Double a integer
function double (int){
    return int * 2;
}

console.log(double(5));

//2. Add two numbers
function sum (a, b) {
    return a + b
}

console.log(sum(3,7))

//3. Convert mins to seconds

function toSeconds (minutes) {
    return minutes * 60
}

console.log(toSeconds(3));

//4. Calculate Area of a Rectangle
function area(length, width) {
return length * width
}

console.log(area(5,3))
//Medium
//5. Check if number is even
function isEven(num) {
    return num % 2 === 0
}

console.log(isEven(7))

console.log(isEven(6))

console.log(isEven(9))

//6. Find the remainder
function remainder(a, b) {
    return a % b;
}

console.log(remainder(10, 3));

//Celsius to Farenheit Converter
function toFarenheit (celcius) {
    return (celcius * 9/5) + 32;
}

console.log(toFarenheit(2));

//Harder

//7. Return the larger of two numbers

function max (a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}

console.log(max(9,5));
console.log(max(5,9));

//8. Sum and double 
function sumAndDouble (a, b) {
    return (a + b) * 2;
}

console.log(sumAndDouble(3,4))

//9. Absolute Difference from 21. Return the absolute difference between n and 21. If n is greater than 21, return double the absolute difference

function diff21(n){
    if (n > 21) {
        return (n - 21) * 2
    } else {
        return 21 - n
    }
}

console.log(diff21(19))
console.log(diff21(31))