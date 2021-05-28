//Doing a Product web app, in product page to 
//display the name, description, imageUrl, style, price, ..., ...,.....,....


const createHTMLList = (index, name, description, imageURL) =>
`
<div class="col-lg-4">
<div class="card" style="width: 18rem;">
    <img src=${imageURL} class="card-img-top"
        alt="image">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${description}</p>
        <a id="${index}" href="#" class="btn btn-primary" data-toggle="modal" data-target="#productModal">More</a>
    </div>
</div>
</div>

`;


function displayProductDetails(item)
{
    document.querySelector("#modalName").innerText = item.oName;
    document.querySelector("#modalImg").src = item.oImageUrl;
    document.querySelector("#modalStyle").innerText = item.oStyle;
    document.querySelector("#modalPrice").innerText = item.oPrice;

}


class ProductsController 
{
    constructor()
    {
        this._items = [];       //create an array to store the details of product items
    }

    //method to add the items into the array
    addItem(name, description, imageUrl, style, price, imagePath)
    {
        const item = {
            Name: name,
            Description: description,
            ImageUrl: imageUrl,
            Style: style,
            Price: price
        };

        //push the item to the items property
        //productController._items.push(item);
        //Not passing the values and file object using @RequestBody
        //Need to pass the values and file object using @RequestParam
        const forData = new FormData();

//        this._items.push(itemObj);
//    }
//
//    displayItem()   //this method is used to fetch data from the API
//    {
//     //fetch data from database using the REST API endpoint from Spring Boot
//     var productController = this;  //productController refers to the class object
//     productController._items = [];
//
//     fetch('http://127.0.0.1:8080/item/all')
//        .then(resp) => resp.json())
//        .then(function(data)) {
//            console.log("2. receive data")
//            console.log(data);
//
//        data.forEach(function (item, index) {

            const itemDbj = {
                oId: item.id,
                oName: item.name,
                oDescription: item.description,
                oImageUrl: item.imageUrl,
                oStyle: item.style,
                oPrice: item.price
            };

        productController._items.push(itemObj); //array
        });

        productController.render();

        })
        .catch(function(error) {
            console.log(error);
        });

    }   //ans of display item

render()    //display the fetched data from the API
{
     var productHTMLList = [];

            for (var i=0; i<this._items.length; i++)
            {
                const item = this._items[i];            //assign the individual item to the variable

                const productHTML = createHTMLList(i, item.oName, item.oDescription, item.oImageUrl);

                productHTMLList.push(productHTML);
            }

            //Join all the elements/items in my productHTMLList array into one string, and seperate by a break
            const pHTML = productHTMLList.join('\n');
            document.querySelector('#row').innerHTML = pHTML;


            //addEventListener - click
            for (var i=0; i<this._items.length; i++)
            {
                const item = this._items[i];
                document.getElementById(i).addEventListener("click", function() { displayProductDetails(item);} );
            }
}


}   //End of ProductsController class
