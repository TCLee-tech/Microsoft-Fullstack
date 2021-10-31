package CourseService;

import java.util.ArrayList;
import java.util.List;

public class Student {
    String _name;
    String _id;
    ArrayList<Course> _enrolledCourses = new ArrayList<Course>();


public Student (String name, String id) {
    this._name = name;
    this._id = id;
}

    public void setName(String name) {this._name = name; }

public String getName() {return this._name; }

public String getId() {return this._id; }

public void setId(String id) {this._id = id; }

public void enroll(Course course) {this._enrolledCourses.add(course); }

public void unEnroll(Course course) {this._enrolledCourses.remove((course)); }

public int totalEnrollledCourses() {
    return this._enrolledCourses.size();
}

public List<Course> getEnrolledCourses() {return this._enrolledCourses;}

//toString is a keyword
@Override
    public String toString() {
    //return "Student{" + "name=' " + this._name + '\'' + ", id='" + this._id + '\'' + ", enrolledCourses=" + this._enrolledCourses + '}';

    return String.format("Name: %s ID: %s, EnrolledCourses: ", this._name, this._id) + this._enrolledCourses;
    }}