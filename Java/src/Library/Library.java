package Library;

import java.util.List;

public class Library {
    //Library has a Book Class and Member Class - a "composition"
    //Library own attribute
    String _branch;

    //Reference to a list of books
    List _books;

    //create the list of members
    List _members;

    //pass in a new parameter for the member list
    public Library(String branch, List<Book> books, List<Members> members) {

        this._branch = branch;
        this._books = books;

        ///reference the member list in the Library Class
        this._members = members;
    }

    public String getBranch() {

        return this._branch;
    }

    public List<Book> getTotalBooksInLibrary() {return this._books; }

    //create a method to getTotalMembersInLibrary
    public List<Members> getTotalMembersInLibrary() { return this._members; }
}
