const withAuth = (req, res, next) => {
  // What functionality are we missing?
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    next();
  }

};

module.exports = withAuth;

