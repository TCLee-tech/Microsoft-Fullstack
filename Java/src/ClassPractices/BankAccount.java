package ClassPractices;

//Practice 1 Create My Class - Exercise 3A and 3B

public class BankAccount {

    String _ownerName;
    double _balance;
    char _type;

    //overloading Constructors because have 2 Constructors with different parameters
    public BankAccount (String ownerName, double balance, char type) {
        this._ownerName = ownerName;
        this._balance = balance;
        this._type = type;
    }

    public BankAccount(String ownerName, char type) {
        this._ownerName = ownerName;
        this._type = type;
        this._balance = 100;    //set a default value of 100 for account minimum
    }

    //Methods are behavior of the class
    //want display of balance at ATM
    public double balance() {
        return this._balance;
    }

    //withdraw, which subtracts from the balance, return true if deduct successfully
    public boolean Withdraw(double amount) {

        if (this._balance >=100) {

            this._balance -= amount;
            return true;
        }
        //default return from the method
        return false;
    }

    public void Deposit(double amount) {
        this._balance +=amount;
    }

    //Method overloading - refer to reading list for more info. Over-loading with number of parameters here.
    public void Deposit(double amt1, double amt2) {

        this._balance +=amt1 + amt2;
    }

    public boolean Transfer(BankAccount acctTo, double transferAmount) {
        //account1 is that which calls the Transfer method
        //logic (1)deduct from account 1; (2) deposit to account 2; (3) check if I can deduct from account 1
        // this is known as inception method

        if (this.Withdraw(transferAmount)) {  //this refers to account1 - check if Withdraw method returns me a true or false

            //if Returns true, I can deposit to account 2
            acctTo.Deposit(transferAmount);
            return true;
        }
        return false;
    }    
    //String method should be placed at the end of the entire Class
    //toString method is a string representation of an object
    //returns String Object
    //is a built in Java method and I am overriding the built in method to print my stuff

    // https://www.tutorialspoint.com/override-the-tostring-method-in-a-java-class
    //https://www.educative.io/edpresso/how-to-use-the-tostring-in-java
    public String toString() {

        return String.format("Owner Name: %s, Account type: %c, Balance: $%.2f", this._ownerName, this._type, this._balance);
    }
}
