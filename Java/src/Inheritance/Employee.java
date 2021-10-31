package Inheritance;

public class Employee {
    int _id;
    String _name;
    double _salary;


    public Employee (int id, String name, double salary ) {
        this._id = id;
        this._name = name;
        this._salary = salary;
    }

    public void setId(int id) {
        this._id = id;
    }

    public int getId() {return this._id;}

    public void setName(String name) {this._name = name; }

    public String getName() {return this._name;}

    public void setSalary (double salary) {
        this._salary = salary;
    }

    public double getSalary() {return this._salary; }

    @Override
    public String toString() {
        return String.format("Employee Id: %d, Name: %s, salary: %.2f.", this._id, this._name, this._salary);
    }
}