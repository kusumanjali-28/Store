const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const booksController = require("../controllers/books-controller");
// const author = require("../controllers/author");

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
// router.post("/", author.addauthor);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;
