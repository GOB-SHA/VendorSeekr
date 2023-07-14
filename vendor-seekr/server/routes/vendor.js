const express = require("express");
const router = express.Router();


const vendorController = require("../controller/vendorController");

router.get("/", vendorController.getVendors, (req, res) => {
  console.log("res.locals.vendor: ", res.locals.vendors);
  res.status(200).json([res.locals.vendors]);
});
module.exports = router;
