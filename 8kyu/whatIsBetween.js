/* What Is Between? */

/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:
a = 1
b = 4
--> [1, 2, 3, 4]
*/

function between(a, b) {
    let numbers = [];
    for (a; a <= b; a++) {
        numbers.push(a);
    }

    return numbers;
}

// Alternate solution: 
// const between = (a, b) => Array.from(new Array(b - a + 1), (_, i) => a + i);

// Test: 
// console.log(between(1, 4))
// console.log(between(-2, 2))
