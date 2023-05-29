/* Largest 5 Digit Number In A Series */

/*
In the following 6 digit number:
> 283910
> 91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:
> 1234567890
> 67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.
*/

/*
P - One argument as a string representing a number.
R - Integer representing the largest 5 digit sequence within the given number.
E - 
solution("1234567898765")     // 98765
solution("731674765")         // 74765
P - 
function solution(digits) {
  // Create an empty integer variable to store the largest 5 digit sequence.
  // Iterate through the given string.
  // Compare the 5 digit sequence at the current index with the stored value.
  // If the current sequence is larger, assign it to the created variable.
  // Else, continue.
  // Return the largest 5 digit sequence as an integer.
}
*/

function solution(digits) {
  let largest = 0;
  for (let i = 0; i <= digits.length - 5; i++) {
    let current = Number(digits.slice(i, i + 5));
    if (current > largest) largest = current;
  }

  return largest;
}

// Test: 
// console.log(solution("1234567898765"))
// console.log(solution("731674765"))
