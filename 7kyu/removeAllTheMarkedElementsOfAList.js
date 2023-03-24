/* Remove All The Marked Elements Of A List */

/*
Define a method/function that removes from a given array of integers all the values contained in a second array.

Examples (input -> output):
* [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
* [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
* [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]
*/

/*
P - Two arrays of integers as arguments.
R - First array of integers with values of the second array removed.
E - 
[1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
[1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
[8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]
P - 
Array.prototype.remove_ = function(i, v) {
    // Iterate through the first array.
    // Filter values that are not included in the second array.
}
*/

Array.prototype.remove_ = function(i, v) {
    return i.filter(num => !v.includes(num));
}

// Test: 
// let l = new Array();
// let int1 = [1, 1, 2, 3, 1, 2, 3, 4];
// let val1 = [1, 3];
// console.log(l.remove_(int1, val1));

// let int2 = [1, 1, 2 ,3 ,1 ,2 ,3 ,4, 4, 3 ,5, 6, 7, 2, 8];
// let val2 = [1, 3, 4, 2];
// console.log(l.remove_(int2, val2));

// let int3 = [];
// let val3 = [2, 2, 4, 3];
// console.log(l.remove_(int3, val3));
