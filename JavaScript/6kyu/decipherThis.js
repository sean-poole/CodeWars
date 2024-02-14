/* Decipher This */

/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:
> the second and the last letter is switched (e.g. Hello becomes Holle)
> the first letter is replaced by its character code (e.g. H becomes 72)

Note: there are no special characters used, only letters and spaces

Examples: 
> decipherThis('72olle 103doo 100ya'); // 'Hello good day'
> decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

function decipherThis(str) {
    let result = [];
    for (word of str.split(" ")) {
        let code = word.split("").filter(e => !isNaN(e)).join("");
        let index = code.split("").length;
        word = String.fromCharCode(code) + word.slice(index);

        if (word.length > 2) {
            let second = word[1];
            let last = word[word.length - 1];
            word = word[0] + last + word.slice(2, word.length - 1) + second;
        }

        result.push(word);
    }

    return result.join(" ");
}

// Alternate solution: 
// function decipherThis(str) {
//     return str.split(" ")
//         .map(e => 
//             e.replace(/^\d+/, c => String.fromCharCode(c))
//             .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
//         )
//         .join(" ");
// }

// Test: 
// console.log(decipherThis('72olle 103doo 100ya'))
// console.log(decipherThis('82yade 115te 103o'))
// console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'))
