const checkAuth = (r, res, next) => {
  if (r.session.auth === "ok") {
    next();
  } else {
    res.redirect("/login");
  }
};

module.exports = {
  checkAuth,
};
