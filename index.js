const express = require('express');
const jwt = require('jsonwebtoken');
const books = require('./books.js');
const { users, isValid, authenticateUser } = require('./users.js');

const app = express();
app.use(express.json());

const PORT = 5000;
const SECRET = "fingerprint_customer";

// Home route
app.get("/", (req, res) => {
  res.send("📚 Welcome to the Online Book Review API");
});

// ---------------- GENERAL USER ROUTES ----------------

// Task 1: Get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Task 2: Get book by ISBN
app.get('/books/isbn/:isbn', (req, res) => {
  const book = books[req.params.isbn];
  return book ? res.json(book) : res.status(404).json({ error: "Book not found" });
});

// Task 3: Get books by author
app.get('/books/author/:author', (req, res) => {
  const results = Object.values(books).filter(b => b.author === req.params.author);
  res.json(results);
});

// Task 4: Get books by title
app.get('/books/title/:title', (req, res) => {
  const results = Object.values(books).filter(b => b.title === req.params.title);
  res.json(results);
});

// Task 5: Get book reviews
app.get('/books/review/:isbn', (req, res) => {
  const book = books[req.params.isbn];
  return book ? res.json(book.reviews) : res.status(404).json({ error: "Book not found" });
});

// ---------------- AUTH ----------------

// Task 6: Register new user
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: "Missing credentials" });
  if (!isValid(username)) return res.status(409).json({ error: "User already exists" });

  users.push({ username, password });
  res.json({ message: "User registered successfully" });
});

// Task 7: Login and return JWT token
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!authenticateUser(username, password)) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
  res.json({ message: "Login successful", token });
});

// ---------------- PROTECTED ROUTES ----------------

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(403).json({ error: "Token required" });

  const token = authHeader.split(' ')[1]; // Remove 'Bearer'
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid token" });

    req.user = decoded.username;
    next();
  });
}

// Task 8: Add or modify review
app.put('/auth/review/:isbn', authenticate, (req, res) => {
  const { isbn } = req.params;
  const { review } = req.body;

  if (!books[isbn]) return res.status(404).json({ error: "Book not found" });
  books[isbn].reviews[req.user] = review;

  res.json({ message: "Review added/updated" });
});

// Task 9: Delete own review
app.delete('/auth/review/:isbn', authenticate, (req, res) => {
  const { isbn } = req.params;

  if (!books[isbn]) return res.status(404).json({ error: "Book not found" });

  if (books[isbn].reviews[req.user]) {
    delete books[isbn].reviews[req.user];
    return res.json({ message: "Review deleted" });
  }

  res.status(404).json({ error: "Review not found" });
});

// ---------------- START SERVER ----------------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
