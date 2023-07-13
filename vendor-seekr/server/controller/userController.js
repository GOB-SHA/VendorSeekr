const db = require("../models/db.js");
const bcrypt = require("bcryptjs");

const userController = {};

userController.signUp = async (req, res, next) => {
  try {
    let hashedPW = "undefined";
    const { first_name, last_name, email, phone, username, password } =
      req.body;
    await bcrypt.hash(password, 10, (err, hash) => {
      hashedPW = hash;
      const addUserQuery = `INSERT INTO "user" (first_name, last_name, email, phone, username, password) VALUES ($1, $2, $3, $4, $5, $6)`;
      const addUserValues = [
        first_name,
        last_name,
        email,
        phone,
        username,
        hashedPW,
      ];
      db.query(addUserQuery, addUserValues);
      return next();
    });
  } catch (error) {
    next({ log: "error in signUp middleware", message: { err: error } });
  }
};

userController.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const findUserQuery = `SELECT * FROM "public"."user" WHERE username = $1`;
    const findUserQueryValues = [username];
    const user = await db.query(findUserQuery, findUserQueryValues);
    const hash = user.rows[0].password;

    bcrypt.compare(password, hash, function (err, result) {
      if (result) {
        res.locals.response = "success";
        res.locals.user = user.rows;
      } else {
        res.locals.response = "fail";
      }
      next();
    });
  } catch (error) {
    next({
      message: error.message,
    });
  }
};

userController.getUsers = async (req, res, next) => {
  try {
    const userQuery = 'SELECT * FROM "public"."user" LIMIT 100';
    const users = await db.query(userQuery);
    res.locals.users = users.rows;
    next();
  } catch (error) {
    next({
      message: error,
    });
  }
};

module.exports = userController;
