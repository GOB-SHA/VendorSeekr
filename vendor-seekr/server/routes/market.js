const express = require("express");
const router = express.Router();

const marketController = require("../controller/marketController");

router.get("/getmarket", marketController.getMarket, (req, res) => {
  console.log("getMarket route firing");
  res.status(200).json([res.locals.markets]);
});

module.exports = router;
