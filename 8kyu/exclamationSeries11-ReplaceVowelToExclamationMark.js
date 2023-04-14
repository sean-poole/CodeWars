/* Exclamation Series #11: Replace All Vowel To Exclamation Mark In The Sentence */

/*
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples: 
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

/*
P - One argument as a string. Can be uppercase or lowercase.
R - String representing the given string with vowels replaced with "!".
E - replace("ABCDE")        // "!BCD!"
P - 
function replace(s) {
    // Split the string into an array.
    // Iterate through the array and check if the character is a vowel.
    // Replace vowels with "!".
    // Join the array and return the string.
}
*/

const replace = s => s.split("").map(c => "aeiouAEIOU".includes(c) ? "!" : c).join("");

// Alternate solution: 
// const replace = s => s.replace(/[aeiou]/ig, "!");

// Test: 
// console.log(replace("Hi!"))
// console.log(replace("!Hi! Hi!"))
// console.log(replace("aeiou"))
// console.log(replace("ABCDE"))
