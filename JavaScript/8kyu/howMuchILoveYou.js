/* How Much I Love You */

/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"

If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
*/

function howMuchILoveYou(nbPetals) {
    nbPetals > 6 ? nbPetals %= 6 : nbPetals;
    switch (nbPetals) {
        case 1: return "I love you";
        case 2: return "a little";
        case 3: return "a lot";
        case 4: return "passionately";
        case 5: return "madly";
        case 0:
        case 6: return "not at all";
    }
}

// Test: 
// console.log(howMuchILoveYou(7))
// console.log(howMuchILoveYou(3))
// console.log(howMuchILoveYou(6))
