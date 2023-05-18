/* Search For Letters */

/*
Create a function which accepts one arbitrary string as an argument, and return a string of length 26.

The objective is to set each of the 26 characters of the output string to either '1' or '0' based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).

So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character to '1', and so on for the rest of the alphabet.

For instance:
> "a   **&  cZ"  =>  "10100000000000000000000001"
*/

/*
P - One argument as a string.
R - String representing a number with "1" in the alphabetical position of a character in the given string and "0" to fill the rest.
E - change("a **&  bZ")     // "11000000000000000000000001"
P - 
function change(string) {
  // Create an empty array variable.
  // Iterate through the letters of the alphabet.
  // If the current letter is in the given string, push 1 to the created array.
  // Else, push 0 to the created array.
  // Join the array and return a string.
}
*/

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function change(string) {
  let result = [];
  for (letter of alphabet) {
    string.toLowerCase().includes(letter) ? result.push(1) : result.push(0);
  }

  return result.join("");
}

// Test: 
// console.log(change("a **&  bZ"))
