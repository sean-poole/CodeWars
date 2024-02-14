/* Weight For Weight */

/*
My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.
I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.
For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.
Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 
"100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:
180 is before 90 since, having the same "weight" (9), it comes before as a string.
All numbers in the list are positive numbers and the list can be empty.

Notes: 
> it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
> For C: The result is freed.
*/

/*
P - One argument as a string containing integers separated by spaces.
R - String containing modified integers from the given string separated by spaces in ascending order.
E - 
orderWeight("103 123 4444 99 2000")                             // "2000 103 123 4444 99"
orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")    // "11 11 2000 10003 22 123 1234000 44444444 9999"
P - 
function orderWeight(string) {
  // Create a function that takes in a string, splits it into an array, and calculates the sum of its digits.
  // Create a function that takes in two strings, passes each string into the previously created sum function, and returns a sorting value.
  // Split the given string, sort its elements using the created sorting function, and join with spaces.
  // Return string of newly sorted integers. 
}
*/

function orderWeight(string) {
  const sum = str => str.split("").reduce((acc, c) => acc += +c, 0);
  const compare = (a, b) => {
    let sumA = sum(a);
    let sumB = sum(b);
    return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
  }

  return string.split(" ").sort(compare).join(" ");
}

// Test: 
// console.log(orderWeight("103 123 4444 99 2000"))
// console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))
