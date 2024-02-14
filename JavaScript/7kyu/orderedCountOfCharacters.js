/* Ordered Count Of Characters */

/*
Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

function orderedCount(text) {
    let result = [];
    for (e of text.split("")) {
        if (!result.includes(e)) {
            result.push(e);
        }
    }

    return result.map(e => [e, text.split("").filter(x => x == e).length]);
}

// Alternate solution: 
// const orderedCount = text => [...new Set([...text])].map(e => [e, text.split(e).length - 1]);

// Test: 
// console.log(orderedCount("abracadabra"))
// console.log(orderedCount("Code Wars"))
// console.log(orderedCount("233312"))
