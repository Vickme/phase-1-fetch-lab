function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch books. Status: ${response.status}`);
      }
      
      return response.json();
    })
    .then(data => {
      renderBooks(data);
    })
    .catch(error => {
      console.error('An error occurred:', error);

    });
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
