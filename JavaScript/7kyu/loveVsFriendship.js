/* Love vs Friendship */

/*
If　a = 1, b = 2, c = 3 ... z = 26
Then l + o + v + e = 54
and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)
Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.
The input will always be made of only lowercase letters and will never be empty.
*/

function wordsToMarks(string) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    return string.split("").map(c => c = Number(alphabet.indexOf(c)) + 1).reduce((acc, c) => acc += c, 0);
}

// Alternate solution: 
// const wordsToMarks = string => [...string].reduce((acc, c) => acc += c.charCodeAt() - 96, 0);

// Test: 
// console.log(wordsToMarks("attitude"))
// console.log(wordsToMarks("friends"))
// console.log(wordsToMarks("family"))
// console.log(wordsToMarks("selfness"))
// console.log(wordsToMarks("knowledge"))
