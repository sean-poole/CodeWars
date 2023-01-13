/* Dashatize It */

/*
Given a variable n,
If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.
If n is not an integer, return the string "NaN".

Ex:
dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/

function dashatize(num) {
    if (Number.isNaN(num)) return "NaN";
    return Math.abs(num).toString().split("")
    .map((x, i, a) => 
        i == 0 ? x
        : x % 2 || a[i - 1] % 2 ? `-${x}` : x)
    .join("");
}

// Test: 
// console.log(dashatize(274))
// console.log(dashatize(5311))
// console.log(dashatize(86320))
// console.log(dashatize(974302))

// console.log(dashatize(NaN))
// console.log(dashatize(0))
// console.log(dashatize(-1))
// console.log(dashatize(-28369))
