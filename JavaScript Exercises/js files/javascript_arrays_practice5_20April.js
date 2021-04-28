var str = "I am a DUCK";
//var str2 = "'I am a DUCK'";
//console.log("" + str + "");
//console.log(str2);

//Practice 5: Operators and Expressions
//Javascript Array forEach() Method
//search for a name in an array

//Part 1
var names = ["Maria","Antony","Joy","Juan"];
var myName = "Jean";

function addNames(names, myName) {
    //add myName to names array
    names.push(myName); //push will add/insert item to end of list in array
}
addNames (names, myName);
console.log(names);

//Part 2
function findName(names,inputName) {

    var found = false;

    //arrow function
    //names is an array that needs to be looped through to find
    //an item in the array
    names.forEach(item => 
        {
            if (item.toUpperCase().trim() == inputName.toUpperCase().trim()) {
                CommonNames.push(item1);
            }
        });
        return found;
}

var checkName = findName(names, "Joy"); //will return a true or false from the function
//"Joy" is case sensitive
//checkName may be passed into another function to handle
if checkname {
    console.log("Yes, the name is in the array");
}
else {
    console.log("Name cannot be found in array");
}