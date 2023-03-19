/* Exclamation Marks Series #1: Remove An Exclamation Mark From The End Of String */

/*
Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"
*/

/*
P - String.
R - Given string with a single exclamation mark removed from the end.
E - 
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
P - 
function remove(string) {
    // Check if string ends with "!"
    // Remove it, otherwise return the given string.
}
*/

const remove = string => string.endsWith("!") ? string.slice(0, -1) : string;

// Alternate solution: 
// const remove = string => string.replace(/!$/, "");

// Test: 
// console.log(remove("Hi!"))
// console.log(remove("Hi!!!"))
// console.log(remove("!Hi"))
// console.log(remove("!Hi!"))
// console.log(remove("Hi! Hi!"))
// console.log(remove("Hi"))
