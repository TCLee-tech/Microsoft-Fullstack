package ClassPractices.Abstract;

public class Main {

    public static void main(String[] args) {

        /*THIS IS WRONG
        Cannot create an object class for abstract class Shape
        Shape s = new Shape();
        */
        //Rectangle test
        double width = 5, length = 7;
        Shape rectangle = new Rectangle(width, length);
        System.out.println(rectangle);

        //Circle test
        double radius = 5;
        Shape circle = new Circle(radius);
        System.out.println(circle);

        //Triangle test
        double a = 5, b = 3, c = 4;
        Shape triangle = new Triangle(a,b,c);
        System.out.println(triangle);

    }
}
