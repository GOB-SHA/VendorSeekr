const db = require('../models/db.js');

const marketController = {};

marketController.getMarket = async(req, res, next) => {
  const getMarkets = 'SELECT * FROM "public"."market" LIMIT 100';
  try {
    console.log('marketController.getMarket');
    const markets = await db.query(getMarkets);
    res.locals.markets = markets.rows;
    next();
  }
  catch(err) {
    next({log: 'error in getMarket middleware',
    message: { err: err }})
  }
  console.log('bottom of marketController.getMarket');
}

module.exports = marketController;