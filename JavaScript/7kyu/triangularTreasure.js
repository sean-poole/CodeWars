/* Triangular Treasure */

/*
Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
You need to return the nth triangular number. You should return 0 for out of range values:

For example: (Input --> Output)
0 --> 0
2 --> 3
3 --> 6
-10 --> 0
*/

/* 
P - One argument as an integer.
R - Integer representing the nth triangular number. Return 0 for out of range values.
E - 
triangular(2)     // 3
triangular(4)     // 10
P - 
function triangular(n) {
  // Create empty integer variable to store triangular number.
  // Create a for loop that decrements from the given integer to 1.
  // Add the current triangular number to the created variable.
  // Return integer.
}
*/

function triangular(n) {
  let triangle = 0;
  for (let i = n; i > 0; i--) {
    triangle += i;
  }

  return triangle;
}

// Alternate solution: 
// const triangular = n => n > 0 ? ((n * n) + n) / 2 : 0;

// Test: 
// console.log(triangular(2))
// console.log(triangular(4))
// console.log(triangular(-454))
