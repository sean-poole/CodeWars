/* Pillars */

/*
There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:
> number of pillars (≥ 1);
> distance between pillars (10 - 30 meters);
> width of the pillar (10 - 50 centimeters).

Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
*/

/*
P - Three arguments as integers. First argument will be > 0. Second argument will be between 10 - 30 meters. Third argument will be between 10 - 50 centimeters.
R - Integer representing the distance between the first and last pillar, excluding the width of the first and last pillars.
E - 
pillars(1, 10, 10)      // 0
pillars(2, 20, 25)      // 2000
pillars(11, 15, 30)     // 15270
P - 
function pillars(numPill, dist, width) {
  // If there is more than 1 pillar, continue with calculations. Else, return 0.
  // Calculate the total width of the pillars, excluding the first and last pillars.
  // Calculate the distance between each pillar and convert units to centimeters.
  // Get the sum of the two values and return integer.
}
*/

const pillars = (numPill, dist, width) => numPill > 1 ? (numPill - 2) * width + (numPill - 1) * dist * 100 : 0;

// Test: 
// console.log(pillars(1, 10, 10))
// console.log(pillars(2, 20, 25))
// console.log(pillars(11, 15, 30))
