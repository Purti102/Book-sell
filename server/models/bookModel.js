const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Base64image: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
});

module.exports = bookSchema;
