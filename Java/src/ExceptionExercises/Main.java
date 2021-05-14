package ExceptionExercises;

public class Main {
    public static void main(String[] args) {

    Calculator calculator = new Calculator();

    try {
        int sum = calculator.multiply(2, 3);
        System.out.println("multiply: " + sum);

        System.out.println("divide: " + calculator.divide(10,2));

        System.out.println("divide: " + calculator.divide(0,5));

        //error in line below - once program encounters the error, it will go into the exception handling (catch)
        //the program will not continue executing code after error
        System.out.println("divide: " + calculator.divide(5,0));

        System.out.println("add: " + calculator.add(5,5));

        System.out.println("subtract: " + calculator.subtract(20,5));
    }
    catch (ArithmeticException e)
    {
        //getMessage() is a method provided by Java Exception package to just print out the custom messages that you want your user to see
        System.out.println(e.getMessage());
    }
    catch (Exception e)
    {
        //If there are any other errors that you did not catch, all will fall into this exception
        System.out.println("An unknown error occurred. Please try again.");
    }
    finally
    {
        //the below codes are the codes after the error calculation. Other example: Close database connection, refresh webpage
        //need to add those codes here so that they continue being run
        System.out.println("add: " + calculator.add(5,5));

        System.out.println("subtract: " + calculator.subtract(20,5));
    }
}
