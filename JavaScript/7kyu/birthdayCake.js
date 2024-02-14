/* Birthday Cake */

/*
It's your birthday. Your colleagues buy you a cake. The numbers of candles on the cake is provided (candles). Please note this is not reality, and your age can be anywhere up to 1000. Yes, you would look a mess.

As a surprise, your colleagues have arranged for your friend to hide inside the cake and burst out. They pretend this is for your benefit, but likely it is just because they want to see you fall over covered in cake. Sounds fun!

When your friend jumps out of the cake, he/she will knock some of the candles to the floor. If the number of candles that fall is higher than 70% of total candles, the carpet will catch fire.

You will work out the number of candles that will fall from the provided lowercase string (debris). You must add up the character ASCII code of each even indexed (assume a 0 based indexing) character in the string, with the alphabetical position ("a" = 1, "b" = 2, etc.) of each odd indexed character to get the string's total.

For example:
> "abc"  -->  "a" = 97, "b" = 2, "c" = 99  -->  total = 198

If the carpet catches fire, return "Fire!", if not, return "That was close!".

Notes: 
> if there are no candles to begin with, the carpet cannot catch fire;
> as this is not reality, you may have more candles falling from the cake than the total...
*/

/*
P - Two parameters: One integer representing the number of candles, one string representing fallen candles.
R - If the number of candles > 70% of the total candles, return "Fire!". Else, return "That was close!".
E - 
cake(900, "abcdef")         // "That was close!"
cake(56, "ifkhchlhfd")      // "Fire!". ASCII value of 
P - 
function cake(x, y) {
    // Create reference variable for the alphabet.
    // Create a value to store the numerical value of fallen candles string.
    // For each character in the fallen candles string: 
    // > If the element has an odd index, add its ASCII code value.
    // > If the element has an even index, add its position in the alphabet.
    // Compare the number of fallen candles to the number of total candles.
    // > If fallen candles > 70% of the total candles, return "Fire!". Else, "That was close!".
}
*/

function cake(x, y) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let fallenCandles = y.split("").map((e, i) => i % 2 ? alphabet.indexOf(e) + 1 : e.charCodeAt(0));
    return fallenCandles > (x * 0.7) ? "Fire!" : "That was close!";
}

// const cake = (x, y) => [...y].reduce((acc, c, i) => acc += (i % 2 ? c.charCodeAt(0) - 96 : c.charCodeAt(0)), 0) > (x * 0.7) ? "Fire!" : "That was close!";

// Test: 
// console.log(cake(900, "abcdef"))
// console.log(cake(56, "ifkhchlhfd"))
// console.log(cake(256, "aaaaaddddr"))
