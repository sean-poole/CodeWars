/* Numbers In Strings */

/*
In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

Good luck!
*/

/*
P - One argument as a string.
R - Integer representing the largest number in the given string.
E - 
solve("gh12cdy695m1")   // 695
solve("2ti9iei7qhr5")   // 9
solve("vih61w8oohj5")   // 61
solve("f7g42g16hcu5")   // 42
solve("lu1j8qbbb85")    // 85
P - 
function solve(s) {
  // Create a variable to store the largest integer.
  // Create a variable to store the current number sequence.
  // Split the given string into an array and iterate through each element.
  // If the current element is a number, concatenate it to the current number variable. If the current number is greater than or equal to the largest stored integer, assign it to the largest integer variable.
  // If the current element is not a number, set the current number variable as an empty string.
  // Return the largest integer.
}
*/

function solve(s) {
  let largest = 0;
  let current = "";
  for (e of s.split("")) {
    if (!isNaN(e)) {
      current += e;
      if (+current >= +largest) largest = +current;
    } else {
      current = "";
    }
  }

  return largest;
}

// Test: 
// console.log(solve("gh12cdy695m1"))
// console.log(solve("2ti9iei7qhr5"))
// console.log(solve("vih61w8oohj5"))
// console.log(solve("f7g42g16hcu5"))
// console.log(solve("lu1j8qbbb85"))
