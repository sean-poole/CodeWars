/* Grasshopper - Object Syntax Debug */

/*
While making a zork-type game, you create an object of rooms. Unfortunately, the game is not working. Find all of the errors in the rooms object to get your game working again.
*/

/*
P - Incomplete object with syntax errors.
R - Corrected object.
E - 
rooms.first.description   // "This is the first room"
rooms.second.description  // "This is the second room"
P - 
const rooms = {
  first: {
    description: "This is the first room"
    // missing "," after description value
    items: {
      chair: "The old chair looks comfortable",
      lamp: "This lamp looks ancient"
    }
  },
  second: {
    description: "This is the second room"
    // missing "," after description value
    items: {
      couch: "This couch looks like it would hurt your back,
      // missing closing "" after couch value.
      table: "On the table there is an unopened bottle of water"
    }
  }
}
*/

const rooms = {
  first: {
    description: "This is the first room",
    items: {
      chair: "The old chair looks comfortable",
      lamp: "This lamp looks ancient"
    }
  },
  second: {
    description: "This is the second room",
    items: {
      couch: "This couch looks like it would hurt your back",
      table: "On the table there is an unopened bottle of water"
    }
  }
}

// Test: 
// console.log(rooms.first.description)
// console.log(rooms.second.description)
