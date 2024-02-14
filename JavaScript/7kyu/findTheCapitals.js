/* Find The Capitals */

/*
Instructions: 
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example: 
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

function capitals(word) {
    let result = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            result.push(i);
        }
    }

    return result;
}

// Test: 
// console.log(capitals('CodEWaRs'))
