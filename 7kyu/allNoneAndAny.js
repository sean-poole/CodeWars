/* All, None & Any */

/*
As a part of this Kata, you need to create three functions that one needs to be able to call upon an array:

all

This function returns true only if the predicate supplied returns true for all the items in the array [1, 2, 3].all(isGreaterThanZero) => true [-1, 0, 2].all(isGreaterThanZero) => false

none

This function returns true only if the predicate supplied returns false for all the items in the array [-1, 2, 3].none(isLessThanZero) => false [-1, -2, -3].none(isGreaterThanZero) => true

any

This function returns true if at least one of the items in the array returns true for the predicate supplied [-1, 2, 3].any(isGreaterThanZero) => true [-1, -2, -3].any(isGreaterThanZero) => false

You do not need to worry about the data supplied, it will be an array at all times.
*/

/*
P - One argument as an array of integers.
R - Boolean representing the evaluation of the applied function to each element in the given array.
E - 
[1, 2, 3].all(isGreaterThanZero)    // True
[-1, 2, 3].none(isLessThanZero)     // False
[-1, 2, 3].any(isGreaterThanZero)   // True
P - 
Array.prototype.all = function(p) {
  // Check if all elements in the array return true to the applied function.
}

Array.prototype.none = function(p) {
  // Check if none of the elements in the array return true to the applied function.
}

Array.prototype.any = function(p) {
  // Check if any of the elements in the array return true to the applied function.
}
*/

Array.prototype.all = function(p) {
  return this.filter(p).length === this.length;
}

Array.prototype.none = function(p) {
  return this.filter(p).length === 0;
}

Array.prototype.any = function(p) {
  return this.filter(p).length > 0;
}

// Test: 
const isGreaterThanZero = num => num > 0;
const isLessThanZero = num => num < 0;

// console.log([1, 2, 3].all(isGreaterThanZero))
// console.log(![-1, 0, 2].all(isGreaterThanZero))
// console.log([-1, 2, 3].none(isLessThanZero))
// console.log(![-1, -2, -3].none(isGreaterThanZero))
// console.log([-1, 2, 3].any(isGreaterThanZero))
// console.log(![-1, -2, -3].any(isGreaterThanZero))
