/* Perimeter Sequence */

/*
The first three stages of a sequence are shown.

The blocksize is a by a and a ≥ 1.

What is the perimeter of the nth shape in the sequence (n ≥ 1) ?
*/

/*
P - Two arguments as integers. Both integers will always be (+).
R - Integer representing the perimeter of the shape created by the given arguments.
E - perimeterSequence(1, 3)     // 12
P - 
perimeterSequence(a, n) {
  // Multiply length of each block (a) by amount of blocks per side (n) to get the length of each side.
  // Multiply the length of each side by 4.
  // Return integer.
}
*/

const perimeterSequence = (a, n) => (a * n) * 4;

// Test: 
// console.log(perimeterSequence(1, 3))
