/* Meeting */

/*
John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that: 
> makes this string uppercase
> gives it sorted in alphabetical order by last name.

When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:
"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

It can happen that in two distinct families with the same family name two people have the same first name too.
*/

function meeting(s) {
    let names = [];
    for (name of s.toUpperCase().split(";")) {
        const fullname = name.split(":");
        const fname = fullname[0];
        const lname = fullname[1];
        names.push(`${lname}, ${fname}`);
    }

    names.sort();
    let result = "";
    for (name of names) {
        result += `(${name})`;
    }

    return result;
}

// Alternate solution: 
// function meeting(s) {
//     let string = s.toUpperCase()
//                 .split(";")
//                 .map(e => e.split(":").reverse().join(", "))
//                 .sort()
//                 .join(")(");

//     return `(${string})`;
// }

// Test: 
console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"))
// console.log(meeting("John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell"))
// console.log(meeting("Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern"))
