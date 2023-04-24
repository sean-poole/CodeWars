/* Bartender, Drinks! */

/*
Complete the function that receives as input a string, and produces outputs according to the following table:

Input	                Output
"Jabroni"	            "Patron Tequila"
"School Counselor"	    "Anything with Alcohol"
"Programmer"	        "Hipster Craft Beer"
"Bike Gang Member"	    "Moonshine"
"Politician"	        "Your tax dollars"
"Rapper"	            "Cristal"
anything else	        "Beer"

Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".
Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
*/

/* 
P - One argument as a string.
R - String based on the given argument.
E - 
getDrinkByProfession("jabrOni")     // "Patron Tequila"
getDrinkByProfession("pundit")      // "Beer"
P - 
function getDrinkByProfession(param) {
    // Build switch case for different outputs
    // Return string.
}
*/

function getDrinkByProfession(param) {
    switch (param.toLowerCase()) {
        case "jabroni": return "Patron Tequila";
        case "school counselor": return "Anything with Alcohol";
        case "programmer": return "Hipster Craft Beer";
        case "bike gang member": return "Moonshine";
        case "politician": return "Your tax dollars";
        case "rapper": return "Cristal";
        default: return "Beer";
    }
}

// Test: 
// console.log(getDrinkByProfession("jabrOni"))
// console.log(getDrinkByProfession("scHOOl counselor"))
// console.log(getDrinkByProfession("prOgramMer"))
// console.log(getDrinkByProfession("bike ganG member"))
// console.log(getDrinkByProfession("poLiTiCian"))
// console.log(getDrinkByProfession("rapper"))
// console.log(getDrinkByProfession("pundit"))
// console.log(getDrinkByProfession("Pug"))
