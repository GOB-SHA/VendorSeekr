const db = require("../models/db.js");

const marketController = {};

marketController.getMarket = async (req, res, next) => {
  console.log("marketController.getMarket firing");
  const getMarkets = "SELECT * FROM market";
  try {
    const markets = await db.query(getMarkets);
    console.log(markets);
    res.locals.markets = markets.rows;
    next();
  } catch (err) {
    console.log(err);
    next({ log: "error in getMarket middleware", message: { err: err } });
  }
};

module.exports = marketController;
