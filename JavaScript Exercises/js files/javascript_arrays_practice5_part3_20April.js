//Part 3:2 arrays
var names = ["Maria","Antony","Joy","Juan"];
var myName = "Jean";

var newnames2 = ["Peter", "Antony", "Duck", "Jean"];

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
                found = true;
            }
        });
        return found;
}

var checkName = findName(names, "Joy"); //will return a true or false from the function
//"Joy" is case sensitive
//checkName may be passed into another function to handle
if checkName {
    console.log("Yes, the name is in the array");
}
else {
    console.log("Name cannot be found in array");
}


//create an array to store names that are in both lists
function findCommonNames(list1, list2) {
    // this function will return a new array with names that are in both lists
    var commonNames = [];

    //list1 refers to names array
    list1.forEach(item1 => {
        list2.forEach(item2 => {

            //compare item1 == item2 ?
            if (item1.toUpperCase().trim() == item2.toUpperCase().trim()) {
                commonNames.push(item1);    //push fromt eh customer list
            }    
        })
    })
    return commonNames;
    //return a new array with names that are in both arrays
}

var returnNameArray = findCommonNames(names, newnames2);

//check if returnNameArray is empty
if (returnNameArray.length ==0) {
    console.log("No one ordered. No names on the customer list");
}
else {
    console.log(returnNameArray);
}