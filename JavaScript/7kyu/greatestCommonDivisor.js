/* Greatest Common Divisor */

/*
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.
The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/

function mygcd(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);

    while(y) {
        let a = y;
        y = x % y;
        x = a;
    }

    return x;
}

// Alternate solution: 
// const mygcd = (x, y) => y == 0 ? x : mygcd(y, x % y);

// Test: 
// console.log(mygcd(30, 12))
// console.log(mygcd(8, 9))
// console.log(mygcd(1, 1))
