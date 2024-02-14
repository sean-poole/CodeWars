/* Complementary DNA */

/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

function DNAStrand(dna) {
    let strand = "";
    dna.split("").forEach(x => {
        switch (x) {
            case "A":
                strand += "T";
                break;
            case "T":
                strand += "A";
                break;
            case "C":
                strand += "G";
                break;
            case "G":
                strand += "C";
                break;
            default:
                strand = "No DNA";
        }
    });
    return strand;
}

// Alternate solution:
// const pairs = {"A":"T", "T":"A", "C":"G", "G":"C"};

// function DNAStrand(dna) {
//     return dna.split("").map(v => pairs[v]).join("");
// }

// Test: 
// console.log((DNAStrand("AAAA")))
// console.log((DNAStrand("ATTGC")))
// console.log((DNAStrand("GTAT")))
