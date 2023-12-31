// Declaring variables and constant

let firstName = "Md Saiedur Rahman";
let lastName = "Saied";
const id = '222015**'

// print variables and constant 

console.log(firstName, lastName);
console.log(id);

// Declare Array

let randomThings = [1 , 2, 3, 5, 6, 2234, '0384u'];

// print array 

console.log(randomThings);

// add data on Array

randomThings.push("Saied");

// delete data from Array 

randomThings.pop();

// remove specific data from Array 

randomThings.splice(3, 1);
console.log(randomThings);

// see tha type of any data structure 

console.log(typeof randomThings);


// Array Spread operator 

console.log(...randomThings);


// How to work with Spread

const anotherRandomThings = [randomThings];
console.log(anotherRandomThings);
console.log(...anotherRandomThings);


// Object Destructuring 

const [I, Am, Saied] = randomThings;
console.log(I, Am, Saied)

