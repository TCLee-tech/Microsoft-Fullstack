package com.example;

import java.util.Scanner;

public class VariablesPractice {

    public static void main(String[] args) {

       //relational operators -> primitive data type conpare of value (e.g. int, float, boolean)
       int x=5, y=6, z=5;

       System.out.println(x == y);   //print false
        System.out.print(x != y);   //print true
        System.out.println(x < y);   //print true

        System.out.println(x == z);  //print true

        String a = "F";
        String b = "M";
        String c = "E";

        System.out.println(a==b);   //print
        System.out.println(a == c);  //print

        boolean t = true, f=false;
        System.out.println(t != f);  //print true

        //Relational Operators -> Non-primitive data type compare in value (e.g. String, Array)
        String myString1 = "Hello";
        String myString2 = "Hello World";
        String myString3 = "Hello";

        System.out.println(myString1 == myString2); //print false
        System.out.println(myString1 == myString3); //print False
        System.out.println("hello" == "hello"); //print

        //.equal and compareTo methods
        System.out.println ("equal example: " + myString1.equals(myString2)); //print false
        System.out.println ("compareTo example:" + myString1.compareTo(myString2));  //print -6

        //Get inputs from user in console
        Scanner mObj = new Scanner(System.in);

        System.out.print("Enter Username: ");

        String userName = mObj.nextLine();

        //Practice 2: Operators

        String matchingWord = "java";
        System.out.print("Enter a word: ");

        Scanner scan = new Scanner(System.in);
        String input = scan.nextLine();

        if (matchingWord.compareTo(input) == 0)
        {
            System.out.println("Matched");
        }
        else
        {
            System.out.println("Not Matched");
        }



    }
}