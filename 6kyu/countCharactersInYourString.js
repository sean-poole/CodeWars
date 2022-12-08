/* Count Characters In Your String */

/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count(string) {
    let chars = {};
    string.split("").forEach(c => {
        if (!chars[c]) {
            chars[c] = 1;
        } else {
            chars[c] += 1;
        }
    });

    return chars;
}

// Test: 
// console.log(count("aba"))
// console.log(count(""))
