/* Vampire Numbers */

/*
Our loose definition of Vampire Numbers can be described as follows:
6 * 21 = 126
# 6 and 21 would be valid 'fangs' for a vampire number as the 
# digits 6, 1, and 2 are present in both the product and multiplicands

10 * 11 = 110
# 110 is not a vampire number since there are three 1's in the
# multiplicands, but only two 1's in the product

Create a function that can receive two 'fangs' and determine if the product of the two is a valid vampire number.
*/

/*
P - Two arguments as integers. Can be (+) or (-).
R - Boolean representing if the product of the given numbers is a vampire number (Every digit of the multiplicands are also represented in the product).
E - 
vampire_test(21, 6)       // true: 21 * 6 = 126
vampire_test(10, 11)      // false: 10 * 11 = 110, additional 1 not represented
vampire_test(30, -51)     // true: 30 * -51 = -1530
vampire_test(-246, -510)  // false: -246 * -510 = 125460, negative not represented
P - 
function vampire_test(a, b) {
  // Concatenate the given arguments as strings, split into an array, sort, join.
  // Multiply the given arguments together, convert to string, split into an array, sort, join.
  // Compare the strings and return boolean.
}
*/

function vampire_test(a, b) {
  return (String(a) + String(b)).split("").sort().join() == (String(a * b)).split("").sort().join();
}

// Test: 
// console.log(vampire_test(21, 6))
// console.log(vampire_test(204, 615))
// console.log(vampire_test(30, -51))
// console.log(vampire_test(-246, -510))
// console.log(vampire_test(2947050, 8469153))
// console.log(vampire_test(2947051, 8469153))
// console.log(vampire_test(0, 0))
