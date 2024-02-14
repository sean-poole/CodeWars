/* Odd Ones Out */

/*
The town sheriff dislikes odd numbers and wants all odd numbered families out of town! In town crowds can form and individuals are often mixed with other people and families. However you can distinguish the family they belong to by the number on the shirts they wear. As the sheriff's assistant it's your job to find all the odd numbered families and remove them from the town!

Challenge: You are given a list of numbers. The numbers each repeat a certain number of times. Remove all numbers that repeat an odd number of times while keeping everything else the same.
> oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]

In the above example:
> the number 1 appears twice
> the number 2 appears once
> the number 3 appears three times

2 and 3 both appear an odd number of times, so they are removed from the list. The final result is: [1,1]

Here are more examples:
> oddOnesOut([1, 1, 2, 2, 3, 3, 3]) = [1, 1, 2, 2]
> oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]) = [26, 24, 24, 26]
> oddOnesOut([1, 2, 3]) = []
> oddOnesOut([1]) = []

Are you up to the challenge?
*/

/*
P - One argument as an array of integers.
R - Array of integers representing the integers of the given array that appear an even number of times.
E - 
oddOnesOut([1, 2, 3, 1, 3, 3])                                          // [1, 1]
oddOnesOut([75, 68, 75, 47, 68])                                        // [75, 68, 75, 68]
oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67])                             // [67, 67]
oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100])       // [100, 100, 100, 100]
oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50])    // [44, 79, 50, 44, 79, 50]
P - 
function oddOnesOut(nums) {
  // Create an empty array variable to store integers.
  // Iterate through the given array.
  // Filter the given array for the current element.
  // If the length of the filtered array is divisible by 2, push the current element to the created array.
  // Return array of integers.
}
*/

function oddOnesOut(nums) {
  let result = [];

  for (let num of nums) {
    if (nums.filter(e => e === num).length % 2 === 0) {
      result.push(num);
    } 
  }

  return result;
}

// Alternate solution: 
// const oddOnesOut = nums => nums.filter(num => nums.filter(e => e === num).length % 2 === 0);

// Test: 
// console.log(oddOnesOut([1, 2, 3, 1, 3, 3]))
// console.log(oddOnesOut([75, 68, 75, 47, 68]))
// console.log(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67]))
// console.log(oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100]))
// console.log(oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50]))
