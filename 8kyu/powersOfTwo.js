/* Powers Of 2 */

/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples: 
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/

function powersOfTwo(n) {
    let result = [];
    for (let i = 0; i <= n; i++) {
        result.push(2 ** i);
    }

    return result;
}

// Test: 
// console.log(powersOfTwo(0))
// console.log(powersOfTwo(1))
// console.log(powersOfTwo(4))
