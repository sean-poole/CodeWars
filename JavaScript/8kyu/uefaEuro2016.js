/* UEFA EURO 2016 */

/*
Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
*/

/*
P - Two arguments: One array of strings, one array of integers. Both arrays will contain two elements.
R - String formatted to display the matchup between two teams given in the first array, as well as the winner based on the score in the second array.
E - 
uefaEuro2016(["Germany", "Ukraine"], [2, 0])    // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(["Portugal", "Iceland"], [1, 1])   // "At match Portugal - Iceland, teams played draw."
P - 
function uefaEuro2016(teams, score) {
  // Format the returned string to include the team names from the first array argument.
  // Check the score results in the second array argument.
  // Include the winner / draw to the formatted string.
}
*/

function uefaEuro2016(teams, score) {
  if (score[0] === score[1]) return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
  return `At match ${teams[0]} - ${teams[1]}, ${score[0] > score[1] ? teams[0] : teams[1]} won!`;
}

// Test: 
// console.log(uefaEuro2016(["Germany", "Ukraine"], [2, 0]))
// console.log(uefaEuro2016(["Belgium", "Italy"], [0, 2]))
// console.log(uefaEuro2016(["Portugal", "Iceland"], [1, 1]))
