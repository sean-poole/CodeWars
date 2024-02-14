/* Numbers To Letters */

/*
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/

/*
P - One argument as an array of strings representing numbers.
R - String representing the concatenated alphabetical value of numbers provided in the given array.
E - switcher(['24', '12', '23', '22', '4', '26', '9', '8'])   // "codewars"
P - 
function switcher(x) {
  // Iterate through the given array.
  // Map each element to its reversed position value in the alphabet.
  // Join the array.
  // Return String.
}
*/

const alphabet = "zyxwvutsrqponmlkjihgfedcba!? ";

const switcher = x => x.map(e => alphabet.charAt(+e - 1)).join("");

// Test: 
// console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']))
// console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']))
// console.log(switcher(['4', '24']))
