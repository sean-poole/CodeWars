/* Swap Values */

/*
I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?
*/

/*
P - Function with errors
R - Functional function :)
E - swapValues([1, 2])       // [2, 1]
P - 
function swapValues() {
    // Include array argument.
    // Remove copy of array argument.
}
*/

// function swapValues() {
//     var args = Array.prototype.slice.call(arguments);
//     var temp = args[0];
//     args[0] = args[1];
//     args[1] = temp;
// }

function swapValues(array) {
    let temp = array[0];
    array[0] = array[1];
    array[1] = temp;
}

// Alternate solution: 
// const swapValues = array => array.reverse();

// Test: 
// let arr = [1, 2];
// swapValues(arr);
// console.log(arr);