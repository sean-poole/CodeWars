/* Isograms */

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
*/

function isIsogram(str) {
    let arr = str.toLowerCase().split("");
    let compareArr = [];
    arr.forEach(c => {
        if (!compareArr.includes(c)) {
            compareArr.push(c);
        }
    });
    return arr.join("") == compareArr.join("");
}

// Alternate solution:
// const isIsogram = str => new Set(str.toLowerCase()).size == str.length;

// Test: 
// console.log(isIsogram("Dermatoglyphics"))
// console.log(isIsogram("isogram"))
// console.log(isIsogram("aba"))
// console.log(isIsogram("moOse"))
// console.log(isIsogram("isIsogram"))
// console.log(isIsogram(""))
