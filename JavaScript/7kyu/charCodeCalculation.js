/* Char Code Calculation */

/*
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6

*/

function calc(x) {
    let xCode = x.toString("").split("").map(c => c.charCodeAt(0)).join("");
    let total1 = xCode.split("").reduce((acc, c) => acc += Number(c), 0);
    let total2 = xCode.replaceAll(7, 1).split("").reduce((acc, c) => acc += Number(c), 0);

    return total1 - total2;
}

// Test: 
// console.log(calc("abcdef"))
// console.log(calc("ifkhchlhfd"))
// console.log(calc("aaaaaddddr"))
// console.log(calc("jfmgklf8hglbe"))
// console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"))
