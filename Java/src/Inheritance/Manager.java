package Inheritance;

public class Manager extends Employee{

    private int _roleLevel;
    private String _roleDescription;

    public Manager(int id, String name, double salary, int roleLevel, String roleDescription) {
        super(id, name, salary);
        this._roleLevel = roleLevel;
        this._roleDescription = roleDescription;
    }

    //private method are only for own class use

    public void setRoleTitle(int roleLevel) {this._roleLevel = roleLevel; }

    public int getRoleLevel() {return this._roleLevel;}

    public void setRoleDescription(String roleDescription) {this._roleDescription = roleDescription;}

    public String getRoleDescription() {return this._roleDescription;}

    @Override
    public String toString() {
        return super.toString() + String.format("Role Level: %d, Role Description: %s \n", this._roleLevel, this._roleDescription); //means to print parent + own toString
    }
}
