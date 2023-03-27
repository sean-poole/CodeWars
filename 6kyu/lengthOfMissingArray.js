/* Length Of Missing Array */

/*
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!

You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.
*/

/*
P - Array of arrays. Elements of arrays can be strings, integers, or null.
R - Length of the missing array as an integer.
E - 
getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ] ])     // 3
getLengthOfMissingArray([ [ null ], [ null, null, null ] ])                         // 2
getLengthOfMissingArray([ ])                                                        // 0
P - 
function getLengthOfMissingArray(arrayOfArrays) {
    // Create an array of element lengths from the given array || Empty array.
    // If an element's length is 0, return 0.
    // Iterate through the array of lengths.
    // If [index] + 1 !== [index + 1], return missing length value.
    // Return 0 if the array of lengths is empty.
}
*/

function getLengthOfMissingArray(arrayOfArrays) {
    let lengths = (arrayOfArrays || []).map(e => e ? e.length : 0).sort((a, b) => a - b);
    if (lengths.includes(0)) return 0;

    for (let i = 0; i < lengths.length; i++) {
        if (lengths[i] + 1 !== lengths[i + 1]) return lengths[i] + 1;
    }

    return 0;
}

// Test: 
// console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ] ]))
// console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ] ]))
// console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ]))
// console.log(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ] ]))
// console.log(getLengthOfMissingArray([ ]))
