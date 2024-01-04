/* Nth Fibonacci */

/*
I love Fibonacci numbers in general, but I must admit I love some more than others.
I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.

For example:
   nthFibo(4) == 2

Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
*/

/*
P - One argument as an integer. Must be positive.
R - Integer representing the given nth number in the Fibonacci sequence.
E - 
nthFibo(1)  // 0
nthFibo(2)  // 1
nthFibo(3)  // 1
nthFibo(4)  // 2
P - 
function nthFibo(n) {
  // Create an array variable containing the first two numbers of the Fibonacci sequence.
  // Iterate from 1 to n.
  // Push the sum of the previous two array elements to the array.
  // If n > 0, return the nth element of the array.
  // Else, return 0.
}
*/

function nthFibo(n) {
  let arr = [0, 1];

  for (let i = 1; i < n; i++) {
    arr.push(arr[i - 1] + arr[i]);
  }

  return n > 0 ? arr[n - 1] : 0;
}

// Test: 
// console.log(nthFibo(1))
// console.log(nthFibo(2))
// console.log(nthFibo(3))
// console.log(nthFibo(4))
