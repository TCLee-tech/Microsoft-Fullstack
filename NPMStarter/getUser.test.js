const myGetUser = require("./getUser");

test("validate id is equal to 2", done => {
    
    function callback(data) {

   try {

    //expect(data.getId()).toBe(2);
    expect(data.getId()).toEqual(2);
    expect(data.getEmail()).toEqual("janet.weaver@reqres.in");
    expect(data.getFirstName()).toEqual("Janet");
    expect(data.getLastName()).toEqual("Weaver");
    done();
}
    catch(error) {
        done(error);
    }
}

myGetUser.fetchData(callback);
 });