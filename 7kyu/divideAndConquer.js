/* Divide and Conquer */

/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

Return as a number.
*/

function divCon(arr) {
    let s = [];
    let n = [];
    for (x of arr) {
        typeof(x) === "string" ? s.push(x) : n.push(x);
    }

    return n.reduce((acc, c) => acc += c, 0) - s.map(Number).reduce((acc, c) => acc += c, 0);
}

// Alternate solution: 
// const divCon = arr => arr.reduce((acc, c) => typeof(c) === "string" ? acc -= Number(c) : acc += c, 0);

// Test: 
// console.log(divCon([9, 3, '7', '3']))
// console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
// console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))
