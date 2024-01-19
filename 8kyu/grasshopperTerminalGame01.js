/* Grasshopper - Terminal Game #1 */

/*
Terminal Game - Create Hero Prototype

In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:
> attribute	value
> name	user argument or 'Hero'
> position	'00'
> health	100
> damage	5
> experience	0
*/

/*
P - One argument as a string.
R - Hero object with properties of name, experience, health, position, and damage.
E - 
myHero.name         // "Hero"
myHero.experience   // 0
myHero.health       // 100
myHero.position     // "00"
myHero.damage       // 5
P - 
function Hero(name) {
  // Create an object to store Hero properties.
  // Set the given name to the name property. Default to "Hero" if one is not provided.
  // Initialize properties of experience, health, position, and damage.
  // Return Hero object.
}
*/

function Hero(name) {
  this.name = name || "Hero";
  this.experience = 0;
  this.health = 100;
  this.position = "00";
  this.damage = 5;
}

// Test: 
const myHero = new Hero();

// console.log(myHero.name)
// console.log(myHero.experience)
// console.log(myHero.health)
// console.log(myHero.position)
// console.log(myHero.damage)

// console.log(new Hero("Greg").name)
