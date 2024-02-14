/* Simple Pig Latin */

/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples: 
> pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
> pigIt('Hello world !');     // elloHay orldway !
*/

/*
P - One argument as a string.
R - String representing the given string with the first letter moved to the end, followed by "ay".
E - pigIt("Pig latin is cool")    // "igPay atinlay siay oolcay"
P - 
function pigIt(str) {
  // Split the given string into an array where each element is a word.
  // Iterate through the array.
  // Map each word to move the first letter to the end. Then add "ay" to the end.
  // If the element is a number or special character, return the word.
  // Join the array.
  // Return string.
}
*/

const pigIt = str => str.split(" ").map(word => /^[a-zA-Z]+$/.test(word) ? word.slice(1) + word[0] + "ay" : word).join(" ");

// Test: 
// console.log(pigIt("Pig latin is cool"))
// console.log(pigIt("This is my string"))
