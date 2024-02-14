/* Triangle Type */

/*
In this kata, you should calculate the type of triangle with three given sides a, b and c (given in any order).

If each angle is less than 90°, this triangle is acute and the function should return 1.
If one angle is strictly 90°, this triangle is right and the function should return 2.
If one angle is more than 90°, this triangle is obtuse and the function should return 3.
If three sides cannot form a triangle, or one angle is 180° (which turns the triangle into a segment) - the function should return 0.

Three input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both, depending on the language).

Examples:
(2, 4, 6) ---> return 0 (Not triangle)
(8, 5, 7) ---> return 1 (Acute, angles are approx. 82°, 38° and 60°)
(3, 4, 5) ---> return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
(7, 12, 8) ---> return 3 (Obtuse, angles are approx. 34°, 106° and 40°)

If you stuck, this can help you: http://en.wikipedia.org/wiki/Law_of_cosines. But you can solve this kata even without angle calculation.
There is a very small chance of random test to fail due to round-off error, in such case resubmit your solution.
*/

/*
P - Three arguments as integers.
R - Integer representing if the given arguments make up an acute, right, obtuse, or no triangle (1, 2, 3, 0).
E - 
triangleType([7, 3, 2])     // 0
triangleType([2, 4, 6])     // 0
triangleType([8, 5, 7])     // 1
triangleType([3, 4, 5])     // 2
triangleType([7, 12, 8])    // 3
P - 
function triangleType(a, b, c) {
  // Determine the maximum value in the given arguments.
  // If the sum of all three sides is <= twice the max side length, the sides do not make a triangle.
  // If the squared max length multiplied by 2 === the sum of squares of all three sides, the sides make up a right triangle.
  // If the squared max length multiplied by 2 > the sum of squares of all three sides, the sides make up an obtuse triangle.
  // If none of the conditions are met, the sides make up an acute triangle.
}
*/

function triangleType(a, b, c) {
  const max = Math.max(a, b, c);

  if (a + b + c <= 2 * max) return 0;
  if (2 * max * max === a * a + b * b + c * c) return 2;
  if (2 * max * max > a * a + b * b + c * c) return 3;

  return 1;
}

// Test: 
// console.log(triangleType(7, 3, 2))
// console.log(triangleType(2, 4, 6))
// console.log(triangleType(8, 5, 7))
// console.log(triangleType(3, 4, 5))
// console.log(triangleType(7, 12, 8))
