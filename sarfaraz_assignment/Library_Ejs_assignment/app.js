const express = require("express");
const fs = require("fs");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(express.json());

// Load books
const books = JSON.parse(fs.readFileSync("data.json"));

// =======================
//       HOME PAGE
// =======================
app.get("/", (req, res) => {
  res.render("index", { books });
});

// =======================
//    BOOK DETAIL PAGE
// =======================
app.get("/book/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) return res.send("Book Not Found");

  // ⭐ 3 Recommended Books (same genre)
  const recommendedBooks = books
    .filter(b => b.genre === book.genre && b.id !== id)
    .slice(0, 3);

  res.render("book", { book, recommendedBooks });
});

// =======================
//         APIs
// =======================

// All books
app.get("/api/books", (req, res) => {
  res.json(books);
});

// Single book
app.get("/api/books/:id", (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  res.json(book || { error: "Not found" });
});

// Search API
app.get("/api/search/:key", (req, res) => {
  const key = req.params.key.toLowerCase();
  const result = books.filter(b =>
    b.name.toLowerCase().includes(key) ||
    b.author.toLowerCase().includes(key) ||
    b.genre.toLowerCase().includes(key)
  );
  res.json(result);
});

// PORT
app.listen(3000, () => console.log("Server running at http://localhost:3000"));
