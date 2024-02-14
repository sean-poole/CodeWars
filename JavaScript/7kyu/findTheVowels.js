/* Find The Vowels */

/*
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]

NOTES: 
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)
*/

function vowelIndices(word) {
    let vowels = ["a", "e", "i", "o", "u", "y"];
    let indices = [];
    word.toLowerCase().split("").forEach((e, i) => {
        if (vowels.includes(e)) {
            indices.push(i + 1);
        }
    });

    return indices;
}

// Test: 
// console.log(vowelIndices("mmm"))
// console.log(vowelIndices("apple"))
// console.log(vowelIndices("super"))
// console.log(vowelIndices("orange"))
// console.log(vowelIndices("supercalifragilisticexpialidocious"))
