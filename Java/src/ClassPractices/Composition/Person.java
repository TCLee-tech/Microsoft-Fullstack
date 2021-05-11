package ClassPractices.Composition;

public class Person {

    //Composition: Person has a Job

    String _name;   //underscore for local attribute
    int _age;

    //Job refers to the Job Class. job refers to the object that instantiate the Job Class
    Job _job;

    public Person(String name, int age, int id, String role, double salary) {

        this._name = name;
        this._age = age;

        this._job = new Job();  //this person "has a" Job. setting this _job instance to Job Class
        this._job.setId(id);
        this._job.setRole(role);
        this._job.setSalary(salary);
    }

    //getter and setter
    public String getName() {return this._name; }
    public void setName(String name) {this._name = name; }

    public int getAge() {return this._age; }
    public void setAge(int age) {this._age = age; }

    public void setSalary(double salary) {this._job.setSalary(salary); }

    public String toString()
    {
        return String.format("Hello, my name is %s, and I am %d years old. I just found a job as a %s, and my salary is $%.2f", this._name, this._age, this._job.getRole(), this._job.getSalary());
    }

}
