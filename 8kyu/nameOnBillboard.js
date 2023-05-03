/* Name On Billboard */

/*
You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).
*/

/*
P - Two arguments: One string that is required, one integer that is optional.
R - Integer representing the cost of an ad where each character = $30.
E - 
billboard("Jeong-Ho Aristotelis")       // 600
billboard("Hadufuns John", 20)          // 260
P - 
function billboard(name, price = 30) {
    // Split the given string into an array.
    // Reduce the array by adding price for each element.
    // Return the sum as an integer.
}
*/

const billboard = (name, price = 30) => name.split("").reduce((acc, c) => acc += price, 0);

// Test: 
// console.log(billboard("Jeong-Ho Aristotelis"))
// console.log(billboard("Abishai Charalampos"))
// console.log(billboard("Idwal Augustin"))
// console.log(billboard("Hadufuns John", 20))
// console.log(billboard("Zoroaster Donnchadh"))
// console.log(billboard("Claude Miljenko"))
// console.log(billboard("Werner Vígi", 15))
// console.log(billboard("Anani Fridumar"))
// console.log(billboard("Paolo Oli"))
// console.log(billboard("Hjalmar Liupold", 40))
// console.log(billboard("Simon Eadwulf"))
