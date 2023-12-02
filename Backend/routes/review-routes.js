const express = require("express");
const router = express.Router();
const authorsController = require("../controllers/Review");
// const author = require("../controllers/author");

router.post("/", authorsController.addreview);

module.exports = router;
