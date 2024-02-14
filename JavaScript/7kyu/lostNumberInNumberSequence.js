/* Lost Number In Number Sequence */

/*
An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:
> The starting array sequence is [1,2,3,4,5,6,7,8,9]
> The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
> Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).
*/

/*
P - Two arrays, each containing integers.
R - Missing element of the given second array in the form of an integer.
E - 
findDeletedNumber([1,2,3,4,5], [3,4,1,5])                       // 2
findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3])     // 0 - No deletion
P - 
function findDeletedNumber(arr, mixArr) {
    // Iterate through the first array.
    // Conditional if the second array contains the element at the current index of the first array.
    // Return the missing number, otherwise return 0.
}
*/

function findDeletedNumber(arr, mixArr) {
    for (let n of arr) {
        if (!mixArr.includes(n)) return n;
    }

    return 0;
}

// Alternate solution:
// const findDeletedNumber = (arr, mixArr) => arr.reduce((acc, c) => acc += c, 0) - mixArr.reduce((acc, c) => acc += c, 0);

// Test: 
// console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]))
// console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]))
// console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]))
