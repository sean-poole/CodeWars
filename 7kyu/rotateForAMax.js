/* Rotate For A Max */

/*
Let us begin with an example:
Take a number: 56789. Rotate left, you get 67895.

Keep the first digit in place and rotate left the other digits: 68957.

Keep the first two digits in place and rotate the other ones: 68579.

Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.

You have the following sequence of numbers: 
> 56789 -> 67895 -> 68957 -> 68579 -> 68597
and you must return the greatest: 68957.

Task: 
Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.

So max_rot (or maxRot or ... depending on the language) is such as:
> max_rot(56789) should return 68957
> max_rot(38458215) should return 85821534
*/

/*
P - One argument as an integer.
R - Integer representing given number after rotating index positions a max number of times.
E - 
maxRot(38458215)    // 85821534
maxRot(195881031)   // 988103115
maxRot(896219342)   // 962193428
maxRot(69418307)    // 94183076
P - 
function maxRot(n) {
  // Convert the given number to a string.
  // Create an array variable containing the converted string.
  // Iterate through the string.
  // Rotate letters and push each result to the array.
  // Return the max value as an integer.
}
*/

function maxRot(n) {
  let str = String(n);
  let result = [str];

  for (let i = 0; i <= str.length - 1; i++) {
    str = str.slice(0, i) + str.slice(i + 1) + str[i];
    result.push(str.split().join());
  }

  return Math.max.apply(null, result);
}

// Test: 
// console.log(maxRot(38458215))
// console.log(maxRot(195881031))
// console.log(maxRot(896219342))
// console.log(maxRot(69418307))
