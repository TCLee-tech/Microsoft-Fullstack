const User = require("./users");
const axios = require("axios");

async function fetchData(callback) {

    try {
        let res = await axios.get("https://reqres.in/api/users/2");
        let alldata = res.data;

        var user = new User(alldata.data.id, alldata.data.email, alldata.data.first_name, alldata.data.last_name);

        callback(user);
    }
    catch(err) {
        console.log("Error:" + err)
    }
}

//call back function
fetchData(function (user) {
    console.log("This is a callback function.")
    console.log(user.getId());

    //populate the user data onto webpage using DOM
});

module.exports = {fetchData};