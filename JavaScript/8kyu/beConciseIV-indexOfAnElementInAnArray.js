/* Be Concise IV - Index Of An Element In An Array */

/*
Task: 
Provided is a function Kata which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 161) You may assume that all array elements are unique.
*/

/*
P - Working function
R - Condense the given function to contain no more than 161 characters.
E - 
P - 
function find(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }

  return "Not found";
}

// Refactor the given function to be an arrow function.
// Check if the given array contains the given element we are looking for.
// If the element is found in the array, return its index.
// Else, return "Not found".
*/

const find = (array, element) => array.includes(element) ? array.indexOf(element) : "Not found";

// Test: 
// const array = [2, 3, 5, 7, 11];

// console.log(find(array, 5))
// console.log(find(array, 11))
// console.log(find(array, 3))
// console.log(find(array, 2))
// console.log(find(array, 7))
// console.log(find(array, 1))
// console.log(find(array, 8))
