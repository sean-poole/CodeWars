/* Making Copies */

/*
Write a function that takes a list (in Python) or array (in other languages) of numbers, and makes a copy of it.
Note that you may have troubles if you do not return an actual copy, item by item, just a pointer or an alias for an existing list or array.
If not a list or array is given as a parameter in interpreted languages, the function should raise an error.

Examples:

t = [1, 2, 3, 4]
tCopy = copyList(t)
t[1] += 5
t = [1, 7, 3, 4]
tCopy = [1, 2, 3, 4]
*/

/*
P - Array of numbers.
R - Copy of the given array.
E - 
list = [1, 2, 3, 4]
copyList(list)      // [1, 2, 3, 4]
list[1] += 5;
copyList(list)      // [1, 7, 3, 4]
P - 
function copyList(l) {
    // Slice and return copy of list.
}
*/

const copyList = l => l.slice();

// Test: 
t = [1, 2, 3, 4];
// console.log(copyList(t))

t[1] += 5;
// console.log(copyList(t))
