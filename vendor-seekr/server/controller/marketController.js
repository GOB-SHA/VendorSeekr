const db = require('../models/db.js');

const marketController = {};

marketController.getMarket = async(req, res, next) => {
  const getMarkets = 'SELECT * FROM "public"."market" LIMIT 100';
  try {
    const markets = await db.query(getMarkets);
    console.log(markets);
    res.locals.markets = {"test": "test"};
    next();
  }
  catch(err) {
    next({log: 'error in getMarket middleware',
    message: { err: err }})
  }
}

module.exports = marketController;