/* Are The Numbers In Order? */

/*
Are the numbers in order?
In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

For example:
inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.
*/

function inAscOrder(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }

    return true;
}

// Alternate solution:
// const inAscOrder = arr => {
//     return arr.slice()
//     .sort((a, b) => a - b)
//     .every((e, i) => e === arr[i]);
// }

// Test: 
// console.log(inAscOrder([1, 2, 4, 7, 19]))
// console.log(inAscOrder([1, 2, 3, 4, 5]))
// console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]))
// console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]))
