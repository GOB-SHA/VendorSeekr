const express = require("express");
const router = express.Router();


const vendorController = require("../controller/vendorController");
const restricted = require('../controller/restricted');

router.get("/", vendorController.getVendors, (req, res) => {
  console.log("res.locals.vendor: ", res.locals.vendors);
  res.status(200).json([res.locals.vendors]);
});

router.post('/likevendor', restricted, vendorController.likeVendor, (req, res) => {
  res.status(201);
})

module.exports = router;
