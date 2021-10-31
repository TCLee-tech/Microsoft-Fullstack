package CourseService;

public class Main {

    public static void main(String[] args) {
        //Create the Student and Course HashMaps
        CourseService courseService = new CourseService();

        //Referring to the key of the HashMaps
        String courseId = "math_01", courseId2 = "art_01";
        String studentId = "778979";

        //Display the information of the student and the courses
        courseService.displayCourseInformation(courseId); //pass in key to the method
        courseService.displayCourseInformation(courseId2);
        courseService.displayStudentInformation(studentId);

        //To enroll a student to 2 courses
        courseService.enrollStudent(studentId,courseId);
        courseService.enrollStudent(studentId,courseId2);
        courseService.displayStudentInformation(studentId);

        //To show the total enrolled courses and total credits for a student
        courseService.totalEnrolledCourse((studentId)); //print 2
        courseService.totalCredit(studentId);   //print 16

        //To un-enroll a course from the existing student
        courseService.unEnrolledStudent(studentId, courseId);
        courseService.displayStudentInformation(studentId);

        //Added
        Course course = courseService.findCourse("math_01");

        if (course != null)
        {
            System.out.println("Course Found!");
            System.out.println(course);
        }
        else
        {
            System.out.println("Unable to find course");
        }
    }
}
