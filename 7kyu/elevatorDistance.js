/* Elevator Distance */

/*
Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.

Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.

// simple examples
> elevatorDistance([5,2,8]) = 9
> elevatorDistance([1,2,3]) = 2
> elevatorDistance([7,1,7,1]) = 18

// if two consecutive floors are the same,
//distance travelled between them is 0
> elevatorDistance([3,3]) = 0

Array will always contain at least 2 floors. Random tests will contain 2-20 elements in array, and floor values between 0 and 30.
*/

/*
P - One argument as an array of integers
R - Integer representing the total distance traveled in the given array.
E - 
elevatorDistance([5, 2, 8])       // 9
elevatorDistance([1, 2, 3])       // 2
elevatorDistance([7, 1, 7, 1])    // 18
P - 
function elevatorDistance(array) {
  // Create a variable to store the number of floors traveled.
  // Iterate through the given array starting from index 1.
  // Calculate the absolute value of the difference between the current index element and the previous index element.
  // Add the calculation to the created variable.
  // Return integer.
}
*/

function elevatorDistance(array) {
  let floors = 0;
  for (let i = 1; i < array.length; i++) {
    floors += Math.abs(array[i] - array[i - 1]);
  }

  return floors;
}

// Test: 
// console.log(elevatorDistance([5, 2, 8]))
// console.log(elevatorDistance([1, 2, 3]))
// console.log(elevatorDistance([7, 1, 7, 1]))
