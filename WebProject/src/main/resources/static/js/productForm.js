const productsControl = new ProductsController();

var storeImage;

//when the New Product Form is submitted by clicking on the 'Save Item" button, below calls API to add items to the database
// add an "onSubmit" event listener for productform to add a product
newItemForm.addEventListener('submit', (event) => {
    //self-invoked function, arrow function
    event.preventDefault(); //prevent default action that the form does -> in this case is to submit the form using POST/GET method that is stated in the form tag


    //1. Store the values from the inputs into variables
    const newItemNameInput = document.querySelector('#newItemNameInput');
    const newItemDescription = document.querySelector('#newItemDescription');
    const newItemImageUrl = document.querySelector('#imagefile');
    const newItemStyle = document.querySelector('#newItemStyle');
    const newItemPrice = document.querySelector ('#newItemPrice');

    //2. Do the validation code here


    //3
    // Get the values of the inputs - variable names to be the same as MySQL columns
    const name = newItemNameInput.value;
    const description = newItemDescription.value;
    //Users/user/Desktop/aaa.png
    //C:\fakepath\t-shirt_new.png
    //images/aaa.png
    console.log("image path: " + newItemImageUrl.value);
    const imageUrl = "images/" + newItemImageUrl.value.replace("C:\\fakepath\\","");
    const style = newItemStyle.value;
    const price = newItemPrice.value;

    //4 Clear the form
    newItemNameInput.value = '';
    newItemDescription.value = '';
    newItemImageUrl.value ='';
    newItemStyle.value = '';
    newItemPrice.value = '';

    //add the task to the task manager
    productsControl.addItem(name, description, imageUrl, style, price, storeImage);
});

//select file input
const input = document.querySelector('#imagefile')

//add event listener
input.addEventListener('change', () => {

    storeImage = input.files[0];
    console.log("input : " + storeImage);

});
