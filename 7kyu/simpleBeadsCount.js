/* Simple Beads Count */

/*
Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

@ @@ @ @@ @ @@ @ @@ @ @@ @
B RR B RR B RR B RR B RR B

Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
If there are less than 2 blue beads return 0.
*/

function countRedBeads(n) {
    if (n < 2) return 0;
    let result = 0;
    for (i = 2; i <= n; i++) {
        result += 2;
    }

    return result;
}

// Alternate solution: 
// const countRedBeads = n => n < 2 ? 0 : 2 * n - 2;

// Test: 
// console.log(countRedBeads(0))
// console.log(countRedBeads(1))
// console.log(countRedBeads(3))
// console.log(countRedBeads(5))
