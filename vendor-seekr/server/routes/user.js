const express = require("express");
const router = express.Router();
const restricted = require("../controller/restricted");

const userController = require("../controller/userController");

router.post(
  "/signup", 
  userController.signUp, 
  userController.makeCookie,
  (req, res) => {
    return res
      .status(200)
      .send({ session: req.session, response: res.locals.response });
  }
);

router.get("/getusers", userController.getUsers, (req, res) => {
  return res.status(200).send(res.locals.users);
});

router.get("/getsession", restricted, (req, res) => {
  console.log('getsession fired');
  return res
    .status(200)
    .send(req.session);
});

router.post("/verifyuser", userController.verifyUser, (req, res) => {
  return res
    .status(200)
    .send({ session: req.session, response: res.locals.response });
});

module.exports = router;
