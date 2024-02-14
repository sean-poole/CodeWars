/* Combine Objects */

/* 
Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
*/ 

/* 
P - Will accept any number of objects.
R - Object with combined values of properties.
E - 
combine(objA, objB)         // { a: 13, b: 20, c: 36, d: 3 }
combine(objA, objB, objC)   // { a: 18, b: 20, c: 36, d: 14, e: 8 }
P - 
function combine() {
    // Create an empty object variable.
    // Iterate through argument objects.
    // Iterate through keys of each argument object.
    // If the created object does not contain the current key, initialize it.
    // Else, add the value of the key to the created object.
    // Return combined object.
}
*/

function combine() {
    let result = {};
    for (arg of arguments) {
        for (key in arg) {
            if (!result[key]) {
                result[key] = arg[key];
            } else {
                result[key] += arg[key];
            }
        }
    }

    return result;
}

// Test: 
// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// const objC = { a: 5, d: 11, e: 8 }
// const objD = { c: 3 }

// console.log(combine(objA, objB))
// console.log(combine(objA, objC))
// console.log(combine(objA, objB, objC))
// console.log(combine(objA, objC, objD))
