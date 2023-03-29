/* Moving Zeros To The End */

/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*/

/*
P - Array of elements. Elements can be string, integer, boolean.
R - Return an array of the given elements where all zeros are moved to the end. Keep the original order of the other elements.
E - moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]) // returns [false, 1, 1, 2, 1, 3, "a", 0, 0]
P - 
function moveZeros(array) {
    // Create 2 empty arrays. One for zero values, one for remaining elements.
    // Iterate through the given array.
    // Conditional to check if an element is 0.
    // If the element is 0, push it to the zeros array.
    // Else, push it to the values array.
}
*/

function moveZeros(array) {
    let zeros = [];
    let values = [];
    for (let el of array) {
        if (el === 0) {
            zeros.push(el);
        } else {
            values.push(el);
        }
    }

    return values.concat(zeros);
}

// Alternate solution: 
// function moveZeros(array) {
//     let zeros = array.filter(e => e == 0);
//     let values = array.filter(e => e !== 0);

//     return values.concat(zeros);
// }

// Test: 
// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]))
// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))