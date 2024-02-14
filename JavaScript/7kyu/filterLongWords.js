/* Filter Long Words */

/*
Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

Example:
> With input "The quick brown fox jumps over the lazy dog", 4
> Return ['quick', 'brown', 'jumps']
*/

/*
P - One argument as a string and one argument as an integer.
R - Array of string elements representing the words within the given string with a length longer than the given integer.
E - filterLongWords("The quick brown fox jumps over the lazy dog", 4)
// ["quick", "brown", "jumps"]
P - 
function filterLongWords(sentence, n) {
  // Split the given string into an array of words.
  // Filter the array for words of length greater than the given integer.
  // Return array of string elements.
}
*/

function filterLongWords(sentence, n) {
  return sentence.split(" ").filter(word => word.length > n);
}

// Test: 
// console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4))
