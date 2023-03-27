/* My Head Is At The Wrong End */

/*
You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics
*/

/* 
P - Array with 3 values (tail, body, head). Order will always be the same.
R - Array with order of [head, body, tail].
E - 
fixTheMeerkat(["tail", "body", "head"])             // ["head", "body", "tail"]
fixTheMeerkat(["bottom", "middle", "top"])          // ["top", "middle", "bottom"]
P - 
function fixTheMeerkat(arr) {
    // Reverse given array and return.
}
*/

const fixTheMeerkat = arr => arr.reverse();

// Alternate solution: 
// const fixTheMeerkat = ([tail, body, head]) => [head, body, tail];

// Test: 
// console.log(fixTheMeerkat(["tail", "body", "head"]))
// console.log(fixTheMeerkat(["tails", "body", "heads"]))
// console.log(fixTheMeerkat(["bottom", "middle", "top"]))
// console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"]))
// console.log(fixTheMeerkat(["ground", "rainbow", "sky"]))
