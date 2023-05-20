/* Primorial Of A Number */

/*
Definition (Primorial Of a Number): 
Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.

Task: 
Given a number N, calculate its primorial.

Notes: 
Only positive numbers will be passed (N > 0).

Input >> Output Examples:
1- numPrimorial (3) ==> return (30)
Explanation:
Since the passed number is (3), Then the primorial should obtained by multiplying 2 * 3 * 5 = 30.
Mathematically written as, P3# = 30.

2- numPrimorial (5) ==> return (2310)
Explanation:
Since the passed number is (5), Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 = 2310.
Mathematically written as, P5# = 2310.

3- numPrimorial (6) ==> return (30030)
Explanation:
Since the passed number is (6), Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 * 13 = 30030.
Mathematically written as, P6# = 30030.
*/

/*
P - One argument as an integer greater than 0.
R - Integer representing the primorial value of the given number.
E - 
numPrimorial(3)   // 30
numPrimorial(4)   // 210
numPrimorial(5)   // 2310
P - 
function numPrimorial(n) {
  // Create an empty array to store prime numbers.
  // Create an incrementing integer variable used to check for prime numbers. Starting at 2 because that is the lowest possible prime number.
  // Create a helper function to check if a given number is a prime number.
  // Get the first n prime numbers be incrementing the created integer variable and passing it through the created helper function.
  // Push prime numbers to the created array variable.
  // Reduce the array of prime numbers with a multiplication operator and return the integer.
}
*/

function numPrimorial(n) {
  let primes = [];
  let number = 2;

  while (primes.length < n) {
    if (isPrime(number)) {
      primes.push(number);
    }
    number++;
  }

  return primes.reduce((acc, c) => acc *= c, 1);
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

// Test: 
// console.log(numPrimorial(3))
// console.log(numPrimorial(4))
// console.log(numPrimorial(5))
// console.log(numPrimorial(8))
// console.log(numPrimorial(9))
