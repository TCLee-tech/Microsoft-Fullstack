package ClassPractices.Abstract;

public class Circle extends Shape {

    private final double _radius;
    private final double _pi = Math.PI;

    public Circle(double radius) {this._radius = radius; }

    @Override
    public double area() {
        //A = pie r^2
        return this._pi = Math.pow(this._radius, 2);    //Circle Class implements Shape; pow means power
    }

    @Override
    public double perimeter() {
        //P = 2.pie.r
        return 2 * this._pi * this._radius;
    }

    //Circle Class can implement it's own method to perform other actions

    @Override
    public String toString() {

        return String.format("Radius: %.2f", this._radius) + super.toString();
    }
}
