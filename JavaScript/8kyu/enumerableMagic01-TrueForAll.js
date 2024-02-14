/* Enumerable Magic #01 - True For All? */

/*
Task: 
Create a method all which takes two params:
> a sequence
> a function (function pointer in C)

and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

Example: 
> all((1, 2, 3, 4, 5), greater_than_9) -> false
> all((1, 2, 3, 4, 5), less_than_9)    -> True
*/

/*
P - Two arguments: one array of integers, one function
R - Boolean representing if every element of the given array returns true in the given function.
E - 
all([1, 2, 3, 4, 5], function(v) { return v < 9 })      // true
all([1, 2, 3, 4, 5], function(v) { return v > 9 })      // false
P - 
function all(arr, fun) {
    // Pass each element of the array into the function.
    // Check if each result returns true.
    // Return boolean.
}
*/

const all = (arr, fun) => arr.every(n => fun(n));

// Test: 
// console.log(all([1, 2, 3, 4, 5], function(v) { return v < 9 }))
// console.log(all([1, 2, 3, 4, 5], function(v) { return v > 9 }))
