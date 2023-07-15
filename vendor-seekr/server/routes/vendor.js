const express = require("express");
const router = express.Router();

const vendorController = require("../controller/vendorController");
const restricted = require("../controller/restricted");
const userController = require("../controller/userController");

router.get("/", vendorController.getVendors, (req, res) => {
  console.log("res.locals.vendor: ", res.locals.vendors);
  res.status(200).json([res.locals.vendors]);
});

router.post(
  "/likevendor",
  // userController.verifyUser,
  // restricted,
  vendorController.likeVendor,
  (req, res) => {
    res.status(200).json({ message: "liked!" });
  }
);

router.get("/likevendor", vendorController.getLikedVendors, (req, res) => {
  res.status(200).json([res.locals.myvendors]);
});

module.exports = router;
