/* Monotone Travel */

/*
Story: 
Peter lives on a hill, and he always moans about the way to his home. "It's always just up. I never get a rest". But you're pretty sure that at least at one point Peter's altitude doesn't rise, but fall. To get him, you use a nefarious plan: you attach an altimeter to his backpack and you read the data from his way back at the next day.

Task: 
You're given a list of compareable elements:
heights = [h1, h2, h3, …, hn]

Your job is to check whether for any x all successors are greater or equal to x.

isMonotone([1,2,3]) == true
isMonotone([1,1,2]) == true
isMonotone([1])     == true
isMonotone([3,2,1]) == false
isMonotone([3,2,2]) == false

If the list is empty, Peter has probably removed your altimeter, so we cannot prove him wrong and he's still right:
isMonotone([])     == True

Such a sequence is also called monotone or monotonic sequence, hence the name isMonotone.
*/

/*
P - One argument as an array of integers. Array can contain any number of elements.
R - Boolean representing if the array's elements are listed in ascending order.
E - 
isMonotone([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])   // true
isMonotone([4, 5, 6, 7, 8, 9, 10, 11, 12])    // true
isMonotone([5, 5, 5, 5, 5])                   // true
isMonotone([])                                // true
isMonotone([5, 4, 3, 2, 1])                   // false
isMonotone([1, 2, 3, 3, 4, 5])                // true
P - 
function isMonotone(arr) {
  // Verify the given array contains elements. If the array is empty, return true.
  // Iterate through the given array starting from the second element.
  // Compare the current element with the previous element.
  // If current >= previous, continue iterating.
  // Else, return false.
  // Return boolean upon completing iteration.
}
*/

const isMonotone = arr => arr.every((e, i) => i === 0 || arr[i - 1] <= e);

// Alteranate solution: 
// const isMonotone = function(arr) {
//   if (arr.length === 0) return true;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) return false;
//   }

//   return true;
// }


// Test: 
// console.log(isMonotone([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(isMonotone([4, 5, 6, 7, 8, 9, 10, 11, 12]))
// console.log(isMonotone([5, 5, 5, 5, 5]))
// console.log(isMonotone([]))
// console.log(isMonotone([5, 4, 3, 2, 1]))
// console.log(isMonotone([1, 2, 3, 3, 4, 5]))
