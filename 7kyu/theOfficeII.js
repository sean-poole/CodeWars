/* The Office II - Boredom Score */

/*
Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:
accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:
<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'
*/

/*
P - One argument as an object with key:value pairs of employee:department.
R - String representing the boredom assessment score.
E - 
boredom({ tim: 'change', jim: 'accounts',
randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
mr: 'finance' })
// Returns: "kill me now"
P - 
function boredom(staff) {
  // Create a variable to store the boredom assessment score.
  // Iterate through the given object
  // Add the corresponding score to the created variable for each employee's department.
  // Return string based on the total score.
}
*/

const departments = {
  "accounts": 1,
  "finance": 2,
  "canteen": 10,
  "regulation": 3,
  "trading": 6,
  "change": 6,
  "IS": 8,
  "retail": 5,
  "cleaning": 4,
  "pissing about": 25
}

function boredom(staff) {
  let score = 0;
  for (employee in staff) {
    let department = staff[employee];
    if (department in departments) {
      score += departments[department];
    }
  }

  if (score > 100) {
    return "party time!!";
  } else if (score < 100 && score > 80) {
    return "i can handle this";
  } else {
    return "kill me now";
  }
}

// Alternate solution: 
// function boredom(staff) {
//   const score = Object.keys(staff)
//                     .reduce((acc, c) => acc += departments[staff[c]], 0);
  
//   return score > 100 
//   ? "party time!!" 
//   : score < 100 && score > 80 
//   ? "i can handle this"
//   : "kill me now";
// }

// Test: 
const staff1 = { tim: 'change', jim: 'accounts',
randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
mr: 'finance' }

const staff2 = { tim: 'IS', jim: 'finance',
randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
alex: 'regulation', john: 'accounts', mr: 'canteen' }

const staff3 = { tim: 'accounts', jim: 'accounts',
randy: 'pissing about', sandy: 'finance', andy: 'change',
katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
john: 'retail', mr: 'pissing about' }

// console.log(boredom(staff1))
// console.log(boredom(staff2))
// console.log(boredom(staff3))
