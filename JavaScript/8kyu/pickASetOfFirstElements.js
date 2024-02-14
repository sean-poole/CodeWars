/* Pick A Set Of First Elements */

/*
Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

If n == 0 return an empty sequence []

Examples: 
var arr = ['a', 'b', 'c', 'd', 'e'];
> first(arr) //=> ['a'];
> first(arr, 2) //=> ['a', 'b'];
> first(arr, 3) //=> ['a', 'b', 'c'];
> first(arr, 0) //=> [];
*/

/*
P - Two arguments: one array of strings, one integer. Second argument is optional.
R - Array of strings representing the first n elements of the given array.
E - 
first(arr)          // ["a"]
first(arr, 2)       // ["a", "b"]
first(arr, 0)       // []
P - 
function first(arr, n) {
    // Set "n = 1" as default second argument.
    // Slice the array from the beginning to n.
    // Return array.
}
*/

const first = (arr, n = 1) => arr.slice(0, n);

// Test: 
const arr = ["a", "b", "c", "d", "e"];

// console.log(first([...arr]))
// console.log(first([...arr], 2))
// console.log(first([...arr], 0))
