//Doing a Product web app, in product page to 
//display the name, description, imageUrl, style, price, ..., ...,.....,....

const createHTMLList = (index, name, description, imageUrl) =>
`
<div class="col-lg-4">
<div class="card" style="width: 18rem;">
    <img src=${imageUrl} class="card-img-top"
        alt="image">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${description}</p>
        <a id="${index}" href="#" class="btn btn-primary" data-toggle="modal" data-target="#productModal">More</a>
    </div>
</div>
</div>

`;


function displayProductDetail(item)
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


  //method to add the items into the array. method called from productform.html based on what item I want to add
    addItem(name, description, imageUrl, style, price, imagePath)
    {
        var productController = this;

            const item = {
            name: name,
            description: description,
            imageUrl: imageUrl,
            style: style,
            price: price
        };

        //push the item to the items property
        //productController._items.push(item);
        //Not passing the values and file object using @RequestBody
        //Need to pass the values and file object using @RequestParam to backend
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('imageUrl', imageUrl);
        formData.append('style', style);
        formData.append("price", price);
        formData.append('imagefile', imagePath);

        fetch('http://127.0.0.1:8080/item/add');    //can change to heroku app
            method: 'POST', // or 'PUT'
            /*headers: {
                'content-type: 'undefined'
                'mimeType': 'application/octet-stream'
            },*/
            body: formData  //formData here refers to the formData defined in line 56, all 6 items
            })
            .then(response => response.json())  //pass data from productform.html as json to backend
            .then(data => {
                console.log('Success:', data);
                alert("Successfully added to Product")  //to let user know successfully added to Products Page
                //this.displayItem();       //To display in the table from productform.html
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert("Error adding item to Product")
                    });




    displayItem()   //this method is used to fetch data from the API
      {
         //fetch data from database using the REST API endpoint from Spring Boot
         var productController = this;  //productController refers to the productController Class on top (line 32)
         productController._items = [];

         fetch('http://127.0.0.1:8080/item/all')
            .then((resp) => resp.json())             //fetch response (resp) from backend in json format
            .then(function(data) {                  //function with data as parameter
                console.log("2. receive data")
                console.log(data);
                }

            data.forEach(function (item, index) {   //data parameter for each indexed item from backend

                const itemDbj = {
                    oId: item.id,
                    oName: item.name,
                    oDescription: item.description,
                    oImageUrl: item.imageUrl,
                    oStyle: item.style,
                    oPrice: item.price
                };

            productController._items.push(itemObj); // push items details from itemObj array into productController    // same as this._items.push(itemObj)
            });

            productController.render();
         });

            .catch(function(error) {
                console.log(error);
            });
      }   //end of displayItem()


    render()    //display the fetched data from the API     // method to render display on website
    {
        var productHTMLList = [];

        for (var i=0; i<productController._items.length; i++)
        {
            const item = productController._items[i];            //assign the individual item to the variable

            var loc = window.location.href;
            var full = item.oImageUrl.pathname;

            const productHTML = createHTMLList(i, item.oName, item.oDescription, item.oImageUrl);
            productHTMLList.push(productHTML)
        }

        //Join all the elements/items in my productHTMLList array into one string, and separate by a break
        const pHTML = productHTMLList.join('\n');
        const itemsContainer = document.querySelector('#row');
        itemsContainer.innerHTML = pHTML;

        //addEventListener - click
        for (var i=0; i<productController._items.length; i++)
        {
            const item = productController._items[i];
            document.getElementById(i).addEventListener("click", function() { displayProductDetails(item);} );
        }
    }
}   //End of ProductsController class



    //method to add the items into the array. method called from productform.html based on what item I want to add
    addItem(name, description, imageUrl, style, price, imagePath)
    {
        var productController = this;

            const item = {
            name: name,
            description: description,
            imageUrl: imageUrl,
            style: style,
            price: price
        };

        //push the item to the items property
        //productController._items.push(item);
        //Not passing the values and file object using @RequestBody
        //Need to pass the values and file object using @RequestParam to backend
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('imageUrl', imageUrl);
        formData.append('style', style);
        formData.append("price", price);
        formData.append('imagefile', imagePath);

        fetch('http://localhost:8080/item/add', {
            method: 'POST', // or 'PUT'
            /*headers: {
                'content-type: 'undefined'

                'mimeType': 'application/octet-stream'
            },*/
            body: formData  //formData here refers to the formData defined in line 56, all 6 items
            })
            .then(response => response.json())  //pass data from productform.html as json to backend
            .then(data => {
                console.log('Success:', data);
                alert("Successfully added to Product")  //to let user know successfully added to Products Page
                //this.displayItem();       //To display in the table from productform.html
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert("Error adding item to Product")
                    });

