/* Sum Of Numbers From 0 To N */

/*
Description:
We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:
> 6
Output:
0+1+2+3+4+5+6 = 21

Input:
> -15
Output:
-15<0

Input:
> 0
Output:
0=0
*/

function SequenceSum(count) {
    let sum = [];
    let n = 0;

    if (count == 0) return `${count}=0`;
    if (count < 0) return `${count}<0`;

    while (n <= count) {
        sum.push(n);
        n++;
    }

    return `${sum.join("+")} = ${sum.reduce((acc, c) => acc += c, 0)}`;
}

// Test: 
// console.log(SequenceSum(0))
// console.log(SequenceSum(-1))
// console.log(SequenceSum(6))

