/* Alphabetical Addition */

/*
Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
> Letters will always be lowercase.
> Letters can overflow (see second to last example of the description)
> If no letters are given, the function should return 'z'

Examples:
> addLetters('a', 'b', 'c') = 'f'
> addLetters('a', 'b') = 'c'
> addLetters('z') = 'z'
> addLetters('z', 'a') = 'a'
> addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
> addLetters() = 'z'
*/

/*
P - One argument as an array of single character strings. Elements will always be lowercase.
R - String representing a letter whose position in the alphabet is equal to the sum of the alphabetical positions in the given array. Sum > 26 will cycle to the beginning.
E - 
addLetters(["a", "b", "c"])   // "f"
addLetters(["z"])             // "z"
addLetters(["z", "a"])        // "a"
addLetters([])                // "z"
P - 
function addLetters(...letters) {
  // Convert each letter in the given array to their position in the alphabet.
  // Reduce to get the sum of letter positions.
  // Convert integer back to a letter where the sum is located in the alphabet.
  // Return string.
}
*/

function addLetters(...letters) {
  return String.fromCharCode((letters.reduce((acc, c) => acc + c.charCodeAt(0) - 96, 0) + 25) % 26 + 97);
}

// Test: 
// console.log(addLetters(["a", "b", "c"]))
// console.log(addLetters(["z"]))
// console.log(addLetters(["a", "b"]))
// console.log(addLetters(["c"]))
// console.log(addLetters(["z", "a"]))
// console.log(addLetters(["y", "c", "b"]))
// console.log(addLetters([]))
