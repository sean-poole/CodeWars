/* Ensure Question */

/*
Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output): 
"Yes" --> "Yes?" 
"No?" --> "No?"
*/

/*
P - One argument as a string.
R - String representing the given string appended with "?".
E - 
ensureQuestion("")      // "?"
ensureQuestion("Yes")   // "Yes?"
ensureQuestion("No?")   // "No?"
P - 
function ensureQuestion(s) {
  // Check the last character of the given string.
  // If it is "?", do nothing.
  // Else, append "?" to the end of the string.
  // Return string.
}
*/

const ensureQuestion = s => s.charAt(s.length - 1) === "?" ? s : `${s}?`;

// Test: 
// console.log(ensureQuestion(""))
// console.log(ensureQuestion("Yes"))
// console.log(ensureQuestion("No?"))
