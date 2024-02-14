/* Reverse Every Other Word In The String */

/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/

function reverse(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (i % 2) arr[i] = arr[i].split("").reverse().join("");
    }

    return arr.join(" ").trim();
}

// Alternate solution: 
// const reverse = str => str.split(" ").map((word, index) => index % 2 ? word.split("").reverse().join("") : word).join(" ").trim();

// Test: 
// console.log(reverse("Reverse this string, please!"))
// console.log(reverse("I really don't like reversing strings!"))
// console.log(reverse(""))
