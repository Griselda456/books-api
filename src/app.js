const express = require('express');
const booksRouter = require('./routes/books');
const logger = require('./middleware/logger');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/books', booksRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});