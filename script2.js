
function Book(title, author, pages, read){
    if(!new.target){
        console.log("must use new keyword to call constructor")
    }
    this.id = crypto.randomUUID()
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}
//--
const myLibrary = [];
let bookcount = 0;

function addBooktoArray(title, author, pages, read){
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    bookcount++;
    
}
//pop up on off
let formcont = document.querySelector(".formcontainer");
function displayPopup(){
    formcont.style.display = "flex";
}
function popThepopUp(){
    formcont.style.display = "none";
}

//when form submit, addBooktoArray function called.

//getting variables
let addbutton = document.querySelector(".addbook-button");

addbutton.addEventListener("click", displayPopup);

let submitbutton = document.querySelector("#submitform");
submitbutton.addEventListener("click", function(event){
    

    let formtitle = document.querySelector("#booktitle");
    let formauthor = document.querySelector("#authorname");
    let formpages = document.querySelector("#pagecount");
    let formread = document.querySelector("#read");
    addBooktoArray(formtitle.value, formauthor.value, formpages.value, formread.value);
    emptyBookDiv();
    popThepopUp();
    //display from library array by looping
    loopOverArray();
    event.preventDefault();
})

//empty div function
//get all children

function emptyBookDiv(){
    let bookconts = document.getElementsByClassName("bookcontainer");
    
    while(bookconts.length > 0){
        bookconts[0].remove();
    }
   
}

//loop to display
function loopOverArray(){
    let grandparent = document.querySelector(".book-div");
    for(let i = 0; i < myLibrary.length; i++)
    {
        let parent = document.createElement('div');
        parent.className = "bookcontainer";
        parent.dataset.indexNumber = `${i}`;
        grandparent.appendChild(parent);

        let buttondiv = document.createElement('div');
        buttondiv.className ="deletebuttondiv";
        parent.appendChild(buttondiv);

        let delbutton = document.createElement('button');
        delbutton.className = "deletebutton";
        delbutton.textContent = "X";
        buttondiv.appendChild(delbutton);
        

        let titlechild = document.createElement('p');
        titlechild.className = "bookname";
        titlechild.textContent = "Title: "+ myLibrary[i].title;
        parent.appendChild(titlechild);

        let authorchild = document.createElement('p');
        authorchild.className = "author";
        authorchild.textContent = "Author: " + myLibrary[i].author;
        parent.appendChild(authorchild);

        let pageschild = document.createElement('p');
        pageschild.className = "pages";
        pageschild.textContent = "Pages: " + myLibrary[i].pages;
        parent.appendChild(pageschild);

        let readchild = document.createElement('p');
        readchild.className = "read-status";
        readchild.textContent = myLibrary[i].read;
        parent.appendChild(readchild);

        let statusbutton = document.createElement('button');
        statusbutton.className = "status";
        statusbutton.textContent = "Change Read status";
        parent.appendChild(statusbutton);

        statusbutton.addEventListener("click", function(){
            
            if(readchild.textContent === "Not read")
            {
                readchild.textContent = "read";
            }
            else{
                readchild.textContent = "Not read";
            }
        })

        delbutton.addEventListener("click", function(){
            
            myLibrary.splice(i, 1);
            emptyBookDiv();
            loopOverArray();
        })
    }
}

// if(myLibrary.length > 0){
//     console.log("greater than 0")
//     //new to implement deletetion functionality
    
// }

let bookdiv = document.querySelector(".book-div");




