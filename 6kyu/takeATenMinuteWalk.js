/* Take a Ten Minute Walk */

/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/

function isValidWalk(walk) {
    let directions = {};
    let count = 0;

    for (d of walk) {
        if (directions[d]) {
            directions[d] += 1;
        } else {
            directions[d] = 1;
        }
    }

    for (d in directions) {
        count += directions[d];
    }

    if (count !== 10) {
        return false;
    } else if (directions["n"] === directions["s"] && directions["e"] === directions["w"]) {
        return true;
    } else {
        return false;
    }
}

// Alternate solution:
// function isValidWalk(walk) {
//     const north = walk.filter(d => { return d === "n" }).length;
//     const south = walk.filter(d => { return d === "s" }).length;
//     const east = walk.filter(d => { return d === "e" }).length;
//     const west = walk.filter(d => { return d === "w" }).length;

//     return walk.length === 10 && north === south && east === west;
// }

// Alternate alternate solution:
// function isValidWalk(walk) {
//     let dx = 0;
//     let dy = 0;
//     let dt = walk.length;

//     for (let i = 0; i < dt; i++) {
//         switch (walk[i]) {
//             case "n": dy++; break
//             case "s": dy--; break
//             case "e": dx++; break
//             case "w": dx--; break;
//         }
//     }

//     return dt === 10 && dx === 0 && dy === 0;
// }

// Test: 
// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
// console.log(isValidWalk(['w']))
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))
