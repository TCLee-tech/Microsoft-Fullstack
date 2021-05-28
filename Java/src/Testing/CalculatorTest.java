package Testing;

import ExceptionExercises.Calculator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.RepeatedTest;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class CalculatorTest {

    //Testing of multiply method in Calculator Class

    private Calculator calculator;  //create an Object of your Calculator Class

    //@BeforeEach executed before each test. Used to prepare the test environment.
    //e.g. initialize the fields in the test class, config the environment etc
    @BeforeEach
    public void setUp() {calculator = new Calculator();}

    //create a test method for testing the multiply method in the Calculator
    //identify a method as a test method
    //<Name> that will be displayed by the test runner
    //@DisplayName In contrast to method names, the name can contain spaces to improve readability
    @Test
    @DisplayName("Simple multiplication should work")
    public void testMultiply()
    {
        assertEquals(20, calculator.multiply(4,5), "Regular multiplication should work.");
    }

    @RepeatedTest(5)
    @DisplayName("Ensure correct handling of multiply by zero")
    private void testMultiplyWithZero()
    {
        assertEquals(0, calculator.multiply(0,5),"Multiply with zero should be zero");
        assertEquals(0, calculator.multiply(5,0),"Multiply with zero should be zero");
    }

    @Test
    @DisplayName("Simple division should work");
    public void testDivision()
    {
        assertEquals(4, calculator.divide(20,5));
    }

    @Test
    @DisplayName("Ensure correct handling of division by zero")
    public void testDivisionWithZero()
    {
        //e.g. 0 / 5 = 0
        assertEquals(0,calculator.divide(0,5), "Division by zero should be zero");

        //e.g. 5 / 0 = error (ArithmeticException will be raised) - assertThrows
        assertThrows(ArithmeticException.class,() -> calculator.divide(5,0),"Error when you divide by zero"); //-> means throw

        //assertNull(course);
    }

}
