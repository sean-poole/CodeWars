/* What Century Is It */

/*
Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples: 
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"
*/

/* 
P - One argument as a string representing a year as "YYYY".
R - String representing the century of the given string.
E - 
whatCentury("1999")         // "20th"
whatCentury("2000")         // "20th"
whatCentury("2011")         // "21st"
P - 
function whatCentury(year) {
    // Calculate the century from the given year by rounding up and dividing by 100.
    // Match the correct suffix based on the century.
    // Return the string.
}
*/

function whatCentury(year) {
    const num = Math.ceil(Math.abs(year) / 100).toString();
    const suffix = num.match(/(11|12|13)$/)
        ? "th" : num.endsWith("1")
        ? "st" : num.endsWith("2")
        ? "nd" : num.endsWith("3")
        ? "rd" : "th"

    return num + suffix;
}

// Test: 
// console.log(whatCentury("1999"))
// console.log(whatCentury("2011"))
// console.log(whatCentury("2154"))
// console.log(whatCentury("2259"))
// console.log(whatCentury("1234"))
// console.log(whatCentury("1023"))
// console.log(whatCentury("2000"))
