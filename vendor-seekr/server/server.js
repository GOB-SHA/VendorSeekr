/* eslint-disable no-unused-vars */
const express = require('express');
const app = express();
const cors = require("cors");
const path = require('path');
const cookieParser = require('cookie-parser')

//require routers
const marketRouter = require('./routes/market');
const userRouter = require('./routes/user');
const vendorRouter = require('./routes/vendor');


//parsing
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

//route handlers
app.use('/market', marketRouter)
app.use('/vendor', vendorRouter)
app.use('/user', userRouter)

app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(3000, () => {console.log('listening on port 3000')});