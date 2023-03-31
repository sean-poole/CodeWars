/* Find The Duplicated Number In A Consecutive Unsorted List */

/*
You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

The array is unsorted.

An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

You should return the duplicate value as a single integer.
*/

/*
P - Array of unique integers, except for 1 duplicate. 
R - Duplicate number.
E - findDup([1, 2, 2, 3])           // 2
P - 
function findDup(arr) {
    // Create an empty array.
    // Push unique numbers to the empty array.
    // Return the duplicate number.
}
*/

function findDup(arr) {
    let unique = [];
    for (num of arr) {
        if (unique.includes(num)) return num;
        else unique.push(num);
    }
}

// Alternate solution: 
// const findDup = arr => arr.filter((e, i) => arr.indexOf(e) !== i)[0];

// Test: 
// console.log(findDup([1, 2, 2, 3]))
// console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6]))
