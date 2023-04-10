/* Complete The Pattern #01 */

/*
Task:
You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.
> Note: Returning the pattern is not the same as Printing the pattern.

Rules/Note:
> If n < 1 then it should return "" i.e. empty string.
> There are no whitespaces in the pattern.

Pattern:
1
22
333
....
.....
nnnnnn

Examples:
pattern(5):
1
22
333
4444
55555

pattern(11):
1
22
333
4444
55555
666666
7777777
88888888
999999999
10101010101010101010
1111111111111111111111

Hint: Use \n in string to jump to next line
*/

/*
P - One argument as an integer. 
R - String containing n rows, each filled with character n.
E - 
pattern(1)      // "1"
pattern(5)      // "1\n22\n333\n4444\n55555"
P - 
function pattern(n) {
    // Create an empty string.
    // Iterate through a loop n times.
    // Add character "n" to the string n times.
    // After the first iteration, append "\n" to line break.
    // Return string.
}
*/

function pattern(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        if (i > 1) result += "\n";
        result += `${i}`.repeat(i);
    }

    return result;
}

// Alternate solution: 
// function pattern(n) {
//     let result = [];
//     for (let i = 1; i <= n; i++) {
//         result.push(`${i}`.repeat(i));
//     }

//     return result.join("\n");
// }

// Test: 
// console.log(pattern(1))
// console.log(pattern(2))
// console.log(pattern(5))
