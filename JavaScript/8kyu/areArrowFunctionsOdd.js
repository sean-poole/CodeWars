/* Are Arrow Functions Odd? */

/*
Time to test your basic knowledge in functions! Return the odds from a list:
> [1, 2, 3, 4, 5]  -->  [1, 3, 5]
> [2, 4, 6]        -->  []
*/

/*
P - One argument as an array of integers.
R - Array containing odd integers from the given array.
E - 
odds([])                    // []
odds([2, 4, 6])             // []
odds([1, 3, 5])             // [1, 3, 5]
odds([1, 2, 3, 4, 5, 6])    // [1, 3, 5]
P - 
function odds(values) {
  // Filter the given array for odd integers.
  // Return array.
}
*/

const odds = values => values.filter(n => n % 2);

// Test: 
// console.log(odds([]))
// console.log(odds([2, 4, 6]))
// console.log(odds([1, 3, 5]))
// console.log(odds([1, 2, 3, 4, 5, 6]))
