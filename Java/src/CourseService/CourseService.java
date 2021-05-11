package CourseService;

import java.util.HashMap;

public class CourseService {

    HashMap<String, Student> _students = new HashMap<>();
    HashMap<String, Course> _courses = new HashMap<>();

    public CourseService() {
        this._students.put("120120", new Student( "Jean", "120120"));
        this._students.put("884545", new Student ("Bryan", "884545"));
        this._students.put("458787", new Student("Lina", "458787"));
        this._students.put("135464", new Student("David", "135464"));
        this._students.put("778979", new Student("Mavis", "778979"));

        this._courses.put("math_01", new Course("Mathematics 1","math_01", 8));
        this._courses.put("biol_01", new Course("Biology 1", "biol_01", 8));
        this._courses.put("phys_01", new Course("Physics 1", "phys_01", 8));
        this._courses.put("chem_01", new Course("Chemistry 1", "chem_01", 8));
        this._courses.put("sport_01", new Course("Sports 1","sport_01",8));
    }

    public void enrollStudent(String studentId, String courseId) {
        //TO DO implement so it adds the given course to the student
        Student student = this._students.get(studentId);
        Course course = this._courses.get(courseId);
        student.enroll(course);
    }

    public void unEnrolledStudent(String studentId, String courseId) {
        //TO DO implement so it adds the given course to the student
        Student student = this._students.get(studentId);
        Course course = this._courses.get(courseId);
        student.unEnroll(course);
    }

    public void displayStudentInformation(String studentId) {
        //TO DO implement so it shows the student name, and list of enrolled courses
        Student student = this._students.get(studentId);
        System.out.println(student);
    }

    public void displayCourseInformation (String courseId) {
        //TO DO implement so it shows the student name, and list of enrolled courses
        Course course = this._courses.get(courseId);
        System.out.println(course);
    }

    public void totalEnrolledCourse(String studentId) {
        //TO DO implements so it shows the total number of enrolled Courses for the student
        Student student = this._students.get(studentId);
        System.out.println("Total course enrolled: " + student.totalEnrollledCourses());
    }

    public void totalCreidt(String studentId) {
        //TO DO implement so it show the total number of course credits for the student
        int totalCredit = 0;
        Student student = this._students.get(studentId);

        for(int i=0; i < student.totalEnrollledCourses(); i++) {
            totalCredit += student.getEnrolledCourses().get(i)._credits;
        }
        System.out.println("Total Credits =" + totalCredit);
    }

}
