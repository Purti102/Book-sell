const mongoose = require("mongoose");
const OBJECT_ID = mongoose.Schema.Types.ObjectId;

const cartSchema = new mongoose.Schema({
  user: {
    type: OBJECT_ID,
    ref: "users",
  },
  Name: {
    type: String,
    ref: "book",
  },
  Price: {
    type: String,
    ref: "book",
  },
});

module.exports = cartSchema;
