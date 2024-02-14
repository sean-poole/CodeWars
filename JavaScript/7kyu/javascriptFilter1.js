/* Javascript Filter - 1 */

/*
While developing a website, you detect that some of the members have troubles logging in. Searching through the code you find that all logins ending with a "_" make problems. So you want to write a function that takes an array of pairs of login-names and e-mails, and outputs an array of all login-name, e-mails-pairs from the login-names that end with "_".

If you have the input-array:
[ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]

it should output
[ [ "bar_", "bar@bar.com" ] ]

You have to use the filter-method which returns each element of the array for which the filter-method returns true.
*/

/*
P - Array of [key, value] array pairs.
R - Array of [key, value] pairs where the key ends with an "_".
E - searchNames([["foo", "foo@foo.com"], ["bar_", "bar@bar.com"]])      // [["bar_", "bar@bar.com"]]
P - 
function searchNames(logins) {
    // Filter if the first element of each [key, value] pair ends with "_".
}
*/

const searchNames = logins => logins.filter(e => e[0].slice(-1) === "_");

// Test: 
// console.log(searchNames([["foo", "foo@foo.com"], ["bar_", "bar@bar.com"]]))