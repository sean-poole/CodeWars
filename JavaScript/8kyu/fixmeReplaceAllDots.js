/* FIXME: Replace All Dots */

/*
The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task: 
Fix the bug so we can all go home early.

Notes: 
String str will never be null.
*/

/*
P - One argument as a string.
R - Given string with "." replaced with "-"
E - replaceDots("one.two.three")    // "one-two-three"
P - 
function replaceDots(str) {
  // Apply replaceAll method to the given string.
  // Return string.
}
*/

const replaceDots = str => str.replaceAll(".", "-");

// Test: 
// console.log(replaceDots("one.two.three"))
