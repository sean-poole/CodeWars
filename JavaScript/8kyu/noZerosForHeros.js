/* No Zeros For Heros */

/*
Numbers ending with zeros are boring.
They might be fun in your world, but not here.
Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105

Zero alone is fine, don't worry about it. Poor guy anyway
*/

/*
P - One argument as an integer. Can be (+) or (-).
R - Given integer with trailing zeros removed. If integer === 0, return 0.
E - 
noBoringZeros(1450)             // 145
noBoringZeros(-1050)            // -105
noBoringZeros(0)                // 0
p - 
function noBoringZeros(n) {
    // Divide n by 0 until a remainder is provided.
    // Return number.
}
*/

function noBoringZeros(n) {
    while (n % 10 === 0 && n != 0) {
        n /= 10;
    }

    return n;
}

// Test: 
// console.log(noBoringZeros(1450))
// console.log(noBoringZeros(960000))
// console.log(noBoringZeros(1050))
// console.log(noBoringZeros(-1050))
// console.log(noBoringZeros(-105))
// console.log(noBoringZeros(0))
