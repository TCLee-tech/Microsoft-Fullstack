const productsControl = new ProductsController();   //JS to add data from new Product form

var storeImage; //to store image for new Product uploaded

//when the New Product Form is submitted by clicking on the 'Save Item" button, below calls API to add items to the database
// add an "onSubmit" event listener for productform to add a product
newItemForm.addEventListener('submit', (event) => { //newItemForm is ID of new Form, "submit' is button type, event in line 10 next

    //self-invoked function, arrow function
    //prevent default action that the form does -> in this case is to submit the form using POST/GET method that is stated in the form tag
    event.preventDefault();

    //1. Store the values from our webForm (new Product info entry page) inputs into variables
    const newItemNameInput = document.querySelector('#newItemNameInput');   //const is to prevent other developers from changing input from productform.html
    const newItemDescription = document.querySelector('#newItemDescription'); //refer to id of the input tag in productform.html
    const newItemImageUrl = document.querySelector('#imagefile');
    const newItemStyle = document.querySelector('#newItemStyle');
    const newItemPrice = document.querySelector ('#newItemPrice');

    //2. Do the validation code here, e.g. radio button must check at least one, textbox must enter info


    //3
    // Get the values of the inputs from "New Products" webForm - variable names to be the same as MySQL columns
    const name = newItemNameInput.value;
    const description = newItemDescription.value;
    //Users/user/Desktop/aaa.png is deaktop path that image is loaded from
    //C:\fakepath\t-shirt_new.png   //the frontend will auto-attach a fakepath to protect folder info of user uploading image (security)
    //images/aaa.png will be path saved to backend database after command in line 30 to remove fakepath prefix
    console.log("image path: " + newItemImageUrl.value);
    const imageUrl = "images/" + newItemImageUrl.value.replace("C:\\fakepath\\","");    //replace fakepath with nothing ("")
    const style = newItemStyle.value;
    const price = newItemPrice.value;

    //4 Commands below will clear the web form of values
    newItemNameInput.value = '';    // '' means empty/black entry, line to be read as "assign blank entry to newItemNameInput"
    newItemDescription.value = '';
    newItemImageUrl.value ='';
    newItemStyle.value = '';
    newItemPrice.value = '';

    //add the item info to backend ItemController.java, the @PostMapping API
    productsControl.addItem(name, description, imageUrl, style, price, storeImage);
});

//select file input
const input = document.querySelector('#imagefile')

//add event listener to listen to image upload action on productform.html
input.addEventListener('change', () => {    //there is a change, i.e. upload and addition of an image file, () refers to the file uploaded

    storeImage = input.files[0];    //the image files uploaded by user to productform.html are assigned to storeImage variable  //1st file uploaded assigned index 0    //file object, not file image
    console.log("input : " + storeImage);

});
