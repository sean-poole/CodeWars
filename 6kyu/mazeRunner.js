/* Maze Runner */

/*
Introduction: 
Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!

Task: 
You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.

The Maze array will look like: 
maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]

..with the following key
      0 = Safe place to walk
      1 = Wall
      2 = Start Point
      3 = Finish Point
  direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"

Rules:
1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.
2. The start and finish positions will change for the final tests.
3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.
4. If you reach the end point before all your moves have gone, you should return Finish.
5. If you hit any walls or go outside the maze border, you should return Dead.
6. If you find yourself still in the maze after using all the moves, you should return Lost.
*/

/* 
P - Two arguments: One array of arrays containing integers, one array containing single character string elements.
R - String representing the result of the direction's ability to navigate through the maze.
E - 
mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"])      // "Finish"
maze,["N","N","N","W","W"])                                     // "Dead"
maze,["N","E","E","E","E"])                                     // "Lost"
P - 
function mazeRunner(maze, directions) {
    // Establish the starting point by finding "2" within the maze. Set it to [x, y].
    // Iterate through the given directions.
    // For N / S directions, apply -1 / +1 to the first element of the current index respectively.
    // For W / E directions, apply -1 / +1 to the second element of the current index respectively.
    // If the first index element becomes less than 0 or greater than the length of the maze, you have hit a wall and are dead.
    // If the second index element becomes -1, you have hit a wall and are dead.
    // If the current index in the maze represents a "1", you are dead.
    // If the current index in the maze represents a "3", you have finished.
    // If all directions elements have been exhausted and there is no result, you are lost.
}
*/

function mazeRunner(maze, directions) {
    let current = [maze.findIndex(arr => arr.find(n => n === 2)), maze.find(arr => arr.includes(2)).findIndex(n => n === 2)];
    
    for (direction of directions) {
        switch (direction) {
            case "N": current = [current[0] - 1, current[1]]; break;
            case "S": current = [current[0] + 1, current[1]]; break;
            case "W": current = [current[0], current[1] - 1]; break;
            case "E": current = [current[0], current[1] + 1]; break;
        }
        // console.log(current);

        if (current[0] < 0 || current[0] >= maze.length || current[1] === -1 || maze[current[0]][current[1]] === 1) return "Dead";
        if (maze[current[0]][current[1]] === 3) return "Finish";
    }

    return "Lost";
}

// Test: 
const maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];

// console.log(mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"]))
// console.log(mazeRunner(maze,["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]))
// console.log(mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E","W","W"]))
// console.log(mazeRunner(maze,["N","N","N","W","W"]))
// console.log(mazeRunner(maze,["N","N","N","N","N","E","E","S","S","S","S","S","S"]))
// console.log(mazeRunner(maze,["N","E","E","E","E"]))
