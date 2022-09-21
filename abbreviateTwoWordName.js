/* Abbreviate A Two Word Name */

/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

// function abbrevName(name) {
//     let initials = "";
//     arr = name.split(" ").forEach(e => initials += e.charAt(0).toUpperCase());
//     return initials.slice(0, 1) + "." + initials.slice(1);
// }

function abbrevName(name) {
    return name.split(" ").map(e => e[0].toUpperCase()).join(".");
}
