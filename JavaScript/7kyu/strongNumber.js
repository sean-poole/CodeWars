/* Strong Number (Special Numbers Series #2) */

/*
Definition: 
Strong number is the number that the sum of the factorial of its digits is equal to number itself.
For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

Task: 
Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

Notes: 
Number passed is always Positive.
Return the result as String

Input >> Output Examples: 
> strong_num(1) ==> return "STRONG!!!!"
Since, the sum of its digits' factorial (1) is equal to number itself, then its a Strong.

> strong_num(123) ==> return "Not Strong !!"
Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself, then it's Not Strong .

> strong_num(2)  ==>  return "STRONG!!!!"
Since the sum of its digits' factorial of 2! = 2 is equal to number itself, then its a Strong.

> strong_num(150) ==> return "Not Strong !!"
Since the sum of its digits' factorial of 1! + 5! + 0! = 122 is not equal to number itself, Then it's Not Strong .
*/

function strong(n) {
    let arr = String(n).split("");
    let sum = 0;

    const factorial = num => num <= 1 ? 1 : num * factorial(num - 1);

    for (let i = 0; i < arr.length; i++) {
        sum += factorial(arr[i]);
    }

    return n == sum ? "STRONG!!!!" : "Not Strong !!";
}

// Test: 
// console.log(strong(1))
// console.log(strong(2))
// console.log(strong(145))
// console.log(strong(7))
// console.log(strong(93))
// console.log(strong(185))
