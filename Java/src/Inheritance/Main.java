package Inheritance;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {

        ArrayList<Manager> mgr = new ArrayList<Manager>();
        mgr.add(new Manager(111,"Jean Looi", 1200, 1, "Junior Project Manager"));
        mgr.add(new Manager(222, "Bryan Chew", 1800, 2, "Project Manager"));
        mgr.add(new Manager(333, "Peter Lim",2200, 3, "Senior Project Manager"));
        System.out.println(mgr);

        //print the name of the first index of the ArrayList
        System.out.println(mgr.get(0).getName());
        System.out.println(mgr.get(0).getRoleDescription());

        ArrayList<Specialist> specials = new ArrayList<Specialist>();
        specials.add(new Specialist(111, "Summer Lim", 1200, 'E',"Junior FSD"));
        specials.add(new Specialist(222,"Winter Tan",1800, 'T', "FSD"));
        specials.add(new Specialist(333, "Spring Chua", 2200, 'A',"Senior FSD"));
        System.out.println(specials);

        //Access Modifier Example
        System.out.println(mgr.get(0).getRoleLevel());
    }
}
