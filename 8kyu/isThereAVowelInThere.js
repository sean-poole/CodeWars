/* Is There A Vowel In There? */

/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/

/*
P - One argument as an array containing integers.
R - Array with character codes that are vowels being replaced with their string representation.
E - isVow([101,121,110,113,113,103,121,121,101,107,103])        // ["e",121,110,113,113,103,121,121,"e",107,103]
P - 
function isVow(a) {
    // Iterate through the array.
    // Compare character codes with character codes of vowels: a, e, i, o, u.
    // If the element is a vowel, reassign the element with a vowel as a string.
    // Return the array.
}
*/

const vowelCodes = ["a", "e", "i", "o", "u"].map(e => e.charCodeAt());

const isVow = a => a.map(e => vowelCodes.includes(e) ? String.fromCharCode(e) : e);

// Test: 
// console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))
// console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]))
