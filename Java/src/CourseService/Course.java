package CourseService;

public class Course {

    String _name;
    String _id;
    int _credits;

    public Course (String name, String id, int credits) {
        this._name = name;
        this._id = id;
        this._credits = credits;
    }

    public int getCredit() {return this._credits; }

    public String toString() {

        //return "Course(" + "name='" + this._name + '\'' + ", id=' " + this._id + '\'' + ", credits=" + this._credits + '}';
        return String.format("Name is %s, Id is %s, and Credits is %d", this._name, this._id, this._credits);
    }
}
