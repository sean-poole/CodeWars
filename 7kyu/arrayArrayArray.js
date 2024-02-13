/* Array Array Array */

/*
You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:
if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
*/

/*
P - One argument as an array. Elements can be strings or integers.
R - Array containing subarrays of the given array with a length === sum of the given array's elements. Return string "Void!" if the given array does not contain integer elements.
E - 
explode([9, 3])       // [ [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3] ]
explode(["a", 3])     // [ ["a", 3], ["a", 3], ["a", 3] ]
explode([6, "c"])     // [ [6, "c"], [6, "c"], [6, "c"], [6, "c"], [6, "c"], [6, "c"] ]
explode(["a", "b"])   // "Void!"
explode(["a", 0])     // []
P - 
function explode(x) {
  // Extract the two elements from the given array and assign them to variables.
  // Check the type of each element.
  // If both types are numbers, create a new array with a length of the sum of the integers and fill with the given array.
  // If the first element is a number, create a new array with a length of the first element and fill with the given array.
  // If the second element is a number, create a new array with a length of the second element and fill with the given array.
  // Return the created array of subarrays if any of these conditions are fulfilled.
  // If none of the conditions are met, both elements are strings. Return "Void!".
}
*/

function explode(x) {
  let [a, b] = x;

  if (typeof a === "number" && typeof b === "number") {
    return new Array(a + b).fill(x);
  } else if (typeof a === "number") {
    return new Array(a).fill(x);
  } else if (typeof b === "number") {
    return new Array(b).fill(x);
  }

  return "Void!";
}

// Test: 
// console.log(explode([9, 3]))
// console.log(explode(["a", 3]))
// console.log(explode([6, "c"]))
// console.log(explode(["a", "b"]))
// console.log(explode(["a", 0]))
