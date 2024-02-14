/* Digital Root */

/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples: 
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

/* 
P - One argument as an integer.
R - Integer representing the recursive sum of digits until a single-digit number is produced.
E - digitalRoot(16)   // 7
P - 
function digitalRoot(n) {
  // While the given number contains more than 1 digit, add the sum of its digits and pass the integer into the function.
  // When the sum is a single digit integer, return it.
}
*/

function digitalRoot(n) {
  while (n > 9) {
    n = n.toString().split("").reduce((acc, c) => acc += +c, 0);
    digitalRoot(n);
  }

  return n;
}

// Alternate solution: 
// const digitalRoot = n => (n - 1) % 9 + 1;

// Test: 
// console.log(digitalRoot(16))
// console.log(digitalRoot(456))
