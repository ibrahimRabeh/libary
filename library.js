const mainItem = document.getElementById("main");
const bookTitle = document.getElementById("BookTitle");
const bookAuthor = document.getElementById("BookAuthor");
const bookgenre = document.getElementById("BookGenre");
const deleteBookBtn = document.querySelector("delete-book-btn");
const sidebar = document.getElementById("sidebar");
const bookItem = document.createElement("div");
const addBookBtn = document.createElement("button");
addBookBtn.innerHTML = "Add Book";
addBookBtn.classList.add("add-book-btn");
sidebar.appendChild(addBookBtn);
let index = 0;

const myLibrary = [];

function addBookToLibrary() {
    if (bookTitle.value === "" || bookAuthor.value === "" || bookgenre.value === "") {
        alert("Please fill out all fields");
        return;
    }
    else if (myLibrary.some((book) => book.title === bookTitle.value)) {
        alert("Book already exists");
        return;
    }
const book = new Book(bookTitle.value, bookAuthor.value, bookgenre.value);

  myLibrary.push(book);
  const bookItem = document.createElement("div");
    bookItem.classList.add("item");
    bookItem.classList.add("animation");
    bookItem.innerHTML = `
            <div class="book-item animation">
                <div class="book-item__title animation">${book.title}</div>
                <div class="book-item__author animation">${book.author}</div>
                <div class="book-item__genre" animation>${book.genre}</div>
            </div>
            <label class="switch">
            <div>Read</div>
                <input type="checkbox" id="checkbox${index}">
                <span class="slider round"></span>
            </label>
            
        `+`<button class="delete-book-btn">Delete Book</button>`;
        // append a delete button to each book item

        bookItem.querySelector(".delete-book-btn").addEventListener("click", (e) => {
      const bookItem = e.target.parentElement;
      const bookTitle = bookItem.querySelector(".book-item__title").textContent;
      const bookIndex = myLibrary.findIndex((book) => book.title === bookTitle);
      myLibrary.splice(bookIndex, 1);
      displayBooks();
      bookItem.remove();
    });
    mainItem.appendChild(bookItem);
    bookTitle.value = "";
    bookAuthor.value = "";
    bookgenre.value = "";
}

function Book(title, author, genre) {
  this.title = title;
  this.author = author;
  this.genre = genre;
}
addBookBtn.addEventListener("click", addBookToLibrary);

function displayBooks() {
  mainItem.innerHTML = "";
  myLibrary.forEach((book) => {     
    const bookItem = document.createElement("div");
    bookItem.classList.add("animation");
    bookItem.classList.add("item");
    bookItem.innerHTML = `
            <div class="book-item animation">
                <div class="book-item__title animation">${book.title}</div>
                <div class="book-item__author animation">${book.author}</div>
                <div class="book-item__genre" animation>${book.genre}</div>
                <label class="switch">
            <div>Read</div>
                <input type="checkbox" id="checkbox${index}">
                <span class="slider round"></span>
            </label>
            </div>
            
        `+`<button class="delete-book-btn">Delete Book</button>`;
        // append a delete button to each book item

        bookItem.querySelector(".delete-book-btn").addEventListener("click", (e) => {
      const bookItem = e.target.parentElement;
      const bookTitle = bookItem.querySelector(".book-item__title").textContent;
      const bookIndex = myLibrary.findIndex((book) => book.title === bookTitle);
      myLibrary.splice(bookIndex, 1);
      bookItem.classList.add("animation");
      bookItem.remove();
      displayBooks();
    });
    bookItem.classList.remove("animation");
    mainItem.appendChild(bookItem);
    
    

        
  });
}
