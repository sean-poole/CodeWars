/* Type of Sum */

/*
Return the type of the sum of the two arguments
*/

/*
P - Two arguments. Can be string, number, boolean, null, or undefined.
R - String representing the type of the sum of the two arguments.
E - 
typeOfSum(12, 1)            // "number"
typeOfSum("d", 1)           // "string"
typeOfSum(null, undefined)  // "number"
typeOfSum(undefined, "re")  // "string"
P - 
function typeOfSum(a, b) {
  // Add given arguments a & b.
  // Apply typeof operator.
  // Return string.
}
*/

const typeOfSum = (a, b) => typeof(a + b);

// Test: 
// console.log(typeOfSum(12, 1))
// console.log(typeOfSum("d", 1))
// console.log(typeOfSum(1, "a"))
// console.log(typeOfSum("dd", ""))
// console.log(typeOfSum(true, 1))
// console.log(typeOfSum("s", false))
// console.log(typeOfSum(null, undefined))
// console.log(typeOfSum(undefined, "re"))
// console.log(typeOfSum(undefined, true))
// console.log(typeOfSum(null, false))
