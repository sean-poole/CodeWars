/* String Merge */

/*
Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

Examples: 
("hello", "world", "l")       ==>  "held"
("coding", "anywhere", "n")   ==>  "codinywhere"
("jason", "samson", "s")      ==>  "jasamson"
("wonderful", "people", "e")  ==>  "wondeople"
*/

/*
P - Three arguments as strings.
R - String representing the first two string arguments joined together at a the third string argument as a letter.
E - 
stringMerge("hello", "world", "l")        // "held"
stringMerge("coding", "anywhere", "n")    // "codinywhere"
stringMerge("jason", "samson", "s")       // "jasamson"
stringMerge("wonderful", "people", "e")   // "wondeople"
P - 
function stringMerge(s1, s2, letter) {
  // Create a string variable that contains the first string argument up to the given letter.
  // Create a string variable that contains the second string argument starting from the given letter.
  // Concatenate the two variables.
  // Return string.
}
*/

function stringMerge(s1, s2, letter) {
  let first = s1.slice(0, s1.indexOf(letter));
  let second = s2.slice(s2.indexOf(letter));

  return first + second;
}

// Alternate solution: 
// const stringMerge = (s1, s2, letter) => {
//   return s1.slice(0, s1.indexOf(letter)) + s2.slice(s2.indexOf(letter));
// }

// Test: 
// console.log(stringMerge("person","here", "e"))
// console.log(stringMerge("apowiejfoiajsf","iwahfeijouh", "j"))
// console.log(stringMerge("abcdefxxxyzz","abcxxxyyyxyzz", "x"))
// console.log(stringMerge("12345654321","123456789", "6"))
// console.log(stringMerge("JiOdIdA4","oopopopoodddasdfdfsd", "d"))
// console.log(stringMerge("incredible","people", "e"))
