package com.example;

import java.util.Scanner;

public class ControlFlow_Challenges {

    //getInput method - keep on reusing method to get input from user
    public static int getInput(String msg) {

        boolean exit = false;
        // System.out.print(msg);
        Scanner scan = new Scanner(System.in);  //create a Scanner object so that I can use the Scanner method
        //int input = scan.nextInt();

        //check if the user input an integer (number)
        int input = 0;

        //do while loop
        do {
            System.out.print(msg);

            //hasNextInt() is a method from Scanner Class
                if (!scan.hasNextInt()) //method provided by Scanner to check if the input is an integer (number) or not
                {
                    System.out.println("Error. Please enter a number"); //print if not integer
                    scan.next();    //next() is a method from Scanner Class (Package) to get next input
                }
                else {
                    input = scan.nextInt(); //nextInt() is a method from Scanner Class (package) to capture the next input
                    exit = true;
                }
            }
        while (!exit);  //keep looping when NOT exit is false
        //int input = scan.nextInt();

        return input;   // the method is returning a value to the one who calls the method
    }   // end of getInput

    //main method inside the ControlFlow_Challenge
    public static void getCommission() {

        //Part 1 - Commission Calculator
        //assume user key in number

        double commission = 0;
        //int input gets the return value from the getInput method
        int input = getInput("Enter the sales: ");

        if (input >= 10000) {
            commission = input * 0.3;
        }
        else if (input >= 5000) {
            commission = input * 0.2;
        }
        else if (input >= 1000) {
            commission = input * 0.1;
        }
        else {
            commission = 0;
        }

        System.out.println(String.format("Sales Figure $%d, with commission $%.2r", input, commission));

    }

    //Part 2 - movie Discounts
    public static void getMovieDiscount() {

        System.out.println("Please enter your age");

        Scanner scan = new Scanner(System.in);
        int age = scan.nextInt();

        double price = 7;
        if (age > 60)
        {
            price = price * 0.45;
        }
        else if (age < 5)
        {
            price = price * 0.6;
        }

        System.out.println(String.format("Your ticket price is $%d",price));

        //30% discount for more than 1 ticket
        System.out.println("How many tickets do you want to buy?");
        Scanner scan = new Scanner(System.in);
        int ticketNum = scan.nextInt();

        double newPrice = 7;

        if (ticketNum >= 2) {
            newPrice = newPrice * 0.7;
        }
        double toPay = newPrice * ticketNum;

        System.out.println(String.format("Your ticket price is $%d",newPrice));

        //Jean's answer
        public static void getMovieDiscount() {
            double price = 0;
            final int perTix = 7;
            int tixNum = 0;
            String startMsg;
            startMsg = "Please enter your age: ";

            //Call Method
            var input = getInput(startMsg);

            if (input >60) {
                price = perTix - (perTix * 0.55);
           }
            else if (input <5) {
                price = perTix - perTix * 0.6);
            }
            else {
                startMsg = "Please enter the number of tickets";
                tixNum = getInput(startMsg);

                if (tixNum >= 2) {
                    price = tixNum * (perTix - (perTix * 0.3));
                }
                else {
                    price = perTix; //this will always be 1
                }
            }
            System.out.println("Your age is " + input + ", and your ticket price is $" + String.format("%.2f", price));

            getMovieDiscount();
        }

    }   //end of Main


}   // End of class
