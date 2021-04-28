//Return string
Name = "John"
Location = "South Africa"
Hobby = "drinking homemade wine"
function informationCard(Name,Location,Hobby) {
console.log("Hi, my name is " + Name +". I live in " + location + " amd enjoy " + Hobby);
} //use return xxxxx if want to print on the screen

//alternative:
function informationCard(Name,Location,Hobby) {
    return "Hi, my name is " + Name +". I live in " + location + " amd enjoy " + Hobby;
    }
console.log(informationCard("John","SouthAfrica","drinking housemade wine"));

//alternative:
var user1 = informationCard("John", "S Africa", "drinking homemade wine");
console.log(user1);



//add(a,b)
function add(a,b) {
    var addition = a + b;
    console.log(addition);
}

//subtract(a,b)
function subtract(a,b) {
    var subtract = a - b;
    console.log(subtract);
}

//multiply(a,b)
const x = (a,b) => a*b;
console.log("a multiply by b is " + x(2,3));

//divide(a,b)
const y = (a,b) => a/b;
console.log("a divide by b is " + y(6,2));

//alternative 1
var sum = function (a,b) { return a + b };

var subtract = function (a,b) {return a - b};

var multiply = function (a,b) {return a * b};

var divide = function (a,b) {return a / b};


var user1 = sum(2,2);
console.log(user1);

var user2 = subtract (5,2);
console.log(user2);

var user3 = multiply (2,1);
console.log(user3);

var user4 = divide (10,10);
console.log(user4);

//alternative 2 Arrow and Expression
const add = (a,b) => a + b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

console.log(add(2,3));
console.log(subtract(4,3));
console.log(multiply(2,3));
console.log(divide(6,3));