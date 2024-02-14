/* Remove Duplicates From List */

/*
Define a function that removes duplicates from an array of numbers and returns it as a result.
The order of the sequence has to stay the same.
*/

/*
P - Array of numbers. Can be empty. (+) or (-) values.
R - Given array of numbers with duplicates removed. Sequence must stay the same.
E - 
distinct([1])           // [1]
distinct([1, 2])        // [1, 2]
distinct([1, 1, 2])     // [1, 2]
P - 
function distinct(a) {
    // Create an empty array
    // Iterate through the given array and add the element to the created array if it does not already contain it.
}
*/

function distinct(a) {
    let result = [];
    for (num of a) {
        if (!result.includes(num)) {
            result.push(num);
        }
    }

    return result;
}

// Alternate solution: 
// const distinct = a => [...new Set(a)];

// Test: 
// console.log(distinct([1]))
// console.log(distinct([1, 2]))
// console.log(distinct([1, 1, 2]))
