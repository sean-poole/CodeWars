/* Check Three and Two */

/*
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples: 
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/

/*
P - One argument as an array with 5 elements of single character strings (a, b, c).
R - Boolean representing if the array contains three and two of the same values.
E - 
checkThreeAndTwo(["a", "a", "a", "b", "b"])   // true
checkThreeAndTwo(["a", "c", "a", "c", "b"])   // false
checkThreeAndTwo(["a", "a", "a", "a", "a"])   // false
P - 
function checkThreeAndTwo(array) {
  // Create an object variable to store the count of letter occurrences.
  // Iterate through the given array.
  // Increase a letter's count within the object for each appearance as an element.
  // Create an array variable to store the integer values of the created object.
  // Check if the created array contains a 3 and a 2.
  // Return boolean.
}
*/

function checkThreeAndTwo(array) {
  let letters = { a: 0, b: 0, c: 0};
  for (letter of array) {
    letters[letter] += 1;
  }

  const count = Object.values(letters);
  return count.includes(3) && count.includes(2);
}

// Test: 
// console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]))
// console.log(checkThreeAndTwo(["a", "c", "a", "c", "b"]))
// console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"]))
