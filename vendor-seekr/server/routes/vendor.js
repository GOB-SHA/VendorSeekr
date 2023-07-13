const express = require("express");
const router = express.Router();

const vendorController = require("../controller/vendorController");

router.get("/", vendorController.getVendors, (req, res) => {
  console.log("getMarket route firing");
  res.status(200).json(res.locals.markets);
});
module.exports = router;
