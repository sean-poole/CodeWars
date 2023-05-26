/* Bug Fixing #1 - Unfinished Loop */

/*
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
*/

/*
P - Incomplete function.
R - Correct the function so it returns an array of integers from 1 to a given number.
E - 
createArray(1)    // [1]
createArray(2)    // [1, 2]
createArray(3)    // [1, 2, 3]
P - 
function createArray(number) {
  let newArray = [];
  for (let counter = 1; counter <= number; // Missing increment: counter++ ) {
    newArray.push(counter);
  }

  return newArray;
}
*/

function createArray(number) {
  let newArray = [];
  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}

// Test: 
// console.log(createArray(1))
// console.log(createArray(2))
// console.log(createArray(3))
// console.log(createArray(4))
// console.log(createArray(5))
