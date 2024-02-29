/* Bubble Sort */

/*
Since everybody hates chaos and loves sorted lists we should implement some more sorting algorithms. Your task is to implement a Bubble sort (for some help look at https://en.wikipedia.org/wiki/Bubble_sort) and return a list of snapshots after each change of the initial list.

e.g.
If the initial list would be l=[1,2,4,3] my algorithm rotates l[2] and l[3] and after that it adds [1,2,3,4] to the result, which is a list of snapshots.
[1,2,4,3] should return [ [1,2,3,4] ]
[2,1,4,3] should return [ [1,2,4,3], [1,2,3,4] ]
[1,2,3,4] should return []
*/

/*
P - One argument as an array of integers.
R - Array containing subarrays that represent each iteration of applying the bubble sort algorithm to the given array.
E - 
bubble([1, 2, 4, 3])    // [ [1, 2, 3, 4] ]
bubble([2, 1, 4, 3])    // [ [1, 2, 4, 3], [1, 2, 3, 4] ]
bubble([1, 2, 3, 4])    // []
P - 
function bubble(arr) {
  // Create an empty array variable to store subarrays.
  // Declare flag variable.
  // Create do-while loop to run once and continue while flag === true.
  // Iterate through the given array.
  // If the current element is greater than the next element, swap their positions. Set flag to true. Push copy of the modified array to created array.
  // Else, continue iterating.
  // When all iterations are complete, return the created array containing subarrays of integers.
}
*/

function bubble(arr) {
  let result = [];
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
        result.push(arr.slice());
      }
    }
  } while (swapped);

  return result;
}

// Test: 
// console.log(bubble([1, 2, 4, 3]))
// console.log(bubble([2, 1, 4, 3]))
// console.log(bubble([1, 2, 3, 4]))
// console.log(bubble([1, 4, 3, 6, 7, 9, 2, 5, 8]))
