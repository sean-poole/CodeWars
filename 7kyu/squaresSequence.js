/* Squares Sequence */

/*
Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples: 
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]
*/

function squares(x, n) {
    let result = [x];
    while (result.length < n) {
        result.push(result[result.length - 1] ** 2);
    }

    return n > 0 ? result : [];
}

// Alternate solution
// function squares(x, n) {
//     let result = [];
//     for (let i = 0; i < n; i++) {
//         result.push(x);
//         x *= x;
//     }

//     return n > 0 ? result : [];
// }

// Test: 
// console.log(squares(2, 5))
// console.log(squares(3, 3))
// console.log(squares(5, 3))
// console.log(squares(10, 4))
