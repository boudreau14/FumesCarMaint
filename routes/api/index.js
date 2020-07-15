const db = require("../../models");
const passport = require("../../config/passport")
const router = require("express").Router();

router.post("/register", function (req, res) {
  db.User.create(req.body).then((dbUser) => {
    req.login(dbUser, function (err) {
      if (err) {
        console.log(err);
      }
    });
    res.json(dbUser);
  });
});

router.post("/login", passport.authenticate("local"), function (req, res) {
  res.json(req.user);
});

router.get("/logout", function (req, res) {
    req.logout();
    res.json({message: "You are logged out!"})
});

module.exports = router;