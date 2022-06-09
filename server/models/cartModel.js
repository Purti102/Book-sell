const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  book_id: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Price: {
    type: String,
    required: true,
  },
});

module.exports = cartSchema;
