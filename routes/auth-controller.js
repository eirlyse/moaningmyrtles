const passport = require("passport");
const express = require("express");
// const flash = require("connect-flash");
// const session = require("express-session");
const router = express.Router();

// //Flash
// router.use (
//     session({
//         cookie: {maxAge: 86400000},
//         secret: "wootwoot"
//     })
// );

// router.use(flash());

// //Passport
// require("../config/passport")(passport);
// router.use(passport.initialize());
// router.use(passport.session());

router.get("/", function(req,res){
    if (req.user){
        res.render("index",{
            user: req.user
        });
    }else{
        res.redirect("/login");
    }
});

router.get("login", function(req, res){
    res.render("login", {message: req.flash("error") });
});

router.post(
    "/login",
    passport.authenticate("local-login", {
        successRedirect: "/home",
        failureRedirect: "/login",
        failureFlash: true
    })
);

router.get("/signup", function(req, res) {
    res.render("signup", { message: req.flash("error") });
  });
  //auth login
  router.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/home",
      failureRedirect: "/signup",
      failureFlash: true
    })
  );
  //auth logout
  router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/login");
  });
  
  router.get("*", function(req, res) {
    res.render("404");
  });
  
  module.exports = router;
  