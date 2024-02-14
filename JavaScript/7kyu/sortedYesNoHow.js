/* Sorted? Yes? No? How? */

/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

function isSortedAndHow(array) {
    let ascending = array.slice().sort((a, b) => a - b);
    let descending = array.slice().sort((a, b) => b - a);
    return array.every((e, i) => e === ascending[i]) ? "yes, ascending"
        : array.every((e, i) => e === descending[i]) ? "yes, descending"
        : "no"
}

// Alternate solution: 
// function isSortedAndHow(array) {
//     return array.every((e, i) => i == 0 || array[i] >= array[i - 1]) ? "yes, ascending" :
//             array.every((e, i) => i == 0 || array[i] <= array[i - 1]) ? "yes, descending" :
//             "no"
// }

// Test: 
// console.log(isSortedAndHow([1, 2]))
// console.log(isSortedAndHow([15, 7, 3, -8]))
// console.log(isSortedAndHow([4, 2, 30]))
