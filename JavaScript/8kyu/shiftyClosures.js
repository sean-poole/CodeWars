/* Shifty Closures */

/*
Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?
*/

/*
P - One argument as a string.
R - String formatted as `Hello, ${name}!`
E - 
greet_abe   // "Hello, Abe!"
greet_ben   // "Hello, Ben!"
P - 
let name = "Abe";
const greet_abe = function() {
  return "Hello, " + name + "!";
}

name = "Ben";
const greet_ben = function() {
  return "Hello, " + name + "!";
}
*/

function greet(name) {
  return function() {
    return `Hello, ${name}!`; 
  }
}

const greet_abe = greet("Abe");
const greet_ben = greet("Ben");

// Test: 
// console.log(greet_abe)
// console.log(greet_ben)
