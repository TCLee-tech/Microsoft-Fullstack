
//16 April 2021 Practice 1: Basic Functions

// (1) To create a basic function to print out "Hello World"
//This is a standard function
function hello() {
    console.log("Hello World!");
    }

hello(); //to call the function. Even if null entry, need to include brackets ()

//(2)Add 2 numbers together with standard function - to demo no return value

function add(a,b)    {
    //create a local variable
    var addition = a + b;
    console.log(addition);
}

//console.log(addition); //printing the console
// ==> WRONG. Will get error message because addition is a LOCAL variable, not defined outside function


add(3,4); // call the add function

//(3)Print the length of a word using statement function
function wordLength(word) { //function Name(parameter)
    var len = word.length;  //trim. space count as 1 character
    return len;
}

var getLen = wordLength("Jean");
console.log("The length of the word" + getLen);

//function Expressions - annoymous functions
//annoymous function is invoked (called) automatically right after it is created.
var sum = function (a,b) {return a + b};

var user1 = sum(2,3);
console.log(user1);

var user2 = sum(4,5);
console.log(user2);

//Self-Invoking Function is invoked (called) right after it is created 
//The variables declared in the function are not accessible outside of the function
//This type of function is useful to perform initialisation work 
//(e.g. event listener when I first launch the html page)
//will be called one time only to initialise whatever
//e.g. games to set the score to zero when first launch the page
(function() {
    var x = "Hello";
    console.log(x);
})();

//Arrow Function
//allow a short syntax version for writing the function expression
//Do not need the function keyword

const x = (a,b) => a + b;   //return a+ b

console.log("Using the Arrow function:" + x(2,3));

var user3 = x(4,5);
console.log(user3);