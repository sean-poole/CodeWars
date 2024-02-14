/* Is Every Value in the Array an Array */

/*
Is every value in the array an array?

This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

Examples:
> [[1],[2]] => true
> ['1','2'] => false
> [{1:1},{2:2}] => false
*/

/*
P - One argument as an array containing elements of various data types.
R - Boolean representing if the given array's elements are array data types.
E - 
arrCheck([])                          // true
arrCheck([["string"]])                // true
arrCheck([[], {}])                    // false
arrCheck([[1], [2], [3]])             // true
arrCheck(["A", "R", "R", "A", "Y"])   // false
P - 
function arrCheck(value) {
  // Iterate through the given array's elements.
  // Apply Array.isArray method to each element.
  // If the evaluation returns false, return false.
  // Else, continue iterating through the array.
  // If an evaluation of false is never met, return true.
}
*/

function arrCheck(value) {
  for (let i = 0; i < value.length; i++) {
    if (!Array.isArray(value[i])) {
      return false;
    }
  }

  return true;
}

// Alternate solution: 
// const arrCheck = value => value.every(Array.isArray);

// Test: 
// console.log(arrCheck([]))
// console.log(arrCheck([["string"]]))
// console.log(arrCheck([[], {}]))
// console.log(arrCheck([[1], [2], [3]]))
// console.log(arrCheck(["A", "R", "R", "A", "Y"]))
