/* Count Consonants */

/*
Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
*/

/*
P - One argument as a string.
R - Integer representing the number of consonants in the given string.
E - 
consonantCount("aeiou")                   // 0
consonantCount("bcdfghjklmnpqrstvwxyz")   // 21
P - 
function consonantCount(str) {
  // Split the given string into an array where each element represents a character.
  // Iterate through the array and filter elements that are not included in "aeiou".
  // Count the length of the filtered array.
  // Return as integer.
}
*/

const alphabet = "abcdefghijklmnopqrstuvwxyz"

const consonantCount = str => str.split("").filter(e => alphabet.includes(e.toLowerCase()) && !"aeiou".includes(e.toLowerCase())).length;

// Alternate solution: 
// const consonantCount = str => str.replace(/[^a-z]|[aeiou]/gi, "").length;

// Test: 
// console.log(consonantCount(""))
// console.log(consonantCount("aeiou"))
// console.log(consonantCount("bcdfghjklmnpqrstvwxyz"))
// console.log(consonantCount("01234567890_"))
