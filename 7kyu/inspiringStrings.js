/* Inspiring Strings */

/*
When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

Example:
> 'red white blue' //returns string value of white
> 'red blue gold' //returns gold
*/

/*
P - One argument as a string.
R - String representing the longest word within the given argument.
E - 
longestWord("a b c d e fgh")    // "fgh"
longestWord("one two three")    // "three"
longestWord("red blue grey")    // "grey"
P - 
function longestWord(stringOfWords) {
  // Create a variable to store the longest word as a string.
  // Split the given string into an array of words.
  // Iterate through the array.
  // Compare the length of the current element with the stored longest word.
  // If the current element is longer or equal in length, assign it to the created variable.
  // Return the longest word as a string.
}
*/

function longestWord(stringOfWords) {
  let word = "";
  let arrayOfWords = stringOfWords.split(" ");
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length >= word.length) {
      word = arrayOfWords[i];
    }
  }

  return word;
}

// Alternate solution: 
// const longestWord = str => str.split(" ").sort((b, a) => b.length - a.length).pop();

// Test: 
// console.log(longestWord("a b c d e fgh"))
// console.log(longestWord("one two three"))
// console.log(longestWord("red blue grey"))
