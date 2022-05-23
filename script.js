const booksContainer = document.querySelector('.books-container');
const removeBook = document.querySelector('#remove');
const bookItem = document.querySelector('.book');


function bookCreator({title, author}) {
    return `
    <div class="book">
        <p class="title">${title}</p>
        <p class="author">${author}</p>
        <button type="submit" id='remove'>Remove</button>
        <div class='line'></div>
    </div>
    `;
}

let books = [];

let bookHtml = books.map((book) => bookCreator(book)).join('');
booksContainer.innerHTML = bookHtml;

//  add items to array

let addTitle = document.querySelector('#add-title');
let addAuthor = document.querySelector('#add-author');

let titleValue = addTitle.value;
let authorValue = addAuthor.value;

let addBtn = document.querySelector('.addBtn');



function addBook () {
    let book = {
        title : titleValue ,
        author : authorValue ,
    };
    addBtn.addEventListener('click', () => {
        books.push(book);
        bookHtml = books.map((book) => bookCreator(book)).join('');
        booksContainer.innerHTML = bookHtml;
        console.log(books);
        return book = {
            title : titleValue ,
            author : authorValue ,
        };
        });
};
addBook();