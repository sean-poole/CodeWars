/* Removing Elements */

/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

const removeEveryOther = arr => arr.filter((e, i) => i % 2 === 0);

// Test: 
// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(removeEveryOther([[1, 2]]))
// console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]))
