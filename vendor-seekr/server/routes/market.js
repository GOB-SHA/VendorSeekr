const express = require('express');
const router = express.Router();

const marketController = require('../controller/marketController');

router.get('/getmarket', marketController.getMarket, (req, res) => {
  res.status(200).send(res.locals.message);
})

module.exports = router;