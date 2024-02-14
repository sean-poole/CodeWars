/* Disarium Number (Special Numbers Series #3) */

/*
Definition: 
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

Task: 
Given a number, Find if it is Disarium or not .

Notes: 
> Number passed is always Positive.
> Return the result as String

Input >> Output Examples: 
disariumNumber(89) ==> return "Disarium !!"

Explanation:
Since , 81 + 92 = 89 , thus output is "Disarium !!"
disariumNumber(564) ==> return "Not !!"
Explanation:
Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"
*/

function disariumNumber(n) {
    return n === String(n).split("").map((e, i) => Number(e) ** (i + 1)).reduce((acc, c) => acc += c, 0) ? "Disarium !!" : "Not !!";
}

// Test: 
// console.log(disariumNumber(89))
// console.log(disariumNumber(564))
// console.log(disariumNumber(1024))
// console.log(disariumNumber(135))
// console.log(disariumNumber(136586))
