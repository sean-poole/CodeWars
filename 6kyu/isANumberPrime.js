/* Is A Number Prime */

/*
Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
Example
is_prime(1)     // false
is_prime(2)     // true
is_prime(-1)    // false
*/

/*
P - One argument as an integer. Can be 0, (+), or (-).
R - Boolean representing if the given integer is a prime number.
E - 
isPrime(1)    // false
isPrime(2)    // true
isPrime(73)   // true
isPrime(75)   // false
P - 
function isPrime(num) {
  // Check for valid input. Any number < 2 cannot be prime, return false.
  // Iterate from 2 to the square root of the given integer.
  // If the given integer is divisible by the current index, return false.
  // Return true if all tests pass.
}
*/

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); ++i) {
    if (num % i == 0) return false;
  }

  return true;
}

// Test: 
// console.log(isPrime(0))
// console.log(isPrime(1))
// console.log(isPrime(2))
// console.log(isPrime(73))
// console.log(isPrime(75))
// console.log(isPrime(-1))
