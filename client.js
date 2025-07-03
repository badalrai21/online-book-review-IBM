const axios = require('axios');
const baseUrl = 'http://localhost:5000';

async function getAllBooks() {
  try {
    const res = await axios.get(`${baseUrl}/books`);
    console.log("All Books:", res.data);
  } catch (err) {
    console.error("Error fetching all books:", err.response?.data || err.message);
  }
}

function getBookByISBN(isbn) {
  axios.get(`${baseUrl}/books/isbn/${isbn}`)
    .then(res => {
      console.log(`Book with ISBN ${isbn}:`, res.data);
    })
    .catch(err => {
      console.error("Error (ISBN):", err.response?.data || err.message);
    });
}

function getBooksByAuthor(author) {
  axios.get(`${baseUrl}/books/author/${author}`)
    .then(res => {
      console.log(`Books by author "${author}":`, res.data);
    })
    .catch(err => {
      console.error("Error (Author):", err.response?.data || err.message);
    });
}

function getBooksByTitle(title) {
  axios.get(`${baseUrl}/books/title/${title}`)
    .then(res => {
      console.log(`Books with title "${title}":`, res.data);
    })
    .catch(err => {
      console.error("Error (Title):", err.response?.data || err.message);
    });
}

getAllBooks();
getBookByISBN("9780007117116");
getBooksByAuthor("J.R.R. Tolkien");
getBooksByTitle("The Hobbit");
