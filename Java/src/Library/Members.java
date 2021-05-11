package Library;

public class Members {

    /*
    name: String, age:int
    Constructor that has 2 parameters for name and age
    getName() and getAge that returns the name and age
    */

    String _name;
    int _age;

    public Members (String name, int age) {
        this._name = name;
        this._age = age;
    }

    public String getName() { return this._name; }
    public int getAge() { return  this._age; }

}




