/* Word Values */

/*
Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.

You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.

nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

"abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

Input will only contain lowercase characters and spaces.

Good luck!
*/

/*
P - One argument as an array of strings.
R - Array of integers representing the value of each element in the given array.
E - 
wordValue(["codewars", "abc", "xyz"])             // [88, 12, 225]
wordValue(["abc abc", "abc abc", "abc", "abc"])   // [12, 24, 18, 24]
P - 
function wordValue(a) {
  // Iterate through the given array.
  // Split each string into its own array.
  // Iterate through the sub array and map each letter to its integer position in the alphabet.
  // Reduce the array to get the integer value of each word.
  // Multiply each value by its position in the original array.
  // Return array of integers.
}
*/

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const wordValue = a => a.map((word, index) => word.split("").map(c => alphabet.indexOf(c) + 1).reduce((acc, c) => acc += c, 0) * (index + 1))

// Test: 
// console.log(wordValue(["codewars", "abc", "xyz"]))
// console.log(wordValue(["abc abc", "abc abc", "abc", "abc"]))
