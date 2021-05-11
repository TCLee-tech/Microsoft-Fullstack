package Library;

import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main (String[] args) {

        Book b1 = new Book("Effective Java", "Mary Lim");
        Book b2 = new Book("Thinking of Java even when sleeping", "Peter Lim");
        Book b3 = new Book("Basic Java", "June Tan");
        Book b4 = new Book("3 days mastering Java", "Linda Tan");

        //create the array list to contain the books
        List<Book> books = new ArrayList<Book>();
        books.add(b1);
        books.add(b2);
        books.add(b3);
        books.add(b4);

        //create members
        Members m1 = new Members ("Jean", 18);
        Members m2 = new Members ("Bryan", 10);

        List<Members> members = new ArrayList<Members>();
        members.add(m1);
        members.add(m2);

        //Create Library class object and pass the list of books into the class object
        Library library = new Library("Ang Mo Kio", books, members);

        System.out.println("Library branch location: " + library.getBranch());

        List<Book> bks = library.getTotalBooksInLibrary();  //defining the book list "bks"
        for (Book bk : bks) {   // defining Book as bk  ///for every bk in your bks
            System.out.println(String.format("Title of the Book: %s, Author is: %s",
                    bk.getTitle(),
                    bk.getAuthor()));
        }

        List<Members> mms = library.getTotalMembersInLibrary();
            for (Members mm : mms) {
                System.out.println(String.format("Member's name: %s, age is: %d", mm.getName(), mm.getAge()));
            }
    }
}
