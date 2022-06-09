const express = require("express");
const cartController = require("../controllers/cartController");

const router = express.Router();

console.log("Cart Router is called");

router.post("/addcart", cartController.addcart);

module.exports = router;
