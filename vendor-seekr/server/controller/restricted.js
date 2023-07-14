module.exports = (req, res, next) => {
  if (req.session && req.ression.user) {
    next()
  }
  else {
    res.status(401).json({ message: 'session data not valid'})
  }
}