/* Pascal's Triangle */

/*
Task: 
Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

Example: 
n = 1: [1]
n = 2: [1,  1, 1]
n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]

Note: 
Beware of overflow. Requested terms of a triangle are guaranteed to fit into the returned type, but depending on seleced method of calculations, intermediate values can be larger.
*/

/*
P - One argument as an integer.
R - Array of integers representing n rows of flattened Pascal's Triangle.
E - 
pascalsTriangle(1)      // [1]
pascalsTriangle(2)      // [1, 1, 1]
pascalsTriangle(4)      // [1, 1, 1, 1, 2, 1, 1, 3, 3, 1]
P - 
function pascalsTriangle(depth) {
    // 
}
*/

function pascalsTriangle(depth) {
    let triangle = [];
    let index = 0;

    for (let i = 0; i < depth; i++) {
        index = triangle.length - i;
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                triangle.push(1);
            } else {
                triangle.push(triangle[index + j] + triangle[index + j - 1]);
            }
        }
    }

    return triangle;
}

// Test: 
// console.log(pascalsTriangle(1))
// console.log(pascalsTriangle(2))
// console.log(pascalsTriangle(4))
// console.log(pascalsTriangle(6))
