/* Return String of First Characters */

/*
In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

For example:
> "This Is A Test" ==> "TIAT"

Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.
*/

/*
P - One argument as a string.
R - String representing the first letter of each word in the given string.
E - makeString("This Is A Test")    // "TIAT"
P - 
function makeString(s) {
  // Split the given string into an array of words.
  // Iterate through the array.
  // Map each element to only contain the first letter of its respective word.
  // Join the array.
  // Return string.
}
*/

const makeString = s => s.split(" ").map(e => e[0]).join("");

// Test: 
// console.log(makeString("sees eyes xray yoat"))
// console.log(makeString("brown eyes are nice"))
// console.log(makeString("cars are very nice"))
// console.log(makeString("kaks de gan has a big head"))
