/* Printing Array Elements With Comma Delimiters */

/*
Input: Array of elements
["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.
"h,o,l,a"
*/

/*
P - Array of elements.
R - String of joined array elements separated by commas.
E - printArray([2, 4, 5, 2])        // 2,4,5,2
P - 
function printArray(array) {
    // Just join with commas 4Head
}
*/

const printArray = array => array.join(",");

// Test: 
// console.log(printArray([2, 4, 5, 2]))
