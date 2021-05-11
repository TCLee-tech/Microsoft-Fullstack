package Inheritance;

public class Specialist extends Employee {

    char _roleTitle;    //access can be set as private. enter "private" in front
    String _roleDescription;

    public Specialist(int id, String name, double salary, char roleTitle, String roleDescription) {
        super(id, name, salary);
        this._roleTitle = roleTitle;
        this._roleDescription = roleDescription;
    }

    public void setRoleTitle(char roleTitle) { this._roleTitle = roleTitle; }

    public char getRoleTitle() {return this._roleTitle;}

    public void setRoleDescription (String roleDescription) {this._roleDescription = roleDescription;}

    public String getRoleDescription() {return this._roleDescription;}

/*
@Override
public void setName(String name) {super.setName("Boss" + name);}
If put in these codes, what will happen is that these codes will override the parent (Manager). Instead of just "Looi" from Manager.java, will set Name as "Boss Looi".
*/
    @Override   //Java built in annotation, a meta-tag that happens in compile time
    public String toString() {
        return String.format("Role Title: %s, Role Description: %s", this._roleTitle, this._roleDescription);
    }
}
