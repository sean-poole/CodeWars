/* Contamination #01 - Strings */

/*
An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

Example: 
text before = "abc"
character   = "z"
text after  = "zzz"
*/

/*
P - Two arguments as strings.
R - String representing the first argument's characters replaced with the second argument.
E - 
contamination("abc", "z")         // "zzz"
contamination("", "z")            // ""
contamination("abc", "")          // ""
contamination("_3ebzgh4", "&")    // "&&&&&&&&"
contamination("//case", " ")      // "      "
P - 
function contamination(text, char) {
  // Split the first string argument into an array.
  // Iterate through the array and replace each element with the second string argument.
  // Join the array.
  // Return formatted string.
}
*/

const contamination = (text, char) => text.split("").map(c => char).join("");

// Alternate solution: 
// const contamination = (text, char) => char.repeat(text.length);

// Test: 
// console.log(contamination("abc", "z"))
// console.log(contamination("", "z"))
// console.log(contamination("abc", ""))
// console.log(contamination("_3ebzgh4", "&"))
// console.log(contamination("//case", " "))
