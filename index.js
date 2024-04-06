
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json()) // Convert response to JSON
    .then((data) => renderBooks(data)) // Call renderBooks function with JSON data
    .catch((error) => console.error("Error fetching data:", error));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
function renderBooks(books) {
  // Selecting the main element from HTML
  var mainElement = document.querySelector('main');

  // Looping through each book and adding it to the main element
  books.forEach(function(book) {
    // Creating an h2 element for each book
    var bookTitle = document.createElement('h2');
    // Setting the text content of the h2 element to the book's name
    bookTitle.textContent = book.name;
    // Appending the h2 element to the main element
    mainElement.appendChild(bookTitle);
  });
}