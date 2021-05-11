package ClassPractices;

//public class Main {
//
//    public static void main(String[] args) {
//
//        //initialise a Class Object called "myStudent"
//        MyClass myStudent = new MyClass();
//
//        //I can use the methods defined in the Class
//        int firstStudent = myStudent.getStudentId();  //this is Object.Method
//        String firstStudentName = myStudent.getStudentName();
//
//        System.out.println(String.format("My one and only student ID: %d, and name is %s", firstStudent, firstStudentName);
//    }

    //Shoes Class Example
    //example: I have a pair of shoes of size 6, white, sports, adddidi
    //Shoes mySportsShoes = new Shoes(Size 6, color:"White", type: "Sports", brand:"addidi");
    //Shoes myWorkingShoes = new Shoes(Size 7, color:"Black", type: "Flats", brand:"nikki");

    //print out all the values of the 2 types of shoes
    //getter method is to retrieve the value from the class object (mySportsShoes)
    //System.out.println(mySportsShoes.getType());
    //System.out.println(myWorkingShoes.getColor());

    //Practice - want to change the brand from niki to addidi for myWorking Shoes
    //setter method
    //myWorkingShoes.setBrand("addidi");
    //System.out.println(myWorkingShoes.getBrand());

    //Shoes myRunningShoes = new Shoes();
    //my RunningShoes.setSize(10);
    //my RunningShoes.setColor("red");
    //my RunningShoes.setType(Running");
    //my RunningShoes.setBrand("Addidi");
    //}

    //Practice 1 Create My Class - Exercise 3A and 3B  in BankAccount.java

    public class Main {

        public static void main(String[] args) {

            //...
            /* ... */

            //BankAccount - type "O", "S", "I"
            BankAccount account1 = new BankAccount(.ownerName: "Jean", .balance: 1200, .type: "O");
            BankAccount account2 = new BankAccount(.ownerName: "Jean", .type: "S");

            System.out.println(account1);
            System.out.println(account2);

            //Withdraw from account 1 $2000, and print "Error: Unable to withdraw from the account."
            System.out.println("Withdraw $2000 from account 1");    //return false
            boolean check = account1.Withdraw(.amount: 200);

            if (check) {
                            System.out.println(account1);
                        }
            else {
                    System.out.println("Error: Unable to withdraw from the account");
                }

            //Deposit $100 into account 2, calling the Deposit method
            double amtDeposit = 100;

            account2.Deposit(amtDeposit);
            System.out.println("Deposit: " + amtDeposit + account2);

            //Deposit $200 & $300 to the account separately
            account2.Deposit(200, 300);
            System.out.println("Deposit using over-loading method: " + account2);

            //Transfer $2000 from account 1 to account 2
            check = account1.Transfer(account2, .transferAmount:2000);

            if (check) {System.out.println(account1 + "\n" account2); }
            else {System.out.println("Error: Unable to do transfer, please top up your account."); }
        }
    }