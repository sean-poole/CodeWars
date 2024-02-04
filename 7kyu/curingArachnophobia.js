/* Curing Arachnophobia */

/*
There is no single treatment that works for every phobia, but some people cure it by being gradually exposed to the phobic situation or object. In this kata we will try curing arachnophobia by drawing primitive spiders.

Our spiders will have legs, body, eyes and a mouth. Here are some examples:
/\((OOwOO))/\
/╲(((0000w0000)))╱\
^(oWo)^

You will be given four values:
> leg size where each value stands for its own leg type: 1 for "^ ^", 2 for "/\ /\", 3 for "/╲ ╱\", 4 for "╱╲ ╱╲"
> body size where each value stands for its own body type: 1 for "( )", 2 for "(( ))", 3 for "((( )))"
> mouth representing the spider's mouth
> eye representing the spider's eye

Note: the eyes are symmetric, and their total amount is 2 to the power of body size.
You will also be given only valid data. That's it for the instructions, you can start coding!
*/

/*
P - Two arguments as integers, two arguments as strings.
R - String representing a drawing of a spider derived from the given arguments.
E - 
drawSpider(1, 1, "W", "o")  // "^(oWo)^"
drawSpider(2, 2, "w", "O")  // "/\\((OOwOO))/\\"
drawSpider(3, 3, "w", "0")  // "/╲(((0000w0000)))╱\\"
P - 
function drawSpider(legSize, bodySize, mouth, eye) {
  // Create empty string variable to store complete spider drawing.
  // Create individual string variables to store leg shape, body shape, and eyes.
  // Calculate Math.pow(2, bodySize) to determine the total number of eyes.
  // Create switch case statement to evaluate given legSize and determine leg shape.
  // Create switch case statement to evaluate given bodySize and determine body shape.
  // Concatenate each body part to create the spider.
  // Return string.
}
*/

function drawSpider(legSize, bodySize, mouth, eye) {
  let spider = "";
  let legs = "";
  let body = "";
  let eyes = eye.repeat(Math.pow(2, bodySize) / 2);

  switch(legSize) {
    case 1: legs = "^ ^"; break;
    case 2: legs = "/\\ /\\"; break;
    case 3: legs = "/╲ ╱\\"; break;
    case 4: legs = "╱╲ ╱╲"; break;
  }

  switch(bodySize) {
    case 1: body = "( )"; break;
    case 2: body = "(( ))"; break;
    case 3: body = "((( )))"; break;
  }

  spider = `${legs.split(" ")[0]}${body.split(" ")[0]}${eyes}${mouth}${eyes}${body.split(" ")[1]}${legs.split(" ")[1]}`;
  return spider;
}

// Test: 
// console.log(drawSpider(1, 1, "W", "o"))
// console.log(drawSpider(2, 2, "w", "O"))
// console.log(drawSpider(3, 3, "w", "0"))
