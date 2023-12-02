const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  book: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("review", reviewSchema);

// books
