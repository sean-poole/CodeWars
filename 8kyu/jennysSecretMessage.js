/* Jenny's Secret Message */

/*
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?
*/

/*
P - One argument as a string.
R - "Hello, my love!" if the given string === "Johnny". Otherwise, "Hello, [name]" for all other inputs.
E - 
greet("Jim")        // "Hello, Jim!"
greet("Johnny")     // "Hello, my love!"
P - 
function greet(name) {
  // Check the value of the given string.
  // If name === "Johnny", return "Hello, my love!".
  // Else, return "Hello, ${name}!".
}
*/

const greet = name => name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`;

// Test: 
// console.log(greet("Jim"))
// console.log(greet("Jane"))
// console.log(greet("Simon"))
// console.log(greet("Johnny"))
