/* Square Every Digit */

/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

const squareDigits = num => Number(num.toString().split("").map(x => x**2).join(""));

// Test: 
// test1 = 3212;
// test2 = 2112;
// test3 = 0;

// console.log(squareDigits(test1))
// console.log(squareDigits(test2))
// console.log(squareDigits(test3))
