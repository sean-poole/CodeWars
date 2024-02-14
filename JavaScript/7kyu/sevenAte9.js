/* Seven Ate 9 */

/*
Write a function that removes every lone 9 that is inbetween 7s.
> "79712312" --> "7712312"
> "79797"    --> "777"
*/

/*
P - One argument as a string representing an integer.
R - String representing an integer with all 9's positioned between 7's removed.
E - 
sevenAte9("797")                  // "77"
sevenAte9("7979797")              // "7777"
sevenAte9("165561786121789797")   // "16556178612178977"
P - 
function sevenAte9(str) {
  // Split the given string into an array.
  // Iterate through the array.
  // If the current number is 9, check the previous and following number.
  // If they are 7's, remove the 9.
  // Else, continue iterating.
  // Join array and return as a string.
}
*/

function sevenAte9(str) {
  let nums = str.split("");
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === "9" && nums[i - 1] === "7" && nums[i + 1] === "7") {
      nums.splice(i, 1);
    }
  }

  return nums.join("");
}

// Test: 
// console.log(sevenAte9("797"))
// console.log(sevenAte9("7979797"))
// console.log(sevenAte9("165561786121789797"))
