/* ATM */

/*
An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

Return that number, or -1 if it is impossible.

Good Luck!!!
*/

/*
P - One argument as an integer.
R - Integer representing the number of banknotes needed to distribute the given integer. Return -1 if the given integer is invalid (not an increment of 10).
E - 
solve(770)    // 4
solve(10)     // 1
solve(125)    // -1
solve(42)     // -1
P - 
function solve(n) {
  // Check if the given argument is a valid integer.
  // Create a variable to store the number of banknotes as an integer.
  // While n > 0,
  // Check if denominations of 500, 200, 100, 50, 20, or 10 can be subtracted from the given n. Increment banknotes by 1 for each iteration.
  // Return number of banknotes as an integer.
}
*/

function solve(n) {
  if (n < 0 || n > 1500 || n % 10 !== 0) return -1;

  let notes = 0;
  while (n > 0) {
    if (n >= 500) {
      n -= 500;
      notes++;
    } else if (n >= 200) {
      n -= 200;
      notes++;
    } else if (n >= 100) {
      n -= 100;
      notes++;
    } else if (n >= 50) {
      n -= 50;
      notes++;
    } else if (n >= 20) {
      n -= 20;
      notes++;
    } else {
      n -= 10;
      notes++;
    }
  }

  return notes;
}

// Test: 
// console.log(solve(770))
// console.log(solve(550))
// console.log(solve(10))
// console.log(solve(1250))
// console.log(solve(125))
// console.log(solve(666))
// console.log(solve(42))
