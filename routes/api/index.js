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
  console.log("Logged in!")
  res.json(req.user);
});

router.get("/logout", function (req, res) {
    req.logout();
    res.json({message: "You are logged out!"})
});

//SERVICES ROUTES
router.get("/services", (req, res) => {
  return res.json(data.services);
});

router.post("/services", (req, res) => {
  let services = [], id = null;
  let cart = JSON.parse(req.body.cart);
  if (!cart) return res.json(services)
  for (var i=0; i < data.services.length; i++) {
    id = data.services[i].id.toString();
    if (cart.hasOwnProperty(id)) {
      data.services[i].qty = cart[id]
      services.push(data.services[i]);
    }
  }
  return res.json(services);
} )


module.exports = router;