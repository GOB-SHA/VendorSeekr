const db = require('../models/db.js');


const cookieController = {};


/**
* setSSIDCookie - store the user id in a cookie
*/
cookieController.setSSIDCookie = (req, res, next) => {
  if(!res.locals.user) return next();
  res.cookie('ssid', res.locals.user._id.id, {httpOnly: true});
  return next();
}


module.exports = cookieController;