const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook
} = require('../controllers/books');

// In-memory "database"
let books = [
  { id: '1', title: 'Node.js Essentials', author: 'John Doe', year: 2021 },
  { id: '2', title: 'Express in Action', author: 'Evan Hahn', year: 2016 }
];

// GET all books
router.get('/', getAllBooks(books));

// GET a specific book
router.get('/:id', getBookById(books));

// POST a new book
router.post('/', addBook(books));

// PUT update a book
router.put('/:id', updateBook(books));

// DELETE a book
router.delete('/:id', deleteBook(books));

module.exports = router;

