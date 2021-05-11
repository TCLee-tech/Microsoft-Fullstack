package CourseService;

public class Main {

    public static void main(String[] args) {
        //Create the Student and Course HashMaps
        CourseService courseService = new CourseService();

        //Referring to the key of the HashMaps
        String courseId1 = "math_01", courseId2 = "art_01";
        String studentId = "778979";

        //Display the information of the student and the courses
        courseService.displayStudentInformation(studentId); //pass in key to the method
        courseService.displayStudentInformation(courseId1);
        courseService.displayStudentInformation(courseId2);

        //To enroll a student to 2 courses
        courseService.enrollStudent(studentId,courseId1);
        courseService.enrollStudent(studentId,courseId2);
        courseService.displayStudentInformation(studentId);

        //To show the total enrolled courses and total credits for a student
        courseService.totalEnrolledCourse((studentId)); //print 2
        courseService.totalCreidt(studentId);   //print 16

        //To un-enrolll a course from the existing student
        courseService.unEnrolledStudent(studentId, courseId1);
        courseService.displayStudentInformation(studentId);
    }
}
