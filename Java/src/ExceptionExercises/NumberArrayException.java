package ExceptionExercises;

public class NumberArrayException {

    public int[] _arr = new int[10];    //this array has 10 elements. Element index 0 to element index 9 only.

    public NumberArrayException() {
        try {
            this._arr[15] = 11; //there is no element 15 in this array of 10 elements only. We add in one value only to test. Rest of elements are blank.
            this._arr[9] = Integer.parseInt(15);
            System.out.println("Successfully added value to array.");
        }
        catch (NumberFormatException e) {
            System.out.println("NumberFormatException => " + e.getMessage());
        }
        catch (IndexOutOfBoundsException e) {
            System.out.println("IndexOut OfBoundsException => " + e.getMessage());
        }
        catch (Exception e)
        {
            System.out.println("Other exception error occurred.");
        }
    }
}
