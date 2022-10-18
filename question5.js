/*5. Write a code which can give grades to students according to theirs scores:
a. 80-100, A
b. 70-89, B
c. 60-69, C
d. 50-59, D
e. 0-49, F */

const ps = require("prompt-sync");
const prompt = ps();
let Num= prompt("Enter a Number:");
console.log(`Enter number ${Num}`);

if (80<=100)
{
    console.log("A")
}
elseif (70<=89)
{
    console.log("B")
}
elseif (60<=69)
{
    console.log("C")
}
elseif (50>=59)
{
    console.log("D")
}
elseif (0<=49)
{
    console.log("E")
}
else:
{
    console.log("Out of range:")
}








   
