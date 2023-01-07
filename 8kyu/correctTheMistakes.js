/* Correct The Mistakes Of The Character Recognition Software */

/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/

function correct(string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "0") result += "O";
        else if (string[i] == "1") result += "I";
        else if (string[i] == "5") result += "S";
        else result += string[i];
    }

    return result;
}

// Alternate solution: 
// const correct = string => [...string].map(c => ({"0" : "O", "1" : "I", "5" : "S"})[c] || c).join("");

// Test: 
// console.log(correct("L0ND0N"))
// console.log(correct("DUBL1N"))
// console.log(correct("51NGAP0RE"))
// console.log(correct("BUDAPE5T"))
// console.log(correct("PAR15"))
