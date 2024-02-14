/* String Array Duplicates */

/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:
> dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
> dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

*/

/* 
P - One argument as an array with each element containing a string.
R - Given array with consecutive characters removed from each string element.
E - 
dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"])       // ['codewars','picaniny','hubububo']
dup(["abracadabra","allottee","assessee"])                              // ['abracadabra','alote','asese']
P - 
function dup(s) {
    // Iterate through the given array.
    // Iterate through the characters of the string element.
    // If the character at index + 1 === the character at the current index, remove it.
    // Return array.
}
*/

function dup(s) {
    let result = [];
    for (word of s) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === word[i + 1]) {
                word = word.slice(0, i) + word.slice(i + 1);
                i--;
            }
        }

        result.push(word);
    }

    return result;
}

// Alternate solution: 
// const dup = s => s.map(word => word.replace(/(.)\1+/g,'$1'));

// Test: 
// console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]))
// console.log(dup(["abracadabra","allottee","assessee"]))
// console.log(dup(["kelless","keenness"]))
// console.log(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]))
// console.log(dup(["adanac","soonness","toolless","ppellee"]))
// console.log(dup(["callalloo","feelless","heelless"]))
// console.log(dup(["putteellinen","keenness"]))
// console.log(dup(["kelless","voorraaddoosspullen","achcha"]))
