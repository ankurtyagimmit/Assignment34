//8. Suppose 1 dollar is equal to 82.23 Indian rupee, create a program which converts dollars to rupees.
const ps = require("prompt-sync");
const prompt = ps();
let dollars= prompt("Enter a Number:");
console.log(`Enter number ${dollars}`);
var rupees = dollars * 82.23;
console.log(rupees + " Rupees");