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

    const book = new Book(title, author, pages, read, globalId++);
    myLibrary.push(book);

    console.log(myLibrary);
    addToDom(myLibrary);
}   

function deleteBook(id){
    myLibrary.forEach(element => {
        if(element.id==id){
            myLibrary.splice(0,id);
            addToDom(myLibrary)
        }
    });
}

function editRead(id){
    myLibrary.forEach(element => {
        if(element.id==id){
            if(element.read==true){
                element.read = false;
            }else{
                element.read = true;
            }
            addToDom(myLibrary);
        }
    });
}

function addToDom(myLibrary){
    document.getElementById("table-body").innerHTML = "";
    myLibrary.forEach(element => {
        
        let child = document.createElement("tr");
        child.innerHTML = `
            <td>${element.title}</td>
            <td>${element.author}</td>
            <td>${element.pages}</td>
            <td>${element.read==true?"Yes":"No"}</td>
            <td><button onClick="editRead(${element.id})">Change Read status</button></td>
            <td><button onClick="edit(${element.id})">Edit</button></td> 
            <td><button onClick="deleteBook(${element.id})">Delete</button></td>
        `
        document.getElementById("table-body").appendChild(child);
    });
}