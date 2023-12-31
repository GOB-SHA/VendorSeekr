/* eslint-disable no-unused-vars */

const express = require("express");
const session = require("express-session");
const app = express();
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");

const sessionConfig = {
  name: "hello from the dark side",
  secret: "process.env.SECRET",
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false, //for production set this to true for https only access
    httpOnly: true, //true means no access from Javascript
  },
  resave: false,
  saveUninitialized: true, //must be set to false in production bc of GDPR laws - user has to give consent
};

//require routers
const marketRouter = require("./routes/market");
const userRouter = require("./routes/user");
const vendorRouter = require("./routes/vendor");
const { Server } = require("http");

//parsing
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//create session
app.use(session(sessionConfig));

// serve index.html on the route '/'
app.get("/api", express.static("../index.html"));

app.use("/assets", express.static("./assets"));

//route handlers
app.use("/market", marketRouter);
app.use("/api/vendor", vendorRouter);
app.use("/api/user", userRouter);

app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
