// const { Pool } = require('pg');
// const PG_URI = 'postgres://gtbolndd:P9ZttUvzONDbjSZLPPeVGxwOlQtMLEuh@stampy.db.elephantsql.com/gtbolndd';
// console.log('in db file');
// const pool = new Pool({
//   connectString: PG_URI
// });

// module.exports = {
//   query: (text, params, callback) => {
//     console.log('executed query', text);
//     return pool.query(text, params, callback);
//   }
// };

// console.log('bottom db file');
// var pg = require('pg');
// //or native libpq bindings
// //var pg = require('pg').native

// var conString = 'postgres://gtbolndd:P9ZttUvzONDbjSZLPPeVGxwOlQtMLEuh@stampy.db.elephantsql.com/gtbolndd' //Can be found in the Details page
// var client = new pg.Client(conString);
// client.connect(function(err) {
//   if(err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query('SELECT NOW() AS "theTime"', function(err, result) {
//     if(err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0].theTime);
//     // >> output: 2018-08-23T14:02:57.117Z
//     client.end();
//   });
// });