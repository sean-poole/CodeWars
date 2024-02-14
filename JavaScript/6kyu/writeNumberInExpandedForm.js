/* Write Number In Expanded Form */

/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
    let numStr = num.toString().split("");
    for (let i = 0; i < numStr.length; i++) {
        for (let x = numStr.length - i; x > 1; x--) {
            numStr[i] += "0";
        }
    }

    numStr = numStr.filter(e => !e.startsWith(0));
    return numStr.join(" + ");
}

// Alternate solution: 
// const expandedForm = num => {
//     return num
//         .toString()
//         .split("")
//         .reverse()
//         .map((e, i) => e * Math.pow(10, i))
//         .filter(a => a > 0)
//         .reverse()
//         .join(" + ");
// }

// Test: 
// console.log(expandedForm(12))
// console.log(expandedForm(42))
// console.log(expandedForm(70304))
