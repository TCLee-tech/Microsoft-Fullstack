package ClassPractices;

public class MyClass<string> {

    int myStudentId = 123;  //variable of Class (attributes) - mainly to store constant values (const), e.g. interest rate, discount
    String myStudentName = "Alice";

    //Class constructor - use to initialise my class instances (attributes)
    //A Class constructor can be a null constructor
    //Constructor or Methods in the class can be public, protected or private

    //Null Constructor
    public MyClass() {}

    //Create a method to return getStudentId to the Main Class
    //int refers to the type of data returned - an integer. if don't want to return anything ->"void"
    public int getStudentId() {
        return myStudentId;
    }
    public String getStudentName() {
        return myStudentName;
    }
}
