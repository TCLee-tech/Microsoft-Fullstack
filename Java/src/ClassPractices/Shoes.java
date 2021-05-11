package ClassPractices;

public class Shoes {

    double _size;
    String _color;
    String _type;
    String _brand;

    //creating a null constructor that pass in nothing
    //over-loading the constructor & methods -> when there are 2 or more constructor/method

    public Shoes()
    {}

    //constructor - have parameters that is passed in from the main Class
    public Shoes (double size, String color, String type, String brand)
    {   //getter method
        this._size = size;
        this._color = color;
        this._brand = brand;
        this._type = brand;
    }

    //getter method
    public double getSize() {
        return this._size;
    }
    public String getColor() {
        return this._color;
    }
    public String getType() {
        return this._type;
    }
    public String getBrand() {
        return this._brand;
    }

    //setter method
    public void setSize(int size) {
        this._size = size;
    }
    public void setColor(String color) {
        this._size = color;
    }
    public void setType(String type) {
        this._size = type;
    }
    public void setBrand(String brand) {
        this._size = brand;
    }

    }
}
