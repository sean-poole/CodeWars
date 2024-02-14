/* Character Counter */

/*
You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.

Examples: 
> "abcabc" is a valid word because "a" appears twice, "b" appears twice, and"c" appears twice.
> "abcabcd" is NOT a valid word because "a" appears twice, "b" appears twice, "c" appears twice, but "d" only appears once!
> "123abc!" is a valid word because all of the characters only appear once in the word.
*/

/*
P - One argument as a string.
R - Boolean representing if each character in the given string has the same number of occurrences.
E - 
validateWord("abcabc")    // true
validateWord("Abcabc")    // true
validateWord("abc123")    // true
validateWord("abcabcd")   // false
validateWord("abc!abc!")  // true
validateWord("abc:abc")   // false
P - 
function validateWord(s) {
  // Create a variable to store the given string as lowercase and split into an array of letters.
  // Create an empty object variable to store the given string's letter count.
  // Iterate through the created array.
  // If the current element is in the created object, increase its count by 1.
  // Else, create a new key of the current element and set its initial value to 1.
  // Create a variable to store the values of each key within the created object as an array.
  // Evaluate if every element in the array is equal and return boolean.
}
*/

function validateWord(s) {
  let arr = s.toLowerCase().split("");
  let char = {};

  for (c of arr) {
    c in char ? char[c] += 1 : char[c] = 1;
  }

  let result = Object.values(char);
  return result.every(e => e === result[0]);
}

// Test: 
// console.log(validateWord("abcabc"))
// console.log(validateWord("Abcabc"))
// console.log(validateWord("abc123"))
// console.log(validateWord("abcabcd"))
// console.log(validateWord("abc!abc!"))
// console.log(validateWord("abc:abc"))
