/* Let's Recycle! */

/*
Task: 
You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.

Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.

Notes: 
> The bins should come in the same order as the materials listed above
> All bins should be listed in the output, even if some of them are empty
> If an object is made of two materials, its type should be listed in both of the respective bins
> The order of the type's in each bin should be the same as the order of their respective objects was in the input list

Example: 
input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]
*/

/*
P - Array of objects. Objects contain type, material, and an optional secondMaterial.
R - Array of arrays. Arrays are grouped by material type.
E - 
input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]
P - 
function recycle(array) {
    // Create empty arrays to contain object type key.
    // Iterate through the given array.
    // Check material value and place in its respective created array.
    // Return organized array.
}
*/

function recycle(array) {
    let paper = [];
    let glass = [];
    let organic = [];
    let plastic = [];

    array.forEach(obj => {
        if (obj.material === "paper" || obj.secondMaterial === "paper") paper.push(obj.type);
        if (obj.material === "glass" || obj.secondMaterial === "glass") glass.push(obj.type);
        if (obj.material === "organic" || obj.secondMaterial === "organic") organic.push(obj.type);
        if (obj.material === "plastic" || obj.secondMaterial === "plastic") plastic.push(obj.type);
    });

    return [paper, glass, organic, plastic];
}

// Alternate solution: 
// function recycle(array) {
//     const recycleMaterials = ["paper", "glass", "organic", "plastic"];
//     return recycleMaterials.map(e => array.filter(o => o.material === e || o.secondMaterial === e).map(o => o.type));
// }

// Test: 
let a = [
    {type: 'rotten apples', material: 'organic'},
    {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
    {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
    {type: 'amazon box', material: 'paper'},
    {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
];

// console.log(recycle(a))
