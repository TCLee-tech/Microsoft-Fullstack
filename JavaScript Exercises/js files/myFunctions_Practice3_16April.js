function payment(P) 
{
    var payment = P + P*(1/1000) + 3;
}
console.log("Maria needs to pay $" + payment(1000));

//input name of 3 friends
function infoCard(friend1, friend2, friend3) {
    return "Welcome " + friend1 + ", " + friend2 + ", and" + friend3
}
console.log(infoCard("Tom", "Jerry", "Cat"));

//A function that takes a prompted input in a birth year and returns the age.

//Practice 3 Exercise 1
const trueCost = (price, fee, interest) => price + (price * interest) + fee;

var price = 10;

//stored in database, retrieve it
var smallItemServiceFee = 3; 
var bigItemServiceFee = 8;  //usually stored in class, obhect, array 

var amtPay = trueCost(price, smallItemServiceFee, interest);
var interest = 0.01;

 console.log("For the transaction of $" + price + " ,Mary has to pay $" + amtPay.toFixed(2)); //.toFix(2) will fix to 2 decimal place

 //==========================================
 //user Mary login to Shopee to browse products. She ha a shoppiong cart that she can add items.
 //calculate the total price (include trueCost) and show the item in her cart page.

  //Mary wants to add the massageChair into the shopping cart
 //Mary clicks on 'add to cart' button 
 //(1) want to show Mary total cost 
 //(2) show Mary the cart page with product details (Name, Price, Color)
var smallItemServiceFee = 3; 
var bigItemServiceFee = 8;  //usually stored in class, obhect, array 
var interest = 0.01;
var totalCost = 0;

const trueCost = (price, fee, interest) => price + (price * interest) + fee;

function addToCart(amt)
{//calculate the total cost
    totalCost = totalCost + amt;
    //totalCost =+amt;

    // perform other action ....
}
//1) Product List - retrieve from database(mySQL) from backend
var products = {massageChair: 300, dress: 20, iphone: 600 }; //quantity

//Mary wants to add the massageChair into the shopping cart
 //Mary clicks on 'add to cart' button 
 //(1) want to show Mary total cost 
 //(2) show Mary the cart page with product details (Name, Price, Color)

 addToCart(products.massageChair);
 addToChart(products.dress);

 totalCost = trueOcst(totalCost, bigItemServiceFee, interest);
 console.log("For the transaction of $" + price + " ,Mary has to pay $" + amtPay.toFixed(2)); //.toFix(2) will fix to 2 decimal place
 

 //part 2
 function age (birthYear = prompt("What year were you born?")){
    //var age = prompt("")    
    //if !isNaN(age) {alert("Please enter a number")}
    return 2021-birthYear;
 }
 console.log("Your current age is: " + age());

 //part 3
 function greeting (name1, age1, name2, age2, name3, age3) { //better way is to use array
    console.log("Welcome", name1, "you are ", age1,"Welcome", name2, "you are ", age2, "Welcome", name3, "you are ", age3);
 }
 greeting("Ann", 10, "Ben", 20, "Chaire",30);