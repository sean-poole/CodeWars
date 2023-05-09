/* Zip With */

/*
Task: 
zipWith ( or zip_with ) takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
The function value is one new array.

If the arrays are of unequal length, the output will only be as long as the shorter one.
(Values of the longer array are simply not used.)

Inputs should not be modified.

Examples: 
> zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
> zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

> zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both forms are valid
> zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both are functions

Input validation: 
Assume all input is valid.
*/

/*
P - Three arguments: one function, two arrays of integers.
R - Array of integers representing the result of applying the given function to the two given arrays.
E - 
zipWith(plus, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2, 1])       // [6, 6, 6, 6, 6, 6]
zipWith(plus, [0, 1, 2, 3, 4], [6, 5, 4, 3, 2, 1])          // [6, 6, 6, 6, 6]
zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3])           // [1, 10, 100, 1000]
zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1])   // [4, 7, 7, 4, 7, 7]
zipWith( (a, b) => a + b, [0, 1, 2, 3], [0, 1, 2, 3])       // [0, 2, 4, 6]
P - 
function zipWith(fn, a0, a1) {
    // Create an empty array to store integers.
    // Create a variable to store the minimum length of the two given arrays.
    // Iterate through the arrays minLength times.
    // Apply the given function to the array's elements at current index.
    // Push the result to the created array.
    // Return the array.
}
*/

function plus(a, b) {
    return a + b;
}

function zipWith(fn, a0, a1) {
    let result = [];
    let minLength = Math.min(a0.length, a1.length);
    
    for (let i = 0; i < minLength; i++) {
        result.push(fn(a0[i], a1[i]));
    }

    return result;
}

// Test: 
// console.log(zipWith(plus, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2, 1]))
// console.log(zipWith(plus, [0, 1, 2, 3, 4], [6, 5, 4, 3, 2, 1]))
// console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]))
// console.log(zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1]))
// console.log(zipWith(function(a, b) { return a + b }, [0, 1, 2, 3], [0, 1, 2, 3]))
// console.log(zipWith( (a, b) => a + b, [0, 1, 2, 3], [0, 1, 2, 3]))
