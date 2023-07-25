/* Fix Your Code Before The Garden Dies */

const { mainModule } = require("process");

/*
You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

Your task is to debug the code before your plants die!
*/

/*
P - Function with syntax errors.
R - Corrected function returns a string.
E - 
rainAmount(100)   // "Your plant has had more than enough water for today!"
rainAmount(39)    // "You need to give your plant 1mm of water"
P - 
function rainAmount(mm) {
  if (rainAmount = 40) {
    return "You need to give your plant " + {rainAmount - 40} + " mm of water"
  };
  if else {
    return "Your plant has had more than enough water for today!"
  }
}

// Use given mm argument to check for water amount.
// Subtract mm from 40 to calculate required water.
// Change "if else" to "else" statement.
*/

function rainAmount(mm) {
  if (mm < 40) {
    return `You need to give your plant ${40 - mm}mm of water`;
  } else {
    return `Your plant has had more than enough water for today!`;
  }
}

// Test: 
// console.log(rainAmount(100))
// console.log(rainAmount(39))
