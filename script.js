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
}

function loop(){
    for(let i = 0; i < myLibrary.length; i++)
    {

    }
}
function displayPopup(){
    formcont.style.display = "flex";
}

let addbutton = document.querySelector(".addbook-button");
let formcont = document.querySelector(".formcontainer");
addbutton.addEventListener("click", displayPopup);

//create a large function that first takes the inputs of the form, then puts them in the make book function and appends the book to array, and the function loops over array.


