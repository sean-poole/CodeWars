/* Find The Missing Letter */

/*
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'

(Use the English alphabet with 26 letters!)
*/

/*
P - One argument as an array of single character strings. Array will always contain at least 2 elements. Casing will be consistent throughout the array.
R - String representing the missing letter from the sequence of letters in the given array.
E - 
findMissingLetter(["a", "b", "c", "d", "f"])    // "e"
findMissingLetter(["O", "Q", "R", "S"])         // "P"
P - 
function findMissingLetter(array) {
  // Create a string variable that stores lowercase and uppercase alphabet.
  // Create an integer variable to store the index the given array's first element within the alphabet.
  // Create a string variable to store a substring of the alphabet starting from the previously defined index for array.length.
  // Iterate through the given array and compare elements with the alphabet substring.
  // If the elements at the same index do not match, return the letter from the alphabet substring (missing letter).
}
*/

function findMissingLetter(array) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let startPoint = alphabet.indexOf(array[0]);
  let compare = alphabet.slice(startPoint, startPoint + array.length);

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== compare[i]) return compare[i];
  }
}

// Alternate solution: 
// function findMissingLetter(array) {
//   let startPoint = array[0].charCodeAt(0);
//   for (let i = 1; i < array.length; i++) {
//     if (startPoint + i !== array[i].charCodeAt(0)) {
//       return String.fromCharCode(startPoint + i);
//     }
//   }
// }

// Test: 
// console.log(findMissingLetter(["a", "b", "c", "d", "f"]))
// console.log(findMissingLetter(["O", "Q", "R", "S"]))
