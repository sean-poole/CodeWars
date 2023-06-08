/* Return To Sanity */

/*
This function should return an object, but it's not doing what's intended. What's wrong?
*/

/*
P - Broken function
R - Working function that returns an object.
E - mystery()       // { sanity: "Hello" }
P - 
function mystery() {
  let results = 
    { sanity: "Hello "};
  return 
    results;
}

// Remove line break on the return statement.
*/

function mystery() {
  let results = { sanity: "Hello" };
  return results;
}

// Test: 
// console.log(mystery())
