class User {
    constructor(id, email, first_name, last_name) {
      this.id = id;
      this.email = email;
      this.first_name = first_name;
      this.last_name = last_name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getFirstName(){
        return this.first_name;
    }

    getLastName(){
        return this.last_name;
    }

    equalsTo(user){
        return user.id === this.id;
    }

  }

module.exports = User;