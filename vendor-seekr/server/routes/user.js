const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

router.post('/signup', userController.signUp, (req, res) => {
  return res.status(200).send('success');
});

router.get('/getuser', userController.getUser, (req, res) => {
  return res.status(200).send(res.locals.users);
})

module.exports = router;