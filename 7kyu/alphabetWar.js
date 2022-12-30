/* Alphabet War */

/*
Introduction: 
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task: 
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power: 
 w - 4
 p - 3
 b - 2
 s - 1

The right side letters and their power: 
 m - 4
 q - 3
 d - 2
 z - 1

The other letters don't have power and are only victims.

Example: 
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
*/

function alphabetWar(fight) {
    let result = 0;
    let left = "sbpw";
    let right = "zdqm";
    fight.split("").forEach(e => left.includes(e) ? result += left.indexOf(e) + 1 : right.includes(e) ? result -= right.indexOf(e) + 1 : result);
    return result > 0 ? "Left side wins!" : result < 0 ? "Right side wins!" : "Let's fight again!";
}

// Alternate solution: 
// function alphabetWar(fight) {
//     let letters = { w: 4, p: 3, b: 2, s: 1, m: -4, q: -3, d: -2, z: -1 };
//     let result = fight.split("").reduce((acc, c) => acc + (letters[c] || 0), 0);
//     return result > 0 ? "Left side wins!" : result < 0 ? "Right side wins!" : "Let's fight again!";
// }

// Test: 
// console.log(alphabetWar("z"))
// console.log(alphabetWar("zdqmwpbs"))
// console.log(alphabetWar("zzzzs"))
// console.log(alphabetWar("wwwwww"))
