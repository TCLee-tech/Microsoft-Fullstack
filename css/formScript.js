//Global Variables
var FormList = [];

function resetError() {
    document.querySelector("#checkboxErrorMsg").innerHTML = "";
    document.querySelector("#termsErrorMsg").innerHTML = "";
}

function submitForm () {
    //pass the input values to variables
    var name = document.querySelector("#full_name").value;
    var email = document.querySelector("#email").value;
    var tourPackage = document.querySelector("#tour_package").value;
    var arrivalDate = document.querySelector("#arrival_date").value;
    var numPax = document.querySelector("#num_pax").value;

    //checkbox
    var checkBoxArray = [];
    checkBoxArray.push(document.querySelector("#c_food").checked);          //value is either true (checked)
    checkBoxArray.push(document.querySelector("#c_sightseeing").checked);   //value is either true (checked)
    checkBoxArray.push(document.querySelector("#c_culture").checked);       //value is either true (checked)

    var discount = document.querySelector("#discount").value;

    //Media Button
    var agree = document.querySelector("#radio_agree").checked;
    var disagree = document.querySelector("#radio_disagree").checked;

    console.log(`${name} ${email} ${tourPackage} ${arrivalDate}`);

    // validation: checkbox must have at least one experience checked
    var found = false;
    checkBoxArray.forEach(item => {
        if (item)   //==true.
        {
            found = true;
        }
    });

    if (!found) {
        document.querySelector("#checkboxErrorMsg").innerHTML = "Please select at least one experience";
        document.querySelector("#checkboxErrorMsg").style.color = "red";
        //styling the error messages to be in the css
    }

    //handle if user clicks on the disagree for the Terms and Condition
    if (disagree) { //if(disagree ==true)
        document.querySelector("#termsErrorMsg").innerHTML = "Please select AGREE to the Terms and Conditions";
        document.querySelector("#termsErrorMsg").style.color = "red";
    }

    //(1) Ensure one of the checkbox is checked
    //(2) Ensure "Agree" radio button is checked
    //before values are stored into the array
    if(found && agree) {    //if (found == true && agree == true)
        addToList (name, email, tourPackage, arrivalDate, numPax, checkBoxArray, discount);
        // can put code for pop-up alert here
    }  
}

function addToList (name, email, tourPackage, arrivalDate, numPax, checkBoxArray, discount) {
    //store the values into the formList array
    //create an object (e.g. person)

    const item ={
        i_name: name,       //key-value pair
        i_email: email,
        i_tour: tourPackage,
        i_arrival:arrivalDate,
        i_pax: numPax,
        food: checkboxArray [0],
        sightseeing: checkBoxArray[1],
        culture: checkBoxArray [2],
        i_discount: discount
    }

    formList.push(item);    //item is an object key-value pair

    listForm;
}

function listForm() {
    console.log(formList);
    console.log("Total reservation:" + formList.length);       
}

//set the Max and Min Date selector to be today and one month
//The format of date selector: yyyy-mm-dd
var today = new Date(), day = today.getDate(), month = today.getMonth() + 1, year = today.getFullYear();
// line above means the below. If use , means variables assignment continue. If use ;, means finish/step.
// var today = new Date(), 
// day = today.getDate(), 
// month = today.getMonth() + 1,        //default number for the month - Jan = 0, Feb = 1, March = 2 etc
// year = today.getFullYear();

var nextMonth = today.getMonth() + 2;    //means to allow date selector to show 1 more month. Remember getMonth() count starts from 0 for Jan

//day: today is 22. For days that are 1 to 9, these have single digits, we need to add a "0" in front.
if (day < 10) {
    day = "0" + day;    //add a zero in front of the number e.g. 01, 02, 03
}

//month: today is 04, so we need to add a "0" in front
if (month < 10) {
    month = "0" + month;    //add a zero in front of the number e.g. 01, 02, 03
}

if (nextMonth < 10) {
    nextMonth = "0" + nextMonth;    //add a zero in front of the number e.g. 01, 02, 03
}


//check if number of months = 12, depends on your nextMonth, you need to ensure that the month will not go beyond 12
//12 + 3 is wrong


//if hard code min = "22/04/2021", need to change number everyday. So need dynamic code.
var todayDate = year + "-" + month + "-" + day;
var nextMonthDate = year + "-" + nextMonth + "-" + day;

//set attribute min of the arrival_date input tag
document.querySelector("#arrival_date").setAttribute("min", todayDate);
document.querySelector("#arrival_date").setAttribute("max", nextMonthDate);