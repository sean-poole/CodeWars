/* Evil or Odious */

/*
The number n is Evil if it has an even number of 1's in its binary representation.
The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

The number n is Odious if it has an odd number of 1's in its binary representation.
The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.
*/

/*
P - One argument as an integer.
R - String representing if the given integer has either an even or odd number of 1's in its binary representation.
E - 
evil(1)   // "It's Odious!"
evil(2)   // "It's Odious!"
evil(3)   // "It's Evil!"
P - 
function evil(n) {
  // Convert the given integer to a binary string.
  // Split the string into an array.
  // Iterate through the array.
  // Count the instances of "1".
  // Return string "It's Odious!" if the count of 1's is odd.
  // Return string "It's Evil!" if the count of 1's is even.
}
*/

function evil(n) {
  let binary = n.toString(2);
  let count = binary.split("").filter(e => e === "1").length;

  return count % 2 ? "It's Odious!" : "It's Evil!";
}

// Alternate solution: 
// const evil = n => n.toString(2)
//                   .split("")
//                   .filter(e => e === "1")
//                   .length % 2 ? "It's Odious!" : "It's Evil!";

// Test: 
// console.log(evil(1))
// console.log(evil(2))
// console.log(evil(3))
