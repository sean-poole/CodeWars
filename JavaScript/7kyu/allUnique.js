/* All Unique */

/*
Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
*/

/*
P - One argument as a string. May contain any of the 128 ASCII characters. Characters are case-sensitive and considered different characters.
R - Boolean if each character in the given string is unique.
E - 
hasUniqueChars("abcdef")        // true
hasUniqueChars("aA")            // true
hasUniqueChars("++-")           // false, two "+" characters
P - 
function hasUniqueChars(str) {
    // Split the string into an array with each element representing a character.
    // Iterate through the array to compare indexOf and lastIndexOf values.
    // If they are equal, the character is unique.
    // Else there are duplicates.
    // Return boolean result.
}
*/

const hasUniqueChars = str => str.split("").every(e => str.indexOf(e) === str.lastIndexOf(e));

// Test: 
// console.log(hasUniqueChars("  nAa"))
// console.log(hasUniqueChars("abcdef"))
// console.log(hasUniqueChars("aA"))
// console.log(hasUniqueChars("++-"))
