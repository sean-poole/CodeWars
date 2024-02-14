/* Matrix Addition */

/*
Write a function that accepts two square matrices (N x N two dimensional arrays), and return the sum of the two. Both matrices being passed into the function will be of size N x N (square), containing only integers.

How to sum two matrices:
Take each cell [n][m] from the first matrix, and add it with the same [n][m] cell from the second matrix. This will be cell [n][m] of the solution matrix.

Visualization:
|1 2 3|     |2 2 1|     |1+2 2+2 3+1|     |3 4 4|
|3 2 1|  +  |3 2 3|  =  |3+3 2+2 1+3|  =  |6 4 4|
|1 1 1|     |1 1 3|     |1+1 1+1 1+3|     |2 2 4|

Example: 
matrixAddition(
  [ [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1] ],
//      +
  [ [2, 2, 1],
    [3, 2, 3],
    [1, 1, 3] ] )

// returns:
  [ [3, 4, 4],
    [6, 4, 4],
    [2, 2, 4] ]

*/

/*
P - Two arrays as arguments. Arrays can contain their own arrays. [ [x, x], [x, x] ], [ [y, y], [y, y] ]
R - Sum of the two given arrays as its own array.
E - 
matrixAddition([ [1], [2] ])                                // [ [3] ]
matrixAddition([ [1, 2], [1, 2] ], [ [2, 3], [2, 3] ])      // [ [3, 5], [3, 5] ]
P - 
function matrixAddition(a, b) {
    // Create an empty array.
    // Push an empty array within the created array for each element of argument A.
    // Push the sum of like matrices location values to subarrays.
    // Return array of total values.
}
*/

function matrixAddition(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        result.push([]);

        for (let j = 0; j < a[i].length; j++) {
            result[i].push(a[i][j] + b[i][j]);
        }
    }

    return result;
}

// Alternate solution: 
// const matrixAddition = (a, b) => a.map((row, rowIndex) => row.map((value, columnIndex) => value + b[rowIndex][columnIndex]));

// Test: 
// console.log(matrixAddition([ [1], [2] ]))
// console.log(matrixAddition([ [1, 2], [1, 2] ], [ [2, 3], [2, 3] ]))
// console.log(matrixAddition([ [1, 2, 3], [3, 2, 1], [1, 1, 1] ], [ [2, 2, 1], [3, 2, 3], [1, 1, 3] ]))
