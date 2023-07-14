const db = require("../models/db.js");
const bcrypt = require("bcryptjs");

const userController = {};


//SIGNS UP THE USER
userController.signUp = async (req, res, next) => {
  try {
    const { first_name, last_name, email, phone, username, password } =
      req.body;

    const hashedPW = await new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) reject(err);
        resolve(hash);
      });
    });
    const addUserQuery = `INSERT INTO "user" (first_name, last_name, email, phone, username, password) VALUES ($1, $2, $3, $4, $5, $6)`;
    const addUserValues = [
      first_name,
      last_name,
      email,
      phone,
      username,
      hashedPW,
    ];
    await new Promise((resolve, reject) => {
      db.query(addUserQuery, addUserValues, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
    return next()
  } catch (error) {
    next({ log: "error in signUp middleware", message: { err: error } });
  }
};


//CREATES NEW COOKIE USING REQ BODY USERNAME
userController.makeCookie = async (req, res, next) => {
  try {
    const {username} = req.body; 
    const userQuery = 'SELECT * FROM "public"."user" WHERE username = $1';
    const userQueryValues = [username];
    const user = await db.query(userQuery, userQueryValues);
    console.log(user.rows);
    req.session.user = {
      id: user.rows[0].id,
      username: user.rows[0].username,
    }
    return next();
  } catch (error) {
    next({ log: "error in makeCookie middleware", message: { err: error } });
  }
}


//VERIFY THE USER LOGGING INS INFO IS IN OUR DATABASE
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
        req.session.user = {
          id: user.rows[0].id,
          username: user.rows[0].username,
        }
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

//RETURNS ALL USERS IN THE DATABASE
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
