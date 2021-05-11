package Library;

public class Book {

    String _title;
    String _author;

    public Book (String title, String author) {

        this._title = title;
        this._author = author;
    }

    public String getTitle() { return this._title; }
    public String getAuthor() { return this._author; }
}
