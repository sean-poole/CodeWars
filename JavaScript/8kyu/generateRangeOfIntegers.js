/* Generate Range Of Integers */

/*
Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

Task: 
Implement a function named
> generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
> generateRange(1, 10, 3) // should return array of [1,4,7,10]

Note: 
min < max
step > 0
the range does not HAVE to include max (depending on the step)
*/

/*
P - Three arguments as integers representing the minimum value, maximum value, and step.
R - Array of integers from min to max.
E - generateRange(2, 10, 2)     // [2, 4, 6, 8, 10]
P - 
function generateRange(min, max, step) {
  // Create an empty array variable to store integers.
  // Iterate through numbers starting from the min value and ending at the max value.
  // Push the current value to the array and increment by step value.
  // Return array of integers.
}
*/

function generateRange(min, max, step) {
  const range = [];
  for (let i = min; i <= max; i += step) {
    range.push(i);
  }

  return range;
}

// Test: 
// console.log(generateRange(2, 10, 2))
