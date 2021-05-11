package ClassPractices.Composition;

public class Main {

    public static void main(String[] args) {

        Person person1 = new Person(.name: "Jean", .age: 18, .id: 123, .role: "JSFD Instructor", .salary: 1200);    //person1 is an Object
        System.out.println(person1);

        person1.setSalary(1500);
        System.out.println(person1);

    }
}
