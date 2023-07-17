/* Honey To The Bee */

/*
Find out why the amount of honey in the hive is not increasing.
*/

/*
P - 
R - 
E - 
bee.capacity        // 11
hive.pollen         // 100
bee.unloadPollen()
hive.pollen         // 111
P - 
Bee.prototype.unloadPollen = function() {
  hive.addPollen(this.capacity);
}
// The "hive" property of Bee must be accessed with "this"
*/

function Bee(capacity, hive) {
  this.capacity = capacity;
  this.hive = hive;
}

function Hive() {
  this.pollen = 100;
}

Hive.prototype.addPollen = function(pollen) {
  this.pollen += pollen;
}

Hive.prototype.getPollen = function() {
  return this.pollen;
}

Bee.prototype.unloadPollen = function() {
  this.hive.addPollen(this.capacity);
}

// Test: 
const hive = new Hive();
const bee = new Bee(11, hive);

// console.log(bee.capacity)
// console.log(hive.pollen)

// bee.unloadPollen();

// console.log(hive.pollen)
