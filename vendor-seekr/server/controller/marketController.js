const db = require('../models/db.js');

const marketController = {};

marketController.getMarket = async(req, res, next) => {
  res.locals.message = 'hello from market route';
  next();
}

module.exports = marketController;