/* Smallest Unused ID */

/*
You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!
*/

/*
P - One argument as an array of integers. Elements will always be >= 0.
R - Integer representing the smallest unused number in the sequence.
E - 
nextId([0, 1, 2, 3, 5])                       // 4
nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])    // 11
nextId([1, 2, 0, 2, 3, 5])                    // 4
P - 
function nextId(ids) {
  // Iterate from 0 to the largest integer in the given array. Increment by 1.
  // If the current number is not in the given array, return that number.
  // Else, all numbers are present in the array and return the last element + 1.
}
*/

function nextId(ids) {
  for (let i = 0; i <= Math.max(...ids); i++) {
    if (!ids.includes(i)) return i;
  }

  return ids[ids.length - 1] + 1;
}

// Alternate solution: 
// function nextId(ids) {
//   let x = 0;
//   while (ids.includes(x)) {
//     x++;
//   }

//   return x;
// }

// Test: 
// console.log(nextId([0, 1, 2, 3, 5]))
// console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(nextId([1, 2, 0, 2, 3, 5]))
