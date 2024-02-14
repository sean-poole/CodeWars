/* Deletion in an Array */

/*
The deleteValues function takes an array and removes elements that answer true to the pred function.

For some reason, some of the elements of the array for which the predicate holds are not deleted...

Can you fix the code?
*/

/*
P - One argument as an array and one argument as a function.
R - Array representing elements of the given array that do not return true when passed into the given function.
E - 
let arr = [1, 2, 3, 4, 5, 6]
const isEven = n => n % 2 === 0;

console.log(deleteValues(arr, isEven))  // [1, 3, 5]
P - 
function deleteValues(array, pred) {
  // Iterate through the given array.
  // Pass each element into the given function.
  // If the function returns true, remove the element from the given array.
  // Return formatted array.
}
*/

function deleteValues(array, pred) {
  for (let i = 0; i < array.length; i++) {
    if (pred(array[i])) {
      array.splice(i, 1);
      i--;
    }
  }

  return array;
}

// Test: 
let arr = [1, 2, 3, 4, 5, 6]
const isEven = n => n % 2 === 0;

// console.log(deleteValues(arr, isEven))
