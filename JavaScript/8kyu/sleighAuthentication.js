/* Sleigh Authentication */

/*
Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.

Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.

Examples:
var sleigh = new Sleigh();
> sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE
> sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
> sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
> sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)
*/

/*
P - Two arguments as strings.
R - Boolean representing the result if the two given arguments are "Santa Claus" and "Ho Ho Ho!" respectively.
E - 
sleigh.authenticate("Santa Claus", "Ho Ho Ho!")     // true
sleigh.authenticate("Santa", "Ho Ho Ho!")           // false
P - 
Sleigh.prototype.authenticate = function(name, password) {
    // Check if the first string argument is === "Santa Claus".
    // Check if the second string argument is === "Ho Ho Ho!".
    // Return Boolean.
}
*/

function Sleigh() {};

Sleigh.prototype.authenticate = function(name, password) {
    return name === "Santa Claus" && password === "Ho Ho Ho!";
}

// Test: 
let sleigh = new Sleigh();
// console.log(sleigh.authenticate("Santa Claus", "Ho Ho Ho!"))
// console.log(sleigh.authenticate("Santa", "Ho Ho Ho!"))
// console.log(sleigh.authenticate("Santa Claus", "Ho Ho!"))
// console.log(sleigh.authenticate("jhoffner", "CodeWars"))
