/* Draw Stairs */

/*
Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in:
"I\n I\n  I"
or printed:
I
 I
  I

Another example, a 7-step stairs should be drawn like this:
I
 I
  I
   I
    I
     I
      I
*/

/*
P - One argument as an integer.
R - String representing a stair case with a length of the given integer.
E - 
drawStairs(3)   // "I\n I\n  I"
drawStairs(7)   // "I\n I\n  I\n   I\n    I\n     I\n      I"
P - 
function drawStairs(n) {
  // Create a variable to store an empty array.
  // Create a for loop to iterate from 0 to the given n.
  // Push "I" with i length prepending spaces to the created array.
  // Join the craeted array with "\n".
  // Return string.
}
*/

function drawStairs(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(" ".repeat(i) + "I");
  }

  return result.join("\n");
}

// Alternate solution: 
// const drawStairs = n => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");

// Test: 
// console.log(drawStairs(1))
// console.log(drawStairs(3))
// console.log(drawStairs(5))
