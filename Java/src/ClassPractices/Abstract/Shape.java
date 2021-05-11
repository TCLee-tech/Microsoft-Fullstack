package ClassPractices.Abstract;
/*
Shape is abstract Class - template so that other developers know what to implement if they have gotten your abstract Class
Blueprint of what your children Class will look like
 */
public abstract class Shape {   //by default, extends from Object, though not written out

    //create abstract method for my children to implement themselves
    public abstract double area();      //abstract Class does not implement abstract method
    public abstract double perimeter();

    //own other methods here that is common for your children to use

    /*
    toString method to be placed at the last of the Class
    is a string representation of an Object
    is built in Java method from Object Class and I am overriding the built in method to print in my Class stuff
    */

    @Override
    public String toString() {
        return String.format("Area: %.2f, Perimeter: %.2f", area(), perimeter());
    }
}
