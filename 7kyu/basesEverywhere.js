/* Bases Everywhere */

/*
Uh oh, Someone at the office has dropped all these sequences on the floor and forgotten to label them with their correct bases.
We have to fix this before the boss gets back or we're all going to be fired!
This is what your years of coding have been leading up to, now is your time to shine!

Task: 
You will have to create a function which takes in a sequence of numbers in random order and you will have to return the correct base of those numbers.
The base is the number of unique digits. For example, a base 10 number can have 10 unique digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 and a base 2 number (Binary) can have 2 unique digits: 0 and 1.

Constraints: 
The sequence will always be 10 numbers long and we know that the base is going to be between 2 and 10 inclusive so no need to worry about any letters. When sorted, the sequence is made up of consecutive numbers.

Examples: 
[ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ]     -->  10
[ "1", "2", "3", "4", "5", "6", "10", "11", "12", "13" ]  -->   7
*/

/*
P - One argument as an array of strings. Array will always contain 10 elements. Strings will always be a base number.
R - Integer representing the number of unique digits in the given array.
E - 
baseFinder(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"])     // 10
baseFinder(["1", "2", "3", "4", "5", "6", "10", "11", "12", "13"])  // 7
P - 
function baseFinder(seq) {
  // Create an empty array variable to store unique digits.
  // Iterate through the given array.
  // Split the current element into a subarray of digits.
  // If the created array does not contain a digit represented in the current element, push the digit to the created array.
  // Count the length of the created array.
  // Return integer.
}
*/

function baseFinder(seq) {
  let unique = [];

  for (num of seq) {
    for (digit of num.split("")) {
      if (!unique.includes(digit)) unique.push(digit);
    }
  }

  return unique.length;
}

// Alternate solution: 
// const baseFinder = seq => new Set(seq.join("")).size;

// Test: 
// console.log(baseFinder(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]))
// console.log(baseFinder(["1", "2", "3", "4", "5", "6", "10", "11", "12", "13"]))
