/* Moves In Squared Strings */

/*
This kata is the first of a sequence of four about "Squared Strings".
You are given a string of n lines, each substring being n characters long: For example:
> s = "abcd\nefgh\nijkl\nmnop"
We will study some transformations of this square of strings.

Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
> vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
> hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
or printed:
vertical mirror   |horizontal mirror   
abcd --> dcba     |abcd --> mnop 
efgh     hgfe     |efgh     ijkl 
ijkl     lkji     |ijkl     efgh 
mnop     ponm     |mnop     abcd 

Task:
Write these two functions
high-order function oper(fct, s) where fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

Examples:
s = "abcd\nefgh\nijkl\nmnop"
oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"

Note:
The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Sample Tests".

*/

const vertMirror = string => string.split("\n").map(e => e.split("").reverse().join("")).join("\n");

const horMirror = string => string.split("\n").reverse().join("\n");

const oper = (fct, s) => fct(s);

// Test: 
// console.log(oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"))
// console.log(oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx"))
// console.log(oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt"))
// console.log(oper(horMirror, "njMK\ndbrZ\nLPKo\ncEYz"))
