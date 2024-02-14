/* Your Order, Please */

/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples: 
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

function order(words) {
    let sortedWords = [];

    if (words.length == 0) {
        return "";
    }

    words = words.split(" ");
    for (let i = 1; i <= words.length; i++) {
        sortedWords.push(i);
    }

    sortedWords.forEach(n => {
        for (let word of words) {
            if (word.includes(n)) {
                sortedWords[n - 1] = word;
            }
        }
    });
    return sortedWords.join(" ");
}

// Alternate solution:
// function order(words){
  
//     return words.split(" ").sort(function(a, b){
//         return a.match(/\d/) - b.match(/\d/);
//     }).join(" ");
// }

// Test: 
// console.log(order("is2 Thi1s T4est 3a"))
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
// console.log(order(""))
