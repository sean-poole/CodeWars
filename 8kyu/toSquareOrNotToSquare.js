/* To Square (Root) Or Not To Square (Root) */

/*
Write a method, that will get an integer array as parameter and will process every number from this array.
Return a new array with processing every number of the input-array like this:
If the number has an integer square root, take this, otherwise square the number.

Example: 
[4,3,9,7,2,1] -> [2,9,3,49,4,1]

Notes: 
The input array will always contain only positive numbers, and will never be empty or null.
*/

/*
P - Array of integers.
R - Array of integers where if the element at an index of the given array has a square root, return the square root. Otherwise, square the number.
E - squareOrSquareRoot([4, 3, 9, 2, 7, 1])      // [2, 9, 3, 49, 4, 1];
P - 
function squareOrSquareRoot(array) {
    // Iterate through the array.
    // Conditional to check if the element at array[index] has a square root.
    // If it does, return it.
    // Else, square the element.
}
*/

const squareOrSquareRoot = array => array.map(num => Math.sqrt(num) % 1 === 0 ? Math.sqrt(num) : Math.pow(num, 2));

// Test: 
// console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]))
// console.log(squareOrSquareRoot([100, 101, 5, 5, 1, 1]))
// console.log(squareOrSquareRoot([1, 2, 3, 4, 5, 6]))
