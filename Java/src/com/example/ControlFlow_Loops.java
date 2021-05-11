package com.example;

public class ControlFlow_Loops {

    public static void main(String[] args)

        //Practice  3 - Exercise 1
        int i = 1;

        while (i <= 10) {
            System.out.println(i);
            i++;
        }

        //Practice 3 - Exercise 2
        int counter = 1;

        while (counter <=15) {
            System.out.println("Name");
            counter++;
        }

        //Practice 3 - Exercise 3
        int count = 1;
        do
            {
                System.out.println("Name");
                i++;
            }   while (i < 10);

        //Practice 3 - Exercise 4
        for (int i=1; i<=10, i++)
            {
                System.out.println("Name");
            }

        //Practice 3 - Exercise 5
        for (int i=1; i<=6 && i>=8 && i<=10; i++)
        {
            System.out.println("Name");
        }
        //alt
        for (int n = 1; n < 11; n++)
        {
            if (n != 7) {
                System.out.println(n);
            }
        }



    }
}
