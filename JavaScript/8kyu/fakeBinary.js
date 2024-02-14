/* Fake Binary */

/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

function fakeBin(x) {
    return x.split("").map(x => x < 5 ? "0" : "1").join("");
}

// Test: 
// test1 = '45385593107843568'
// test2 = '509321967506747'
// test3 = '366058562030849490134388085'
// console.log(fakeBin(test1))
// console.log(fakeBin(test2))
// console.log(fakeBin(test3))
