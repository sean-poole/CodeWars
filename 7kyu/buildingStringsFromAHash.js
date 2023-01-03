/* Building Strings From A Hash */

/*
Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.
The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

Example:
solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
*/

function solution(pairs) {
    let result = [];
    for (key in pairs) {
        result.push(`${key} = ${pairs[key]}`);
    }

    return result.sort().join(",");
}

// Alternate solution: 
// function solution(pairs) {
//     return Object.keys(pairs).map(key => `${key} = ${pairs[key]}`).sort().join(",");
// }

// Test: 
// console.log(solution({a: 1, b: '2'}))
// console.log(solution({c: 1, z: 10, x: 4, 2: 4, b: -1, a: -6, y: -8, 0: 2}))
