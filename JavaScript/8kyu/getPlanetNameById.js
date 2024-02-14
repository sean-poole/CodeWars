/* Get Planet Name By ID */

/*
The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):
3 --> "Earth"
*/

/*
P - One argument as an integer.
R - String representing the planet name associated with the given id.
E - getPlanetName(3)    // "Earth"
P - 
function getPlanetName(id) {
  // Correct the given switch case so it returns the correct string value.
  // Insert breaks after each case clause.
  // Return string.
}
*/

function getPlanetName(id) {
  let name;
  switch (id) {
    case 1: 
      name = "Mercury";
      break;
    case 2: 
      name = "Venus";
      break;
    case 3: 
      name = "Earth";
      break;
    case 4: 
      name = "Mars";
      break;
    case 5: 
      name = "Jupiter";
      break;
    case 6: 
      name = "Saturn";
      break;
    case 7: 
      name = "Uranus";
      break;
    case 8: 
      name = "Neptune";
      break;
  }

  return name;
}

// Test: 
// console.log(getPlanetName(2))
// console.log(getPlanetName(5))
// console.log(getPlanetName(3))
