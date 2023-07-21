/* Grasshopper - Order of Operations */

/*
You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.
*/

/*
P - Function taking no arguments returns 10.
R - Alter the given function so it returns 32.
E - orderOperations()   // 32
P - 
function orderOperations() {
  return 2 + 2 * 2 + 2 * 2;
}

// Apply parenthesis to the return statement so the result is 32.
*/

const orderOperations = () => (2 + 2) * (2 + 2) * 2;

// Test: 
// console.log(orderOperations())
