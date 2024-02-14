/* Last */

/*
Find the last element of the given argument(s).

Examples: 
last([1, 2, 3, 4] ) // =>  4
last("xyz")         // => "z"
last(1, 2, 3, 4)    // =>  4
In javascript and CoffeeScript a list will be an array, a string or the list of arguments.
*/

/*
P - An array, a string, or a list.
R - The last element of a given argument.
E - 
last([1, 2, 3, 4])  // 4
last("xyz")         // "z"
last(1, 2, 3, 4)    // 4
P - 
function last(list) {
    // Set a variable for the last argument.
    // Set a variable for the last element of last argument, or last argument.
    // Return last element of argument.
}
*/

function last(list) {
    let lastArg = arguments[arguments.length - 1];
    let lastEl = lastArg[lastArg.length - 1] || lastArg;

    return lastEl;
}

// Test: 
// console.log(last([1, 2, 3, 4, 5]))
// console.log(last("abcde"))
// console.log(last(1, "b", 3, "d", 5))
