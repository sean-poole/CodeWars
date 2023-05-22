/* Breaking Chocolate Problem */

/*
Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.
*/

/*
P - Two arguments: integers representing the dimensions of the chocolate bar. Integers will always be > 0.
R - Integer representing how many breaks are required to split the chocolate bar into 1x1 squares.
E - 
breakChocolate(2, 1)    // 1
breakChocolate(3, 1)    // 2
P - 
function breakChocolate(n, m) {
  // Check for valid inputs. Return 0 if there is no chocolate bar.
  // Multiply the dimensions of the chocolate bar and subtract 1.
  // Return integer.
}
*/

const breakChocolate = (n, m) => n > 0 && m > 0 ? (n * m) - 1 : 0;

// Test: 
// console.log(breakChocolate(5, 5))
// console.log(breakChocolate(1, 1))
