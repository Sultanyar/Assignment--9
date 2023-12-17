class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }
  
  var myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald");
  
  console.log("Title: " + myBook.title);
  console.log("Author: " + myBook.author);