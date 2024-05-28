let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if(bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber,
            button: `<button onclick="deletebook()" id="delete-btn">Delete</button>`
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please full in all feilds correctly.');
    }
}

// show books function
function showbooks() {
    const booksDiv = books.map((book, index) => 
        `<h1>Book Number: ${index+1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name: </strong>${book.authorName}</p>
        <p><strong>Book Description: </strong>${book.bookDescription}</p>
        <p><strong>No of Pages: </strong>${book.pagesNumber}</p>
        ${book.button}`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}
// clear inputs function

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}
// delete book 
function deletebook() {
    for(let i=0; i<=books.length; i++) {
        books.splice(i, 1);
    }
    showbooks();
}
const deleteBtn = document.getElementById('delete-btn');
    deleteBtn.addEventListener('click', deleteBtn);