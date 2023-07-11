const db = require('../models/db.js');

const sessionController = {};

/**
* isLoggedIn - find the appropriate session for this request in the database, then
* verify whether or not the session is still valid.
*/
sessionController.isLoggedIn = async (req, res, next) => {
  // write code here
  
  const verifyUser = await Session.findOne( {cookieId: req.cookies.ssid })
  if (verifyUser) res.locals.session = true;
  else res.locals.session = false;
  // console.log(req.body)
  return next();
};

/**
* startSession - create and save a new Session into the database.
*/
sessionController.startSession = async (req, res, next) => {
  //write code here
  if(!res.locals.user) return next();
  await Session.create({
    cookieId: res.locals.user._id.id
  })

  return next();
};

module.exports = sessionController;