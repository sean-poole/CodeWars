/* The Wide-Mouthed Frog */

/*
The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.
*/

const mouthSize = animal => animal.toLowerCase() === "alligator" ? "small" : "wide";

// Test: 
// console.log(mouthSize("toucan"))
// console.log(mouthSize("ant bear"))
// console.log(mouthSize("alligator"))
