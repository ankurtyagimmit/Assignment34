/*4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a
number is even or not using JavaScript?*/ 
const ps = require("prompt-sync");
const prompt = ps();
let number = prompt("Enter a Number:");
console.log(`Enter number ${number}`);
if(number%2==0)
{
   console.log("Number is Even");
}
else
{
console.log("Number is Odd");
}


   