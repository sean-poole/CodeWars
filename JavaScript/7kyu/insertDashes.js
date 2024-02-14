/* Insert Dashes */

/*
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/

/*
P - One argument as an integer. Will always be (+).
R - String of the given integer with "-" inserted between consecutive odd numbers.
E - 
insertDash(454793)      // "4547-9-3"
insertDash(123456)      // "123456"
P - 
function insertDash(num) {
    // Split the number where each element represents a digit.
    // Iterate through the array.
    // If the number at index is odd and if the number at index + 1 is odd, insert a "-".
    // Join the array and return the new string.
}
*/

const insertDash = num => num.toString().split("").map((e, i, a) => e % 2 && a[i + 1] % 2 ? `${e}-` : e).join("");

// Test: 
// console.log(insertDash(454793))
// console.log(insertDash(123456))
// console.log(insertDash(1003567))
