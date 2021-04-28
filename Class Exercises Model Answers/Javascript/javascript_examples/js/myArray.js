//Exercise 1

var myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F, "G'];

//console.log(myAlphabet.length);

//Exercise 2
var Planets = ["Mars", "Earth", "Mercury", "Venus", "Jupiter"];

for (var i=0; i<Planets.length; i++)
{
    //console.log(i + ":" + Planets[i]);
}

/*console.log(index + ":" + Planets[index]);

//index = index + 1;
index += 1;
//index++;



console.log(index + ":" + Planets[index]);
index += 1;
console.log(index + ":" + Planets[index]);
index += 1;
console.log(index + ":" + Planets[index]);
index += 1;
console.log(index + ":" + Planets[index]);*/


var myArr = [ 1, 2, 'One', true];

for (var i=0; i<myArr.length; i++)
{
    //console.log(myArr[i]);
}

/*var item=0;
console.log(myArr[item]);
item += 1;
console.log(myArr[item]);
item += 1;
console.log(myArr[item]);
item += 1;
console.log(myArr[item]);*/

for (var i=9; i>=0; i--)
{
   //console.log("In For Loop: " + i);
}

var i = 9;
while (i >= 0)
{
    //console.log("In While Loop: " + i);
    i--;
}
/*
//Practice 2 : Exercise 1
//part 1
var customers= ['Sofia','David','Juan'];
console.log(customers);

//part 2
// part 2
console.log("Exercise 1 Part 2 -------------------")
customers.push("Sara","Austin");
customers.shift();
console.log(customers);

// part 3
console.log("Exercise 1 Part 3 ------------------")
customers.splice(1,0,"Renata");
customers.push("Elena");
console.log(customers);


// Exercise 2
console.log("Exercise 2 Part 1 --------------------")
var stars = '' //initialise stars 

for(var i=0;i<6;i++)
{ // represents rows
  // i =  0
  // i = 1
  for(var k=0;k<=i;k++)
  { 

    //i = 1
    //k = 0

    //stars ??? ''

    // represents columns 
    stars += "* " // add '*' to variable stars

    //stars ???  '* ' 

  }

  console.log(stars) //print '* ' 
  stars='' //reset  //star =  ''
}
*/

//Practice 2 - Exercise 3
var xValue = 5;

while (xValue > 0){       //xValue = 0, the while loop will not be executed
  xValue-=0.5;            //xValue = xValue - 0.5;          
  //console.log(xValue);

  //the program will not execute while loop when xValue is = 0
}

//Continue the code
for(var i=1;i<=100;i++)     //Continue looping until i = 101
{
  //!= refer to not equal
  //
  if (i%2 !== 0)   //% modular - return the remainder
  {
    // 1/2 = 0.5 - odd
    // 2/2 = 0  (remainder=0) - even
    // 3/2 = 1.5 -odd
    // 4/2 = 2 (remainder=0) - even
    // 5/2 = 2.5
    // 6/2 = 3 (remainder=0)
    //console.log(i)    //print the odd number
  }
  else{
    //Do nothing
  }
}

var i = 1;
while (i <= 100) 
{
  //console.log(i);
  i += 2;
}

/*var n = 6, loops = 0, answer = '';
while (loops <= n){
  answer += "[" + loops + "] ";
  loops++;
}
console.log(answer);


function justPrint(value) 
{
  var count = 0, 
  returnOutput = '';
  while (count <= value) 
  {
    returnOutput += `[${count}] `;  //using backtick not '
    count++;
  }
  return returnOutput;
}
console.log(justPrint(6));


var n = 5, i =1, sum = 0;
while(i <= n){
  sum +=i;
  i++;
}
console.log(sum);
*/

var cumulativeGPA = 3.0;
var totalUnits = 140;
if (cumulativeGPA > 2.0 && totalUnits >= 120) {
	  //console.log("You can graduate!");
} 


var cspGrade = 80;
var progGrade = 60;

if (cspGrade >= 75 || progGrade >=75) {
  //console.log("You're eligible for graduation!");
}
else{
  //console.log("You're not eligible for graduation!");
}
/*if (progGrade >= 75) {
  console.log("You're eligible for graduation");
}*/


if (cumulativeGPA <= 2.0 &&  totalUnits < 120) {
  sendEmail();    //call a function 
} 
/*else {
  sendEmail();
}*/

var str = '"I am a DUCK"';
//var str2 = "'I am a DUCK'";
//console.log("'" + str + "'");
//console.log(str2);

//Practice 5: Array ForEach
//search for a name in an array

var names = ["Maria", "Antony", "Joy", "Juan"];     //Customer list array
var myName = "Jean";

var newnames2 = ["Peter", "Mari", "Duck", "Jea"];   //Order list array

//I just want to compare the 2 arrays, and create a new array for my own customer for the order

function addNames(names, myName)
{
  //add myName to names array
  names.push(myName);
}

addNames(names, myName);
console.log(names);

//standard function
function findName(names, inputName)
{
    var found = false;

    //arrow function
    //names is an array that needs to loop through to find an item in the array
    names.forEach(item =>
    {
        if (item.toUpperCase().trim() == inputName.toUpperCase().trim())
        {
          found = true;
        }
    });

    return found;
}

var checkName = findName(names, "   JeAn   ");   //will return a true or false from the function

//checkName might pass to another function to handle

if (checkName)    //== true
{
  console.log("Yes the name is in the array");
}
else
{
  console.log("Name cannot be found in the array")
}

function findCommonNames(list1, list2)
{
  //Create an array to store names that are in both lists
  var commonNames = [];

  //list1 refers to names array
  list1.forEach(item1 => {
    list2.forEach(item2 => {

      //compare item1 == item2
      if (item1.toUpperCase().trim() == item2.toUpperCase().trim())
      {
          commonNames.push(item1);    //push from the customer list
      }
    });
  });

  //Return a new array with names that are in both lists
  return commonNames;

}

var returnNameArray = findCommonNames(names, newnames2);

//check if returnNameArray is empty
if (returnNameArray.length == 0)
{
  console.log("No one order from the customer list");
}
else
{
  console.log(returnNameArray);
}