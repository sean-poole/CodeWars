/* Grasshopper - If/Else Syntax Debug */

/*
While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

The function receives one parameter health which will always be a whole number between -10 and 10.
*/

/*
P - Broken function.
R - Corrected function that takes in an integer as an argument, and returns boolean if the integer is >= 0.
E - 
checkAlive(5)   // true
checkAlive(0)   // false
P - 
function checkAlive(health) {
  if () {
    health < 0
    return false
  } else () {
    return true
  }
}

// Change evaluation to include 0.
// Move "health <= 0" conditional inside if parentheses.
// Remove () on else statement.

*/

function checkAlive(health) {
  if (health <= 0) {
    return false;
  } else {
    return true;
  }
}

// Alternate solution: 
// const checkAlive = health => health > 0;

// Test: 
// console.log(checkAlive(5))
// console.log(checkAlive(0))
