/* Maximum Length Difference */

/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string
*/

function mxdiflg(a1, a2) {
    if (a1.length == 0 || a2.length == 0) {
        return -1;
    }
    let x = a1.map(n => n.length);
    let y = a2.map(n => n.length);

    return Math.max(Math.max(...x) - Math.min(...y), Math.max(...y) - Math.min(...x));
}

// Test: 
// let s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// let s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]

// console.log(mxdiflg(s1, s2))
