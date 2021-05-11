package ClassPractices.Abstract;

public class Rectangle extends Shape {

    private final double _width, _length;   //sides

    public Rectangle(double width, double length){
        this._width = width;
        this._length = length;
    }

    @Override
    public double area() {
        // A = w * L
        return this._width * this._length;  //rectangle implements its own area calculation method here. Not from Shape.java parent
    }
    @Override
    public double perimeter() {
        //P = 2(w + L)
        return 2 * (this._length + this._width);
    }

    @Override
    public String toString() {
        return String.format("Length: %.2f, Width: %.2f, ", this._length, this._width) + super.toString();
    }
}
