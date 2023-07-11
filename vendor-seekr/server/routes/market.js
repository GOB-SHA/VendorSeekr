const express = require('express');
const router = express.Router();


// const marketController = require('../controller/marketController');

router.get('/getmarket', (req, res) => {
  var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = 'postgres://gtbolndd:P9ZttUvzONDbjSZLPPeVGxwOlQtMLEuh@stampy.db.elephantsql.com/gtbolndd' //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * FROM public.market LIMIT 100', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});
  
  res.status(200).json(res.locals.markets);
})

module.exports = router;