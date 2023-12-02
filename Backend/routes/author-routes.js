const express = require("express");
const router = express.Router();
const authorsController = require("../controllers/author");
// const author = require("../controllers/author");

router.post("/", authorsController.addauthor);

module.exports = router;
