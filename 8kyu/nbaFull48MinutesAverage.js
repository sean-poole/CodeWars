/* NBA Full 48 Minutes Average */

/*
An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

Examples:
pointsPer48(12, 20) // 28.8
pointsPer48(10, 10) // 48 
pointsPer48(5, 17) // 14.1 
pointsPer48(0, 0) // 0

Notes:
All inputs will be either be an integer or float.
Follow your dreams!
*/

/*
P - Two arguments as integers.
R - Integer representing a player's points per game if they were to play the full 48 minutes of a basketball game.
E - 
pointsPer48(12, 20)   // 28.8
pointsPer48(10, 10)   // 48.0
pointsPer48(5, 17)    // 14.1
pointsPer48(0, 0)     // 0
P - 
function pointsPer48(ppg, mpg) {
  // Multiply the given ppg by 48.
  // Divide the product by the given mpg.
  // Round to 1 decimal place.
  // Return integer.
}
*/

const pointsPer48 = (ppg, mpg) => Number((ppg * 48 / mpg).toFixed(1)) || 0;

// Test: 
// console.log(pointsPer48(12, 20))
// console.log(pointsPer48(10, 10))
// console.log(pointsPer48(5, 17))
// console.log(pointsPer48(0, 0))
// console.log(pointsPer48(30.8, 34.7))
// console.log(pointsPer48(22.9, 33.8))
