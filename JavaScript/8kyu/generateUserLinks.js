/* Generate User Links */

/*
Your task is to create userlinks for the url, you will be given a username and must return a valid link.

Example: 
> generate_link('matt c')
> http://www.codewars.com/users/matt%20c
*/

/*
P - One argument as a string.
R - String representing a valid user link derived from the given string.
E - 
generateLink("matt c")    // "http://www.codewars.com/users/matt%20c"
P - 
function generationLink(user) {
  // Apply encodeURIComponent to the given string.
  // Format the string to a valid url.
  // Return string.
}
*/

function generateLink(user) {
  return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
}

// Test: 
// console.log(generateLink("matt c"))
// console.log(generateLink("g964"))
// console.log(generateLink("GiacomoSorbi"))
// console.log(generateLink("ZozoFouchtra"))
// console.log(generateLink("colbydauph"))
