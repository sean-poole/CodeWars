/* Get Nth Even Number */

/*
Return the Nth Even Number

Example(Input --> Output): 
1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466

The input will not be 0.
*/

/*
P - One argument as an integer. Will always be > 0.
R - Integer representing the nth even number starting from 0.
E - 
nthEven(1)    // 0
nthEven(3)    // 4
P - 
function nthEven(n) {
  // Multiply the given integer by 2, then subtract 2.
  // Return integer.
}
*/

const nthEven = n => n * 2 - 2;

// Test: 
// console.log(nthEven(1))
// console.log(nthEven(2))
// console.log(nthEven(3))
// console.log(nthEven(100))
// console.log(nthEven(1298734))
