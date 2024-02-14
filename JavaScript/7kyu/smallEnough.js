/* Small Enough? - Beginner */

/*
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/

const smallEnough = (array, n) => array.every(e => e <= n);

// Alternate solution: 
// const smallEnough = (array, n) => Math.max(...array) <= n;

// Test: 
// console.log(smallEnough([66, 101], 200))
// console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))
// console.log(smallEnough([101, 45, 75, 105, 99, 107], 107))
// console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120))
