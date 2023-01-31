/* Who Is The Killer */

/*
Some people have been killed!
You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

Task.
Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}

 and also a list of the names of the dead people:

['Lucas', 'Bill']

return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'
*/

function killer(suspectInfo, dead) {
    for (suspect in suspectInfo) {
        if (dead.every(person => suspectInfo[suspect].includes(person))) return suspect;
    }
}

// Alternate solution: 
// const killer = (suspectInfo, dead) => Object.keys(suspectInfo).find(x => dead.every(y => suspectInfo[x].includes(y)));

// Test: 
// console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']))
// console.log(killer({'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}, ['Ben']))
