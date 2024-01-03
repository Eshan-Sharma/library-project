let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = parseInt(document.getElementById("pages").value);
    let read = document.getElementById("yes").checked==true ? true : false;

    const book = new Book(title, author, pages, read);
    myLibrary.push(book);

    console.log(myLibrary);
    addToDom(myLibrary);
}   


