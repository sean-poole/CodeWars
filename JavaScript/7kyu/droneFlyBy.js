/* Drone Fly-By */

/*
The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

In this kata we will recreate that stunt... sort of.

You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

Return the resulting lamps string. See example tests for more clarity.
*/

/* 
P - Two arguments: two strings. First string will contain x's (lamps turned off) and o's (lamps turned on). Second string will contain = (distance traveled) and a single T (drone location).
R - Return first string representing which lamps have been turned on by the drone.
E - flyBy("xxxxxx", "====T")    // "ooooox"
P - 
function flyBy(lamps, drone) {
  // Create an empty variable to store a string.
  // Iterate through lamps.
  // If the current index is less than the length of drone, add "o" to the created string.
  // Else, add "x" to the created string.
  // Return string.
}
*/

// function flyBy(lamps, drone) {
//   let result = "";
//   for (let i = 0; i < lamps.length; i++) {
//     result += i < drone.length ? "o" : "x";
//   }

//   return result;
// }

// Alternate solution: 
const flyBy = (lamps, drone) => [...lamps].fill("o", 0, drone.length).join("");

// Test: 
// console.log(flyBy("xxxxxx", "====T"))
// console.log(flyBy("xxxxxxxxx", "==T"))
// console.log(flyBy("xxxxxxxxxxxxxxx", "=========T"))
