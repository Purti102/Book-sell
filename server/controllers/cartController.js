var mongoose = require("mongoose");
const cartSchema = require("../models/cartModel");

// cart schema
const cartDataCollection = mongoose.model("cart", cartSchema);

console.log("cart Controller is called");

//get cart size
// exports.getCartSize = async (req, res, next) => {
//   let userId = req.user.id;
//   cartDataCollection.findById(userId, function (err, user) {
//     if (err) console.log(err.message);
//     res.status(200).json({
//       user: user,
//     });
//   });
// };

//add cart
exports.addCart = async (req, res, next) => {
  let userId = req.user._id;
  let bookId = req.params._id;

  bookDataCollection
    .findById(bookId)
    .then((book) => {
      if (!book) {
        return res.status(400).json({
          message: "There is no book with the given id in our database.",
        });
      }

      cartDataCollection.findOne({ user: userId }).then((cart) => {
        let bookIds = [];

        for (let b of cart.books) {
          bookIds.push(b.toString());
        }

        if (bookIds.indexOf(bookId) !== -1) {
          return res.status(400).json({
            message: "Book is already in your cart",
          });
        }

        cart.books.push(bookId);
        cart.totalPrice += book.Price;
        cart.save();

        res.status(200).json({
          message: "Book added to cart!",
          data: cart,
        });
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        message: "Something went wrong, please try again.",
      });
    });
};
