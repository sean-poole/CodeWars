/* Heads and Legs */

/*
#Description
Everybody has probably heard of the animal heads and legs problem from the earlier years at school. It goes:
“A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?” 
Where x <= 1000 and y <=1000

#Task
Assuming there are no other types of animals, work out how many of each animal are there.
Return a tuple in Python - (chickens, cows) and an array list - [chickens, cows]/{chickens, cows} in all other languages
If either the heads & legs is negative, the result of your calculation is negative or the calculation is a float return "No solutions" (no valid cases), or [-1, -1] in COBOL.

In the form:
[Heads, Legs] = [72, 200]
VALID - [72, 200] =>             [44 , 28]   
                             [Chickens, Cows]

INVALID - [72, 201] => "No solutions"

However, if 0 heads and 0 legs are given always return [0, 0] since zero heads must give zero animals.
There are many different ways to solve this, but they all give the same answer.
You will only be given integers types - however negative values (edge cases) will be given.
Happy coding!
*/

/*
P - Two arguments as integers. Both integers must be >= 0 && <= 1000.
R - Array containing two elements as integers.
E - 
animals(72, 200)    // [44, 28]
animals(116, 282)   // [91, 25]
animals(12, 24)     // [12, 0]
animals(6, 24)      // [0, 6]
animals(344, 872)   // [252, 92]
animals(158, 616)   // [8, 150]
animals(24, 555)    // "No solutions"
animals(12, 25)     // "No solutions"
animals(0, 0)       // "No solutions"
animals(-1, -1)     // "No solutions"
P - 
function animals(heads, legs) {
  // Calculate the amount of cows by multiplying heads by 2, subtracting the product from legs, and dividing the difference by 2.
  // Calculate the amount of chickens by subtracting the number of cows from heads.
  // If the number of chickens and cows are >= 0...
  // ...and chickens is a whole number,...
  // ... return the number of chickens and cows as an array.
  // Else, return "No solutions".
}
*/

function animals(heads, legs) {
  let cows = (legs - heads * 2) / 2;
  let chickens = heads - cows;

  if (chickens >= 0 && chickens % 1 === 0 && cows >= 0) {
    return [chickens, cows];
  }

  return "No solutions";
}

// Test: 
// Valid number of animals
// console.log(animals(72, 200))
// console.log(animals(116, 282))
// console.log(animals(12, 24))
// console.log(animals(6, 24))
// console.log(animals(344, 872))
// console.log(animals(158, 616))

// Invalid number of animals
// console.log(animals(24, 555))
// console.log(animals(12, 25))
// console.log(animals(54, 956))
// console.log(animals(5455, 54956))

// Edge cases
// console.log(animals(0, 0))
// console.log(animals(-1, -1))
// console.log(animals(-45, -5))
// console.log(animals(500, 0))
// console.log(animals(0, 500))
// console.log(animals(5, -55))
