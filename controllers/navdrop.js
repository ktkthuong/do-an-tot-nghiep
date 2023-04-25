exports.getMainmenu = (req, res, next) => {
  res.render("Home", {
    pageTitle: "Trang Chủ",
    path: "/",
    // isAuthenticated: req.session.isLoggedIn,
  });
};
