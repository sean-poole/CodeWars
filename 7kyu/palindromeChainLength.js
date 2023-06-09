/* Palindrome Chain Length */

/*
Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

If the input number is already a palindrome, the number of steps is 0.

All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.

Example: 
For example, start with 87:

  87 +   78 =  165     - step 1, not a palindrome
 165 +  561 =  726     - step 2, not a palindrome
 726 +  627 = 1353     - step 3, not a palindrome
1353 + 3531 = 4884     - step 4, palindrome!
4884 is a palindrome and we needed 4 steps to obtain it, so answer for 87 is 4.
*/

/*
P - One argument as a positive integer.
R - Integer representing the number of steps required to obtain a palindrome. Each step reverses the digits and gets added to the given number.
E - 
palindromeChainLength(88)     // Already a palindrome. Returns: 0
palindromeChainLength(87)     // 87 + 78 => 165 + 561 => 726 + 627 => 1353 + 3531 = 4884. Returns: 4
P - 
function palindromeChainLength(n) {
  // Create an integer variable to store count.
  // Create a string variable that stores the reverse order of the given integer's digits.
  // While the given integer is not a palindrome: 
  // Add the given integer's reversed digits to itself.
  // Create a new comparison string from the new integer value.
  // Return integer representing the number of iterations required until a palindrome is met.
}
*/

function palindromeChainLength(n) {
  let count = 0;
  let palindrome = String(n).split("").reverse().join("");

  while (n != palindrome) {
    n = n + Number(palindrome);
    palindrome = String(n).split("").reverse().join("");
    ++count;
  }

  return count;
}

// Test: 
// console.log(palindromeChainLength(1))
// console.log(palindromeChainLength(88))
// console.log(palindromeChainLength(87))
// console.log(palindromeChainLength(89))
// console.log(palindromeChainLength(10))
