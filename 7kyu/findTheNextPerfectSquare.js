/* Find The Next Perfect Square */

/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

function findNextSquare(sq) {
    let num = Math.sqrt(sq);

    if (Math.round(num) === num) {
        return Math.pow(++num, 2);
    }

    return -1;
}

// Alternate solution:
// const findNextSquare = sq => Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);

// Test: 
// console.log(findNextSquare(121))
// console.log(findNextSquare(625))
// console.log(findNextSquare(319225))
// console.log(findNextSquare(15241383936))
// console.log(findNextSquare(155))
// console.log(findNextSquare(342786627))
