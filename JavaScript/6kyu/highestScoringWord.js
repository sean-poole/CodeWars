/* Highest Scoring Word */

/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    let highScore = 0;

    for (word of x.split(" ")) {
        let compareScore = 0;
        for (c of word) {
            compareScore += letters.indexOf(c) + 1;
        }
        if (compareScore > highScore) {
            highScore = compareScore;
            result = word;
        }
    }
    return result;
}

// Test: 
// console.log(high('man i need a taxi up to ubud'))
// console.log(high('what time are we climbing up the volcano'))
// console.log(high('take me to semynak'))
// console.log(high('aa b'))
// console.log(high('b aa'))
// console.log(high('bb d'))
// console.log(high('d bb'))
// console.log(high('aaa b'))
