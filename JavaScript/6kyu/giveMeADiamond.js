/* Give Me A Diamond */

/*
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task: 
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples: 
A size 3 diamond:
 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:
  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/

function diamond(n) {
    if (n < 1 || n % 2 == 0) return null;

    let result = "";
    for (let i = 0; i < n; i++) {
        let length = Math.abs((n - 2 * i - 1) / 2)
        result += " ".repeat(length);
        result += "*".repeat(n - 2 * length);
        result += "\n";
    }

    return result;
}

// Alternate solution: 
// function diamond(n) {
//     if (n < 1 || n % 2 == 0) return null;
//     const middle = Math.floor(n / 2);

//     return Array.apply(null, {length: n})
//         .map((e, i) => {
//             const spaces = Math.abs(i - middle);
//             const d = n - spaces * 2;
//             return Array(spaces + 1).join(" ") + Array(d + 1).join("*");
//         })
//         .join("\n") + "\n";
// }

// Test: 
// console.log(diamond(1))
// console.log(diamond(3))
// console.log(diamond(5))
// console.log(diamond(2))
// console.log(diamond(-3))
// console.log(diamond(0))
