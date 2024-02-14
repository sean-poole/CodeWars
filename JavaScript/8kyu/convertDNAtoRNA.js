/* Convert DNA To RNA */

/*
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
*/

function DNAtoRNA(dna) {
    return dna.split("").map(x => x.toUpperCase() === "T" ? x = "U" : x).join("");
}

// Alternate solution: 
// function DNAtoRNA(dna) {
//     return dna.split("T").join("U");
// }

// Test: 
// test1 = "TTTT"
// test2 = "GCAT"
// test3 = "GACCGCCGCC"
// console.log(DNAtoRNA(test1))
// console.log(DNAtoRNA(test2))
// console.log(DNAtoRNA(test3))