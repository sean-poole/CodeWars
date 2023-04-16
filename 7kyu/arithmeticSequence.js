/* Arithmetic Sequence */

/*
A sequence is usually a set or an array of numbers that has a strict way for moving from the nth term to the (n+1)th term.
If f(n) = f(n-1) + c where c is a constant value, then f is an arithmetic sequence.
An example would be (where the first term is 0 and the constant is 1) is [0, 1, 2, 3, 4, 5, ... and so on] )
Else if (pun) f(n) = f(n-1) * c where c is a constant value, then f is a geometric sequence.
Example where the first term is 2 and the constant is 2 will be [2, 4, 8, 16, 32, 64, ... to infinity ... ]
There are some sequences that aren't arithmetic nor are they geometric.
Here is a link to feed your brain : Sequence !

You're going to write a function that's going to return the value in the nth index of an arithmetic sequence.(That is, adding a constant to move to the next element in the "set").

The function's name is nthterm/Nthterm, it takes three inputs first,n,c where:

> first is the first value in the 0 INDEX.
> n is the index of the value we want.
> c is the constant added between the terms.

Remember that first is in the index 0 .. just saying ...
*/

/* 
P - Three arguments as integers. `first` representing the value at index 0, `n` is the index of the value we want, `c` is the constant between elements.
R - Number representing the value in the nth index of a sequence.
E - 
nthterm(1, 2, 3)        // 7
nthterm(2, 2, 2)        // 6
P - 
function nthterm() {
    // Store arguments into variables.
    // Create an empty array.
    // Fill the array until n is a referenceable index.
    // Return the value at index n.
}
*/

function nthterm() {
    let first = [...arguments][0];
    let n = [...arguments][1];
    let c = [...arguments][2];
    let arr = [];
    while (arr.length - 1 <= n) {
        arr.push(first);
        first += c;
    }

    return arr[n];
}

// Alternate solution: 
// const nthterm = (first, n, c) => first + n * c;

// Test: 
// console.log(nthterm(1, 2, 3))
// console.log(nthterm(2, 2, 2))
// console.log(nthterm(-50, 10, 20))
