/* Compare Within Margin */

/*
Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

a is considered "close to" b if margin is greater than or equal to the distance between a and b.

Please note the following:
When a is close to b, return 0.
Otherwise...
When a is less than b, return -1.
When a is greater than b, return 1.
If margin is not given, treat it as zero.
Assume: margin >= 0
Tip: Some languages have a way to make parameters optional.

Example 1
If a = 3, b = 5, and margin = 3, then close_compare(a, b, margin) should return 0.
This is because a and b are no more than 3 numbers apart.

Example 2
If a = 3, b = 5, and margin = 0, then close_compare(a, b, margin) should return -1.
This is because the distance between a and b is greater than 0, and a is less than b.
*/

/*
P - Two arguments as integers, and one optional argument as an integer.
R - Integers 1 if a > b, -1 if a < b, or 0 if a == b.
E - 
closeCompare(3, 5, 3)   // 0
closeCompare(3, 5)      // -1
P - 
function closeCompare(a, b, margin) {
  // If margin is not provided, set to 0 by default.
  // If the absolute value of a - b <= margin, return 0.
  // If a < b, return -1.
  // If a > b, return 1.
}
*/

function closeCompare(a, b, margin = 0) {
  if (Math.abs(a - b) <= margin) return 0
  else if (a < b) return -1
  else return 1;
}

// Test: 
// console.log(closeCompare(4, 5))
// console.log(closeCompare(5, 5))
// console.log(closeCompare(6, 5))
// console.log(closeCompare(-6, -5))
// console.log(closeCompare(2, 5, 3))
// console.log(closeCompare(8.1, 5, 3))
// console.log(closeCompare(1.99, 5, 3))
