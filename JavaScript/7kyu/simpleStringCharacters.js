/* Simple String Characters */

/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.

More examples in the test cases.
Good luck!
*/

function solve(s) {
    let uppercase = s.match(/[A-Z]/g) || [];
    let lowercase = s.match(/[a-z]/g) || [];
    let numbers = s.match(/[0-9]/g) || [];
    let special = s.match(/[^A-Z0-9]/gi) || [];

    return [uppercase.length, lowercase.length, numbers.length, special.length];
}

// Test: 
// // console.log(solve(""))
// console.log(solve("aAbBcC"))
// console.log(solve("Codewars@codewars123.com"))
// console.log(solve("bgA5<1d-tOwUZTS8yQ"))
// console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"))
// console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"))
// console.log(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"))
// console.log(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"))
