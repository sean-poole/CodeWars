/* Easy Logs */

/*
Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.
*/

/*
P - Three arguments as integer.
R - Integer representing the sum of two logs (a, b) with base x.
E - 
logs(10, 2, 3)    // 0.7781512503836435
logs(5, 2, 3)     // 1.1132827525593785
logs(1000, 2, 3)  // 0.25938375012788123
P - 
function logs(x, a, b) {
  // Multiply given a & b.
  // Calculate log of the product.
  // Calculate log of given x.
  // Divide log(x) by log(a * b).
  // Return integer.
}
*/

const logs = (x, a, b) => Math.log(a * b) / Math.log(x);

// Test: 
// console.log(logs(10, 2, 3))
// console.log(logs(5, 2, 3))
// console.log(logs(1000, 2, 3))
