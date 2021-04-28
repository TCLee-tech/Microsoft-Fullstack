
//Practice 1: Basic Functions

//1) A function to print out "Hello World"
//This is a standard function 
function hello() {
    console.log('Hello World');
}

hello();

//2) Adds 2 numbers together with standard function - to demo no return value
//The variables declared in the function are not accessible outside of the function
function add(a,b)
{
    //Local Variable
    var addition = a + b;
    console.log(addition);
}

add(3,4);

//3) Prints the length of a word using standard function - demo with return value

function wordLength(word)
{
    var len = word.length;      //trim
    return len;
}

var getLen = wordLength('Jean ');
console.log("The length of the word: " + getLen);




//Function Expressions - anonymous functions
//anonymous functions is invoked (called) automatically right after it is created
//The variables declared in the function are not accessible outside of the function
var sum = function (a,b) { return a + b };

var user1 = sum(2,3);
console.log(user1);

var user2 = sum(4,5);
console.log(user2);


//Self Invoking Function is invoked (called) right after it is created
//The variables declared in the function are not accessible outside of the function
//This type of function is useful to perform initialisation work 
//(e.g. create event listener for a button when I first launch the html page)
//Will be called one time only - games to set the score to zero when first launch the page)
(function () {
    var x = "Hello";
    console.log(x);
})();


//Arrow Function
//ALlow a short syntax version for writing the function expression
//Do not need the function keyword

const x = (a,b) => a + b;       //return a + b

console.log("Using the Arrow Function: " + x(2,3));

var user3 = x(4,5);
console.log(user3);




// 1) Standard Function with return value
function infoCard(name, location, hobby){

	return "Hi, my name is " + name + ". I live in " + location + ". and enjoy " +  hobby;

}

console.log(infoCard("Jean Looi", "SG", "cycling"));
console.log(infoCard("Peter", "KR", "watch korean drama"));

// 2) Arrow Function or Expression
/*const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;*/

//console.log(add(2,3));
//console.log(subtract(4,2));
//console.log(multiply(2,3));
//console.log(divide(4,2));



//Practice 3 - Exercise #1 (Arrow Function)
//store in database, retrieve it
var smallItemServiceFee = 3;     
var bigItemServiceFee = 8;      // usually store in Class, object, array
var interest = 0.01;
var totalCost = 0;

const trueCost = (price, fee, interest) => price + (price * interest) + fee;

function addToCart(amt)
{
    //calculate the total cost
    totalCost = totalCost + amt;
    //totalCost += amt;

    //Perform other actions...........................
}
//var price = 50;
//var promocodeJean = 0.5;
//var amtPay = trueCost(price, bigItemServiceFee, interest);
//console.log("For the transaction of $" + price + " , Mary has to pay $" + amtPay.toFixed(2));

//User Mary login to Shopeeeeeee to browse products, she has a shopping cart that she can add items
//calculate total price (include trueCost) and show the items in her cart page

//1) Product List - retreive from the database (mySQL) from backend
var products = { massageChair: 300, dress: 20, iphone: 600 };       //quantity

//2) Mary wants to add the massageChair into the shopping cart 
//Mary click on 'add to cart' button 
//(1) show Mary the total cost (2) show Mary Cart page with the product details (Name, Price, Color)

addToCart(products.massageChair);
addToCart(products.dress);
addToCart(products.iphone);

//what is my totalCost now = 320 --> Now Mary wants to check out which include service fee and interest fee
totalCost = trueCost(totalCost, bigItemServiceFee, interest);
console.log("Total Cost to be paid by Mary is $" + totalCost.toFixed(2));



//Part1
function names (name1 ,name2 ,name3){

	console.log("Welcome ${name1}, ${name2}, ${name3}");

}
names("Ed", "Edd", "Eddy") 

//part2
function age (birthYear = prompt("What year were you born?")){

    //var age = prompt("")
    //if isNaN(age) { alert("Please enter a number"); }
    //else .......

	return 2021-birthYear;
}
console.log("Your current age is: " + age());

//part 3
function greeting (name1,age1,name2,age2,name3,age3){   //better way is to use array 
	console.log("Welcome", name1, "you are", age1,". Welcome", name2, "you are", age2, ". Welcome", name3, "you are", age3);
}
greeting("Ann" ,10 ,"Ben" ,20 ,"Claire" ,30)



