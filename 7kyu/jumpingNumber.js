/* Jumping Number */

/*
Notes: 
> Number passed is always Positive.
> Return the result as String.
> The difference between ‘9’ and ‘0’ is not considered as 1.
> All single digit numbers are considered as Jumping numbers.

Input >> Output Examples: 
jumpingNumber(9) ==> return "Jumping!!"
Explanation:
It's single-digit number

jumpingNumber(79) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1

jumpingNumber(23) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1

jumpingNumber(556847) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1

jumpingNumber(4343456) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1

jumpingNumber(89098) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1

jumpingNumber(32) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1
*/

/*
P - One argument as an integer.
R - "Jumping!!" if every digit in the given number differ by 1. Otherwise, return "Not!!"
E - 
jumpingNumber(1)        // "Jumping!!"
jumpingNumber(23)       // "Jumping!!"
jumpingNumber(79)       // "Not!!"
P - 
function jumpingNumber(n) {
    // Convert the given number to an array where each element represents a digit.
    // Iterate through the array.
    // Compare adjacent elements if there is a difference of 1 between them.
    // Return "Jumping!!" if true, otherwise return "Not!!".
}
*/

function jumpingNumber(n) {
    let arr = n.toString().split("").map(Number);
    for (i = 0; i < arr.length - 1; i++) {
        if (Math.abs(arr[i] - arr[i + 1]) !== 1) {
            return "Not!!";
        }
    }

    return "Jumping!!";
}

// Alternate solution: 
// const jumpingNumber = n => n.toString().split("").every((e, i, a) => i < 1 || Math.abs(e - a[i - 1]) === 1) ? "Jumping!!" : "Not!!";

// Test: 
// console.log(jumpingNumber(1))
// console.log(jumpingNumber(7))
// console.log(jumpingNumber(9))
// console.log(jumpingNumber(23))
// console.log(jumpingNumber(32))
// console.log(jumpingNumber(79))
// console.log(jumpingNumber(98))
// console.log(jumpingNumber(8987))
// console.log(jumpingNumber(4343456))
// console.log(jumpingNumber(98789876))
