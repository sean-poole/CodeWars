/* Currying Functions: Multiply All Elements In An Array */

/*
To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.
The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:
multiplyAll([1, 2, 3])(2) = [2, 4, 6];

You must not mutate the original array.
*/

function multiplyAll(arr) {
    return function(n) {
        return arr.map(x => x * n);
    }
}

// Alternate solution: 
// const multiplyAll = arr => n => arr.map(x => x * n);

// Test: 
console.log(multiplyAll([1, 2, 3])(1))
console.log(multiplyAll([1, 2, 3])(2))
console.log(multiplyAll([1, 2, 3])(0))
console.log(multiplyAll([])(10))
