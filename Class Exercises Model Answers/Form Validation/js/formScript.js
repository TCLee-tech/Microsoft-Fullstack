//Global Variables
var formList = [];


function resetError()
{
    document.querySelector("#checkboxErrorMsg").innerHTML = "";
    document.querySelector("#termsErrorMsg").innerHTML = "";
}


function submitForm()
{
    resetError();
   
    //Pass the input values to variables
    var name = document.querySelector("#full_name").value;
    var email = document.querySelector("#email").value;
    var tourPackage = document.querySelector("#tour_package").value;
    var arrivalDate = document.querySelector("#arrival_date").value;
    var numPax = document.querySelector("#num_pax").value;

    //CheckBox
    var checkBoxArray = [];
    checkBoxArray.push(document.querySelector("#c_food").checked);              //value is either true (Checked) or false (Unchecked)
    checkBoxArray.push(document.querySelector("#c_sightseeing").checked);       //value is either true (Checked) or false (Unchecked)
    checkBoxArray.push(document.querySelector("#c_culture").checked);           //value is either true (Checked) or false (Unchecked)

    var discount = document.querySelector("#discount").value;

    //Radio Button
    var agree = document.querySelector("#radio_agree").checked
    var disagree = document.querySelector("#radio_disagree").checked

    //console.log(`${name} ${email} ${tourPackage} ${arrivalDate}`);

    //Validation : Checkbox must have at least one experience checked
    //for (var i=0; i<checkBoxArray.length; i++)
    //{
    //}

    var found = false;
    checkBoxArray.forEach(item => {
        if (item)       //== true
        {
            found = true;
        }
    });

    if (!found)
    {
        document.querySelector("#checkboxErrorMsg").innerHTML = "Please select at least one experience";
        document.querySelector("#checkboxErrorMsg").style.color = "red";        //replace with #000000
        //styling the error messages to be in the css
    }

    //Handle if user clicks on the disagree for the Terms & Condition
    if (disagree)       //if (disgree == true)
    {
        document.querySelector("#termsErrorMsg").innerHTML = "Please select AGREE to the Terms and Conditions";
        document.querySelector("#termsErrorMsg").style.color = "red";
    }

    //(1) Ensure one of the Checkbox is checked (2) Ensure agree radio button is checked
    //Before the values are store into the array
    if (found && agree)     // if (found == true && agree == true)
    {
        addToList(name, email, tourPackage, arrivalDate, numPax, checkBoxArray, discount);
    
        //Modal Pop up 
    
    }
    
}

function addToList(name, email, tourPackage, arrivalDate, numPax, checkBoxArray, discount)
{
    //Store the values into the formList array - push object to the formList array
    //Create an object item
    
    const item = {
        i_name: name,           //key-value pair
        i_email: email,
        i_tour: tourPackage,
        i_arrival: arrivalDate,
        i_pax: numPax,
        food: checkBoxArray[0],
        sightseeing: checkBoxArray[1],
        culture: checkBoxArray[2],
        i_discount: discount
    }

    formList.push(item);

    listForm();

}

function listForm()
{
    console.log(formList);
    console.log("Total Reservation :" + formList.length);
}
