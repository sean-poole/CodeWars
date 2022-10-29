/* Sort Array By String Length */

/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:
["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:
["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/

const sortArrayByLength = arr => arr.sort((a, b) => a.length - b.length);

// Test: 
test1 = ["Beg", "Life", "I", "To"]
test2 = ["", "Moderately", "Brains", "Pizza"]
test3 = ["Longer", "Longest", "Short"]

console.log(sortArrayByLength(test1))
console.log(sortArrayByLength(test2))
console.log(sortArrayByLength(test3))
