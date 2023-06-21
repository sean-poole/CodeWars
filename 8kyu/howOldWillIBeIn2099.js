/* How Old Will I Be In 2099? */

/*
Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.
*/

/*
P - Two arguments as integers. 
R - String formatted to display how old someone is (birthYear < currentYear) or when they will be born (birthYear > currentYear).
E - 
calculateAge(2012, 2016)    // "You are 4 year(s) old."
calculateAge(2000, 1990)    // "You will be born in 10 year(s)."
calculateAge(3400, 3400)    // "You were born this very year!"
P - 
function calculateAge(birthYear, currentYear) {
  // If birthYear === currentYear, return "You were born this very year!"
  // If birthYear < currentYear, return "You are ${currentYear - birthYear} year(s) old."
  // If birthYear > currentYear, return "You will be born in ${birthYear - currentYear" year(s).""
}
*/

function calculateAge(birthYear, currentYear) {
  let age = Math.abs(currentYear - birthYear);
  let yearStr = age === 1 ? "year" : "years";

  if (birthYear === currentYear) {
    return `You were born this very year!`;
  } else if (birthYear < currentYear) {
    return `You are ${age} ${yearStr} old.`;
  } else {
    return `You will be born in ${age} ${yearStr}.`
  }
}

// Test: 
// console.log(calculateAge(2012, 2016))
// console.log(calculateAge(1989, 2016))
// console.log(calculateAge(2000, 2090))
// console.log(calculateAge(2000, 1990))
// console.log(calculateAge(2010, 1990))
// console.log(calculateAge(3400, 3400))
