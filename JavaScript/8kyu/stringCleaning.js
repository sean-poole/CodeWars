/* String Cleaning */

/*
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
*/

/*
P - One argument as a string.
R - Given string with numbers removed.
E - 
stringClean("")                     // ""
stringClean("")                     // "! !"
stringClean("(E3at m2e2!!)")        // "(Eat me!!)"
P - 
function stringClean(s) {
    // Iterate through the given string.
    // Filter elements that are not a number or a space.
    // Return string.
}
*/

const stringClean = s => s.split("").filter(e => isNaN(e) || e === " ").join("");

// Alternate solution: 
// const stringClean = s => s.replace(/\d/g, "");

// Test: 
// console.log(stringClean(""))
// console.log(stringClean("! !"))
// console.log(stringClean("123456789"))
// console.log(stringClean("(E3at m2e2!!)"))
// console.log(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"))
// console.log(stringClean("A1 A1! AAA   3J4K5L@!!!"))
// console.log(stringClean("Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@"))
// console.log(stringClean("Ad2dsad3ds21 A  1$$s122ad! A2A3Ae24 f44K5L@222222 "))
// console.log(stringClean("33333Ad2dsad3ds21 A3333  1$$s122a!d! A2!A!3Ae$24 f2##222 "))
// console.log(stringClean("My \"me3ssy\" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?"))
// console.log(stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3"))

