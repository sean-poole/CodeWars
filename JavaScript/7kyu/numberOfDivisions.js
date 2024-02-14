/* Number Of Divisions */

/*
Calculate how many times a number can be divided by a given number.

Example:
For example the number 6 can be divided by 2 two times:
1. 6 / 2 = 3
2. 3 / 2 = 1 remainder = 1

100 can be divided by 2 six times:
1. 100 / 2 = 50
2. 50 / 2 = 25
3. 25 / 2 = 12 remainder 1
4. 12 / 2 = 6
5. 6 / 2 = 3
6. 3 / 2 = 1 remainder 1
*/

/*
P - Two arguments as integers.
R - Integer representing how many times the first argument can be divided by the second argument.
E - 
divisions(6, 2)     // 2
divisions(100, 2)   // 6
P - 
function divisions(n, divisor) {
  // Create a variable to store a counter as an integer.
  // While n / divisor >= 1,
  // Increment the counter and set n to n / divisor.
  // Return counter as integer.
}
*/

function divisions(n, divisor) {
  let count = 0;

  while (n / divisor >= 1) {
    count++;
    n = n / divisor;
  }

  return count;
}

// Alternate solution: 
// const divisions = (n, divisor) => Math.floor(Math.log(n) / Math.log(divisor));

// Test: 
// console.log(divisions(6, 2))
// console.log(divisions(100, 2))
// console.log(divisions(2450, 5))
// console.log(divisions(9999, 3))
// console.log(divisions(2, 3))
// console.log(divisions(5, 5))
