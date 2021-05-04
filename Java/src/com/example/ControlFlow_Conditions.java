package com.example;

import

import java.util.Scanner;

public class ControlFlow_Conditions {

    public static void main(String[] args) {

        System.out.println("In ControlFlow_Conditions");

        int age = 24;

        if (age >= 18) {
            System.out.println("Customer is old enough to carry out purchases, you may proceed to checkout");
        }
        else if (age < 18) {
            System.out.println("Customer is too young to make purchases, try again");
        }

        //Exercise 2 Part 1
        int score = 78;

        if(score >= 0 && score < 50) {
            System.out.println("You have failed");
        } else if (score < 75) {
            System.out.println("You scored a C");
        } else if (score < 85) {
            System.out.println("Congrats! You score a B");
        } else if (score <= 100) {
            System.out.println("Congrats, you scored an A");
        } else {
            System.out.println("Please enter a valid score");
        }

        //Exercise 2 Part 2 - to get the integer score from user input (assuming user kei in number)
        System.out.print("Enter the grade: ");

        Scanner scan = new Scanner(System.in);
        int score = scan.nextInt();

        if(score >= 0 && score < 50) {
            System.out.println("You have failed");
        } else if (score < 75) {
            System.out.println("You scored a C");
        } else if (score < 85) {
            System.out.println("Congrats! You score a B");
        } else if (score <= 100) {
            System.out.println("Congrats, you scored an A");
        } else {
            System.out.println("Please enter a valid score");
        }

        //Practice 2 - Switch statement
        //Exercise 1
        int season = 0;

        switch(season) {
            case 1:
                System.out.println("Spring");
                break;
            case 2:
                System.out.println("Summer");
                break;
            case 1:
                System.out.println("Autumn");
                break;
            case 1:
                System.out.println("Winter");
                break;
            default:
                System.out.println("Out of bound");
                break;
        }

            //Exercise 2
        // javapoint.com/java-for-loop
            System.out.print("Enter the month: ");

            Scanner scan = new Scanner(System.in);  // Class to load new Object
            int input = scan.nextInt(); //method to insert properties

            switch(input) {
                case 1:
                    System.out.println("Month: January");
                    break;
                case 2:
                    System.out.println("Month: February");
                    break;
                case 3:
                    System.out.println("Month: March");
                    break;
                // etc etc etc until 12/December
                default:
                    System.out.println("Month: Out of Bound");
                    break;
            }


        }



    }
}
