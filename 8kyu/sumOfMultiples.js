/* Sum of Multiples */

/*
Your Job: 
Find the sum of all multiples of n below m

Keep in Mind: 
n and m are natural numbers (positive integers)
m is excluded from the multiples

Examples: 
> sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
> sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
> sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
> sumMul(4, -7)  ==> "INVALID"
*/

/*
P - Two arguments as integers. Can be (+), (-), or 0.
R - Integer representing the sum of multiples of n from 0 to m. Does not include m.
E - 
sumMul(2, 9)      // 2 + 4 + 6 + 8 = 20
sumMul(4, -7)     // "INVALID"
P - 
function sumMul(n, m) {
  // Check for valid inputs. If n >= m, return string "INVALID".
  // Create an integer variable to store the sum of multiples.
  // Iterate from 0 to m in increments of n.
  // Add each step to the created integer variable.
  // Once the for loop is complete, return sum as an integer.
}
*/

function sumMul(n, m) {
  if (n >= m) return "INVALID";

  let sum = 0;
  for (let i = 0; i < m; i+=n) {
    sum += i;
  }

  return sum;
}

// Test: 
// console.log(sumMul(0, 0))
// console.log(sumMul(2, 9))
// console.log(sumMul(4, -7))
