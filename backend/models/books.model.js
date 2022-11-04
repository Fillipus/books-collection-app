const mongoose = require("mongoose");
// const { BOOK_GENRES } = require("@enums/book-genres");
const BooksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ISBN: {
    type: Number,
    required: true,
  },
  publisher: {
    name: String,
    required: true,
  },
  country: {
    name: String,
    required: true,
  },
  year_published: {
    type: Date,
    required: true,
  },
});
const books = mongoose.model("books", BooksSchema);
module.exports = BooksSchema;
