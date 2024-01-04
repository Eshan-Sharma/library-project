let myLibrary = []; //state
let globalId = 0; //global counter

function Book(title, author, pages, read, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function addBookToLibrary(){
    if(document.getElementById("index").value!=""){
        let id = parseInt(document.getElementById("index").value);
        const updateBook = myLibrary.find(book=>book.id==id);
        updateBook.title = document.getElementById("title").value;
        updateBook.author = document.getElementById("author").value;
        updateBook.pages = parseInt(document.getElementById("pages").value);
        updateBook.read = document.getElementById("yes").checked==true ? true : false;
        document.getElementById("index").value = "";
    }else{
        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let pages = parseInt(document.getElementById("pages").value);
        let read = document.getElementById("yes").checked==true ? true : false;
    
        const book = new Book(title, author, pages, read, globalId++);
        myLibrary.push(book);
    }
    // console.log(`Library state: ${myLibrary}`);
    addToDom(myLibrary);
}   
function edit(id){
    //Get data from the array and enter it to input fields
    myLibrary.forEach(element => {
        if(element.id==id){
            document.getElementById("title").value = element.title;
            document.getElementById("author").value = element.author;
            document.getElementById("pages").value = element.pages+'';
            document.getElementById("index").value = element.id;
            console.log(element.read);
            if(element.read){
                document.getElementById("yes").checked = true;
            }else{
                document.getElementById("no").checked = true;
            }
            alert("Value added to the input, edit and enter!\nTemporarily removed from library");
            // deleteBook(id); //Not required
        }
    });
}

function deleteBook(id){
    console.log("here")
    myLibrary.forEach((element,index) => {
        console.log(element)
        if(element.id==id){
            myLibrary.splice(index,1);
        }
    });
    addToDom(myLibrary)
}

function editRead(id){
    myLibrary.forEach(element => {
        if(element.id==id){
            if(element.read==true){
                element.read = false;
            }else{
                element.read = true;
            }
            // console.log(`Library state: ${myLibrary}`);
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