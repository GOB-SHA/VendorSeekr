module.exports = (req, res, next) => {
  console.log("restricted fired: ", req.session.user);
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).json({ message: "session data not valid" });
  }
};
