/* Special Number - Special Number Series 05 */

/*
Definition: 
A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5
Given a number determine if it special number or not .

Notes: 
> The number passed will be positive (N > 0).
> All single-digit numbers within the interval [1:5] are considered as special number.

Input >> Output Examples: 
specialNumber(2) ==> return "Special!!"
Explanation:
It's a single-digit number within the interval [1:5].

specialNumber(9) ==> return "NOT!!"
Explanation:
Although, it's a single-digit number but Outside the interval [1:5].

specialNumber(23) ==> return "Special!!"
Explanation:
All the number's digits formed from the interval [0:5] digits.

specialNumber(39) ==> return "NOT!!"
Explanation:
Although, there is a digit (3) Within the interval But the second digit is not (Must be ALL The Number's Digits ).

specialNumber(59) ==> return "NOT!!"
Explanation:
Although, there is a digit (5) Within the interval But the second digit is not (Must be ALL The Number's Digits ).
specialNumber(513) ==> return "Special!!"

specialNumber(709) ==> return "NOT!!"
*/

/*
P - Number. (+).
R - "Special!!" if the returned number consists only of 0, 1, 2, 3, 4, 5. Otherwise, "NOT!!".
E - 
specialNumber(2)        // "Special!!"
specialNumber(6)        // "NOT!!"
P - 
*/

function specialNumber(n) {
    const nums = [0, 1, 2, 3, 4, 5];
    for (let num of n.toString().split("")) {
        if (!nums.includes(Number(num))) return "NOT!!";
    }

    return "Special!!";
}

// Alternate solution: 
// const specialNumber = n => n.toString().split("").every(e => [0, 1, 2, 3, 4, 5].includes(+e)) ? "Special!!" : "NOT!!";

// Test: 
// console.log(specialNumber(2))
// console.log(specialNumber(3))
// console.log(specialNumber(6))
// console.log(specialNumber(9))
// console.log(specialNumber(11))
// console.log(specialNumber(55))
// console.log(specialNumber(26))
// console.log(specialNumber(92))
// console.log(specialNumber(25432))
// console.log(specialNumber(2783))
