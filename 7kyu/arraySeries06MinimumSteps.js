/* Array Series #6: Minimum Steps */

/*
Task: 
Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

Notes:
> List size is at least 3.
> All numbers will be positive.
> Numbers could occur more than once , (Duplications may exist).
> Threshold K will always be reachable.

Input >> Output Examples: 
> minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)

Explanation:
> We add two smallest elements (1 + 2), their sum is 3 .
> Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .
> Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .
> minimumSteps({8 , 9, 4, 2}, 23)  ==> return (3)

Explanation:
> We add two smallest elements (4 + 2), their sum is 6 .
> Then we add the next smallest number to it (6 + 8) , so the sum becomes 14 .
> Now we add the next smallest number (14 + 9) , so the sum becomes 23 .
> Now the result is greater or equal to 23 , Hence the output is (3) i.e (3) operations are required to do this .
> minimumSteps({19,98,69,28,75,45,17,98,67}, 464)  ==>  return (8)

Explanation:
> We add two smallest elements (19 + 17), their sum is 36 .
> Then we add the next smallest number to it (36 + 28) , so the sum becomes 64 .
> We need to keep doing this until the sum becomes greater or equal to K (464 in this case), which will require 8 Steps .
> Expected Time Complexity O(n Log n)
*/

/*
P - One argument as an array of integers and one argument as an integer.
R - Integer representing how many times the smallest numbers of the given array must be added until their sum is greater than or equal to the given integer.
E - 
minimumSteps([1, 10, 13, 9, 2, 3], 6)                     // 2
minimumSteps([8, 9, 4, 2], 23)                            // 3
minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)   // 8
P - 
function minimumSteps(numbers, value) {
  // Create a copy of the given array of integers and sort in ascending order.
  // Create a variable to store the sum of numbers, starting from 0.
  // Iterate through the given array of numbers.
  // Add the current element to the sum variable.
  // If the sum is greater than or equal to the given integer, return iteration counter.
}
*/

function minimumSteps(numbers, value) {
  const nums = numbers.slice().sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum >= value) {
      return i;
    }
  }
}

// Test: 
// console.log(minimumSteps([4, 6, 3], 7))
// console.log(minimumSteps([10, 9, 9, 8], 17))
// console.log(minimumSteps([8, 9, 10, 4, 2], 23))
// console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464))
// console.log(minimumSteps([4, 6, 3], 2))
