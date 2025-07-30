function Book(title, author, pages, read){
    if(!new.target){
        console.log("must use new keyword to call constructor")
    }
    this.id = crypto.randomUUID()
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${title} by ${author}, ${pages}, ${read} yet.`;
    }
}

const myLibrary = []

function addBooktoLibrary(title, author, pages, read){
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    console.log("pushed")
}

const bookdiv = document.querySelector(".book-div");
function loop(num){
    let buttondiv = document.createElement('div');
    buttondiv.className = "deletebuttondiv";

    let deletebutton = document.createElement('button');
    deletebutton.className = "deletebutton";
    deletebutton.textContent = "X";
    
        let newcontainer = document.createElement("div");
        newcontainer.className = "bookcontainer";
        bookdiv.appendChild(newcontainer);
        newcontainer.dataset.indexNumber = `${num+1}`;
        let newtitle = document.createElement('p');
        newtitle.className = "bookname";
        newtitle.textContent = "Title: " + myLibrary[num].title;
        
        let newauthor = document.createElement('p');
        newauthor.className = "author";
        newauthor.textContent = `Author: ${myLibrary[num].author}`;

        let newpage = document.createElement('p');
        newpage.className = "pages";
        newpage.textContent = `Pages: ${myLibrary[num].pages}`;

        let readd = document.createElement('p');
        readd.className = "read-status";
        readd.textContent = `Read: ${myLibrary[num].read}`;
        buttondiv.appendChild(deletebutton);
        newcontainer.appendChild(buttondiv);
        newcontainer.appendChild(newtitle);
        newcontainer.appendChild(newauthor);
        newcontainer.appendChild(newpage);
        newcontainer.appendChild(readd);
    
     
    
}
function displayPopup(){
    formcont.style.display = "flex";
}
function popThepopUp(){
    formcont.style.display = "none";
}

let addbutton = document.querySelector(".addbook-button");
let formcont = document.querySelector(".formcontainer");
addbutton.addEventListener("click", displayPopup);

let submitbutton = document.querySelector("#submitform");
let title = document.querySelector("#booktitle");
let author = document.querySelector("#authorname");
let pages = document.querySelector("#pagecount");
let read = document.querySelector("#read");
let i = 0;
submitbutton.addEventListener("click", function(event){
    addBooktoLibrary(title.value, author.value, pages.value, read.value);
    
    loop(i);
    i++;
    popThepopUp();
    event.preventDefault()
    
})

//create a large function that first takes the inputs of the form, then puts them in the make book function and appends the book to array, and the function loops over array.


