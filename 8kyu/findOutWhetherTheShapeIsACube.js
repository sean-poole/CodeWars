/* Find Out Whether The Shape Is A Cube */

/*
To find the volume (centimeters cubed) of a cuboid you use the formula:
> volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: side will be an integer
*/

/*
P - Two integers: one representing the volume of a cuboid, one representing the length of a single side.
R - Boolean representing if the cuboid could have equal sides. Return false for invalid numbers (volume / side length less than 0).
E - 
cubeChecker(8, 2)       // true
cubeChecker(-8, -2)     // false
cubeChecker(8, 3)       // false
P - 
let cubeChecker = function (volume, side) {
  // Check if the inputs are valid.
  // Calculate if the given side value ** 3 === volume.
  // Return boolean based on this calculation.
}
*/

const cubeChecker = (volume, side) => volume > 0 && side > 0 ? Math.pow(side, 3) === volume : false;

// Test: 
// console.log(cubeChecker(56.3, 1))
// console.log(cubeChecker(-1, 2))
// console.log(cubeChecker(8, 3))
// console.log(cubeChecker(8, 2))
// console.log(cubeChecker(-8, -2))
// console.log(cubeChecker(0, 0))
// console.log(cubeChecker(1, 5))
// console.log(cubeChecker(125, 5))
// console.log(cubeChecker(125, -5))
