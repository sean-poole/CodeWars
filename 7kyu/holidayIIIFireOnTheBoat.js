/* Holiday III - Fire on the Boat */

/*
Enjoying your holiday, you head out on a scuba diving trip!

Disaster!! The boat has caught fire!!

You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

Go to work!
*/

/*
P - One argument as a string.
R - String representing the given string with instances of "Fire" replaced with "~~".
E - fireFight("Mast Deck Engine Water Fire")    // "Mast Deck Engine Water ~~"
P - 
function fireFight(s) {
  // Iterate through the given string.
  // Replace all instances of "Fire" with "~~".
  // Return string.
}
*/

const fireFight = s => s.replaceAll("Fire", "~~");

// Test: 
// console.log(fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"))
// console.log(fireFight("Mast Deck Engine Water Fire"))
// console.log(fireFight("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"))
