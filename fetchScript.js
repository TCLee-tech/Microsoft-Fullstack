fetch('https://reqres.in/api/users')
.then((response) => response.json())
.then((data) => {console.log(data);

    //calling a function to insert data passed back to a table
    appendData(data);
})
.catch((error) => {
    console.error('Error:', error);
})

const createTable = (dataItem) =>
`
    <tr><td>${dataItem.email}</td>
    <td>${dataItem.first_name}</td>
    <td>${dataItem.last_name}</td>
    <td><img src=${dataItem.avatar} /> </td>
    </tr>
`


function appendData(myData) {
    var myTableHeader = '<table id="myTable"><tr><th>Email</th><th>First Name</th><th>LastName</th><th>Avatar</th></tr>'

    var myTableEnd = '</table>';

    //create an array to push the rows and columns into the array
    var dataList = [];
    
    dataList.push(myTableHeader);

    //loop through myData to display individual data items in the table
    for (var i=0; i < myData.data.length; i++) 
    {
        var myTableContent = createTable(myData.data[i]);
        dataList.push(myTableContent)
    }

    dataList.push(myTableEnd);  //an array, need to convert to string

    pHTML = dataList.join('\n');
    document.querySelector('#container').innerHTML = pHTML;
}