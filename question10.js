/*--10. Write a program to find the area of the circle. Take radius of circle from user as input
and print the result in below given format.
Expected output format – “Area of circle is A having the radius R”. Replace A with area
& R with radius-- */

const ps = require("prompt-sync");
const prompt = ps();
let r= prompt("Enter a circle radius:");
//console.log(`Enter number ${radiuss}`);
//function areaofCircle(r) {
    
     let area = Math.PI * r * r;
//let result = areaofCircle(radiuss);
    console.log("Area of circle is",area," radius is :",r,"\n");
    console.log("Area of circle  radius is:",r,"circle is:",area);
    