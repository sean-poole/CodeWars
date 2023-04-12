/* Tic-Tac-Toe Checker */

/*
If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:
[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]

We want our function to return:
-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).

You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
*/

/*
P - Array containing three arrays of integers representing a tic-tac-toe board.
R - 0 if the provided game is a tie, 1 if "X" won, 2 if "O" won, -1 if the board is incomplete.
E - isSolved([[0,0,1],[0,1,2],[2,1,0]])     // -1, game is not finished yet.
P - 
function isSolved(board) {
    // Test for Player "O" possible win outcomes.
    // Test for Player "X" possible win outcomes.
    // Test for incomplete game.
    // Else, all squares are occupied and the game is a tie.
}
*/

function isSolved(board) {
    if ((board.some(row => row.every(e => e === 1))) || 
        (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1) || 
        (board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1) || 
        (board[0][0] === 1 && board[1][0] === 1 && board[2][0] === 1) || 
        (board[0][2] === 1 && board[1][2] === 1 && board[2][2] === 1)) {
            return 1;
    } else if ((board.some(row => row.every(e => e === 2))) || 
        (board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2) || 
        (board[0][2] === 2 && board[1][1] === 2 && board[2][0] === 2) || 
        (board[0][0] === 2 && board[1][0] === 2 && board[2][0] === 2) || 
        (board[0][2] === 2 && board[1][2] === 2 && board[2][2] === 2)) {
            return 2;
    } else if (board.some(row => row.some(e => e === 0))) {
            return -1;
    } else {
            return 0;
    }
}

// Test: 
// console.log(isSolved([[1,2,1],
//                       [0,1,2],
//                       [2,1,0]]))

// console.log(isSolved([[1,1,1],
//                       [1,2,2],
//                       [2,1,2]]))

// console.log(isSolved([[2,1,1],
//                       [1,2,1],
//                       [2,1,2]]))
