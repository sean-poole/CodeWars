/* Heron's Formula */

/*
Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

Heron's formula:
A = \sqrt{ s * (s - a) * (s - b) * (s - c) }

where s = (a + b + c) / 2

Output should have 2 digits precision.
*/

/*
P - 3 numbers. Numbers must be (+).
R - Area of a triangle represented as a number with 2 digit precision.
E - 
heron(3, 4, 5)      // 6
heron(6, 8, 10)     // 24
P - 
function heron(a, b, c) {
    s = (a + b + c) / 2
    A = \sqrt{ s * (s - a) * (s - b) * (s - c) }
}
*/

function heron(a, b, c) {
    let s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

// Test: 
console.log(heron(3, 4, 5))
console.log(heron(6, 8, 10))