/* Say Hello */

/*
Say hello!

Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.

Example:
> greet("Niks") === "hello Niks!";
> greet("") === null; // Return null if input is empty string
> greet(null) === null; // Return null if input is null
*/

/*
P - One argument as a string.
R - String representing a greeting using the given string, or null if the input is empty.
E - 
greet("Niks")   // "hello Niks!"
greet("null")   // null
P - 
function greet(name) {
  // Verify that a string is being passed in as an argument.
  // If the input is valid, format and return a greeting string.
  // Else, return null.
}
*/

const greet = name => name ? `hello ${name}!` : null;

// Test:
// console.log(greet("Niks"))
// console.log(greet(null))
