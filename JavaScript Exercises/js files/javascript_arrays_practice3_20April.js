var cumulativeGPA = 3.0;
var totalUnits = 140;
if (cumulativeGPA > 2.0 && totalUnits >= 120) {
console.log("You can graduate");
}

var cspGrade = 80;
var progGrade = 80;

if (cspGrade >= 75 || progGrade >=75) {
    console.log("You're eligible for graduation");
}
else {
    console.log("You're not eligible for graduation");
}
/* if (progGrade >=75) {
     console.log("You're eligible for graduation");
 }*/

 if (cumulativeGPA <= 2.0 && totalUnits < 120) {
    sendEmail(); // call function
 }
     //Do nothing
 
 /*else {
   sendEmail();  
 } */


