/* Arithmetic List */

/*
In this kata, you will write an arithmetic list which is basically a list that contains consecutive terms in the sequence.
You will be given three parameters :

first the first term in the sequence
c the constant that you are going to ADD ( since it is an arithmetic sequence...)
l the number of terms that should be returned
*/

/*
P - Three integers as arguments.
R - Array of integers representing a sequence of numbers derived from the given arguments.
E - seqlist(0, 1, 20)   // [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
P - 
function seqlist(first, c, l) {
  // Create an array variable to store the integers of a sequence.
  // Create an integer variable to store the current number in a sequence.
  // While the length of the created array is less than the given argument "l"...
  // ...push the current number to the array.
  // Increase the current number by the given argument "c".
  // Return array of integers.
}
*/

function seqlist(first, c, l) {
  let sequence = [];
  let current = first;
  while (sequence.length < l) {
    sequence.push(current);
    current += c;
  }

  return sequence;
}

// Test: 
// console.log(seqlist(0, 1, 20))
