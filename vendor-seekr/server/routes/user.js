const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

router.post('/signup', userController.signUp, (req, res) => {
  return res.status(200).send('success');
});

router.get('/getusers', userController.getUsers, (req, res) => {
  return res.status(200).send(res.locals.users);
})

router.get('/verifyuser', userController.verifyUser, (req, res) => {
  return res.status(200).json(res.locals.response);
})

module.exports = router;