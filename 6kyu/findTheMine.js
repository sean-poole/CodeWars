/* Find The Mine */

/*
You've just discovered a square (NxN) field and you notice a warning sign. The sign states that there's a single bomb in the 2D grid-like field in front of you.

Write a function mineLocation/MineLocation that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer 1 in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s.

The location returned should be an array (Tuple<int, int> in C#) where the first element is the row index, and the second element is the column index of the bomb location (both should be 0 based). All 2D arrays passed into your function will be square (NxN), and there will only be one mine in the array.

Examples:
> mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] ) => returns [0, 0]
> mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] ) => returns [1, 1]
> mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] ) => returns [2, 1]
*/

/* 
P - One argument as an array of arrays containing integers.
R - Array of two integers representing where the mine is located in the given array.
E - 
mineLocation([ [1, 0, 0], [0, 0, 0], [0, 0, 0] ])                           // [0, 0]
mineLocation([ [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0] ])    // [2, 2]
P - 
function mineLocation(field) {
    // Iterate through the given array.
    // Check each array if it contains a "1".
    // Check the array that contains a "1" for its index.
    // Return array containing integers representing the index of the array containing "1" and the index of element value "1" within the subarray.
}
*/

function mineLocation(field) {
    for (e of field) {
        if (e.includes(1)) {
            return [field.indexOf(e), e.indexOf(1)];
        }
    }
}

// Test: 
// console.log(mineLocation([ [1, 0], [0, 0] ]))
// console.log(mineLocation([ [1, 0, 0], [0, 0, 0], [0, 0, 0] ]))
// console.log(mineLocation([ [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0] ]))
