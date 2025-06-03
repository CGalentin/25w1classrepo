const color = ["red", "blue"];
console.log(color);
color.push("green");
console.log(color);

color.push("yellow", "orange", "pink");
console.log(color);

const tasks = ["build", "test", "deploy"];
console.log(tasks);
const lastTask = tasks.pop();
console.log(tasks);
console.log(lastTask);
tasks.pop();
console.log(tasks);

const cities = ["Nashville", "Atlanta", "Baltimore", "Chicago"];

const city = cities.slice(0, 2);

console.log(city);
console.log(cities);

const animals = ["cat", "dog","bird", "t-rex", "big foot"];

const animal = animals.indexOf("big foot");

console.log(animal);

const originalArray = [1, 2, 3, 4];
    /*
    PROBLEM 1:
    Copy the above array named originalArray into another array named newArray, using slice and log both arrays to the console.
    */
    //ENTER YOUR CODE HERE
    const newArray = originalArray.slice();
    console.log("Orginal Array", originalArray);
    console.log("New Array", newArray);

    /*
    PROBLEM 2:
    Using slice, log to the console an array that only includes the last two elements of the above array named originalArray so the output should be [3, 4]
    */
    //ENTER YOUR CODE HERE
    const lastTwo = originalArray.slice(-2);
    console.log("Last Two Elements", lastTwo)

     /*
    PROBLEM 3:
    Using slice, log to the console an array that only includes the two elements in the middle of the above array named originalArray so the output should be [2, 3]
    */
    //ENTER YOUR CODE HERE
    const middleTwo = originalArray.slice(1,3);
    console.log("Middle Two", middleTwo)

    

    /*
    PROBLEM 4:
    Using slice, log to the console an array that only includes the last element in the above array named originalArray so the output should be [4]
    */
    //ENTER YOUR CODE HERE
    const lastElement = originalArray.slice(-1);
    console.log("Last Element", lastElement);

    /*
    PROBLEM 5 (DEBUGGING):
    The following code is throwing this error: "TypeError: numbers.slice is not a function". Fix the error so that the console prints “12345”.
    let numbers = 1234567;
    console.log(numbers.slice(-1, 5));
    */
    let numbers = "1234567";
    console.log(numbers.slice(0,5));

    const arrayTest = ["test1", "test2", "test3", "test4", "test5", "test6", "test7"];

    const test = arrayTest.slice(0,4)
    console.log(test)

    // Index:   0      1      2      3      4       5    6
    // Array: test1, test2, test3, test4, test5, test6, test7
