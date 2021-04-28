//Practice 1 Exercise 1

var myAlphabet = ['A','B','C','D','E','F','G'];
console.log(myAlphabet.length);

//Exercise 2
var index = 0;
var Planets = ["Mars","Earth","Mercury","Venus","Jupiter"];
console.log(index + ":" + Planets(index));
//index = index + 1;
index +=1;
//index++;
console.log(index + ":" + Planets(index));
index+=1;
console.log(index + ":" + Planets(index));
index+=1;
console.log(index + ":" + Planets(index));
index+=1;
console.log(index + ":" + Planets(index));


var Planets = ["Mars","Earth","Mercury","Venus","Jupiter"];
for (var i=0; i < Planets.length; i++)
{
    console.log(i + ":" + Planets(index));
}

var myArr = [ 1, 2, 'One', true];
for (var i=0; i < myArr.length; i++)
{
console.log(myArr[i]);
}

/*var item=0;
console.log(myArr[item]);
item += 1;
console.log(myArr[item]);
item += 1;
console.log(myArr[item]);
item += 1;
console.log(myArr[item]);*/

for (var i=0; i <10; i++)
{
    console.log("In FOR loop: " + i);
}

//to count down from 10
for (var i=9; i > 10; i--)
{
    console.log("In FOR loop: " + i);
}

var i=0;
while (i >= 0, i<10)
{
    console.log("In WHILE loop: " + i);
}


//Practice 2: Arrays and Loop Exercise #1

var People = ["sofia","David",Juan];
var addPeople = ["Sara","Augustin"];
var endPeople = People.concat(addPeople);
console.log(endPeople);
endPeople.splice(0,1);
console.log(endPeople);
//alt
//People.push("Sara","Augustin");


endPeople.splice(1,0,"Renata");
console.log(endPeople);

endPeople.push("Elena");
console.log(endPeople);


//Practice 2, Exercise 2
var stars = ""              //initialise stars
for (i=1; i < 20; i++) 
{                           //represents rows
    for (j=1; j <=i; j++)
    {                       // represents column
     stars +="*"    //add "*" to variable stars   
    }
    console.log(stars)  //print
    stars=""    //reset for next row to start count from no stars
} 