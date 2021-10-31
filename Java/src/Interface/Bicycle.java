package Interface;

public class Bicycle implement Vehicle {

    //MUST implement 3 methods in Vehicle Interface, a MUST

    public int _speed;
    private int _gear;


    //to change gear
    @Override
    public void changeGear(int newGear) {

        this._gear = newGear;
    }

    //to increase speed

    @Override
    public void speedUp(int increment) {

        this._speed = this._speed + increment;
    }

    //decrease speed
    @Override
    public void applyBrakes(int decrement) {
        this._speed = this._speed - decrement;
    }
    //can create and implement any other own methods in this Class
}
