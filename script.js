let myLibrary = [];
let globalId = 1;

function Book(title, author, pages, read, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function addBookToLibrary(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = parseInt(document.getElementById("pages").value);
    let read = document.getElementById("yes").checked==true ? true : false;

    const book = new Book(title, author, pages, read, globalId);
    myLibrary.push(book);

    console.log(myLibrary);
    addToDom(myLibrary);
}   

function deleteBook(){

}

function addToDom(myLibrary){
    myLibrary.forEach(element => {
        let editRead = document.createElement("button");
        editRead.setAttribute(`onclick`,`editRead(${element.id})`);
        let deleteBook = document.createElement("button");
        deleteBook.setAttribute(`onclick`,`deleteBook(${element.id})`);

        let child = document.createElement("tr");
        child.innerHTML = `
            <td>${element.title}</td>
            <td>${element.author}</td>
            <td>${element.pages}</td>
            <td>${element.read==true?"Yes":"No"}</td>
            <td>${editRead}</td>
            <td>${deleteBook}</td>
        `
        document.getElementById("table-body").appendChild(child);
    });
}