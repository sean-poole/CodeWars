/* Unlucky Days */

/*
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.
Output: Number of Black Fridays in the year as an integer.

Examples:
unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/

function unluckyDays(year) {
    let result = 0;
    for (let i = 0; i < 12; i++) {
        if (new Date(year, i, 13).getDay() === 5) {
            result++;
        }
    }

    return result;
}

// Test: 
// console.log(unluckyDays(1586))
// console.log(unluckyDays(1001))
// console.log(unluckyDays(2819))
// console.log(unluckyDays(2792))
// console.log(unluckyDays(2723))
// console.log(unluckyDays(1909))
// console.log(unluckyDays(1812))
// console.log(unluckyDays(1618))
// console.log(unluckyDays(2132))
// console.log(unluckyDays(2065))
