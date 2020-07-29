const db = require("../../models");
const passport = require("../../config/passport")
const router = require("express").Router();
const Services = require("../../models/services")


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
 db.Services.findAll()
 .then(dbModel => {
   res.json(dbModel)
 })
});

router.get("/services/:id", (req, res) => {
  event.preventDefault();
  console.log("Worked!")
} )

//CHECKOUT ROUTES
router.post("/pushCart", (req, res) => {
  console.log("Working checkout!")
  db.Cart.create(req.body)
})

router.get("/pullCart", (req, res) => {
  db.Cart.findAll()
  .then(dbModel => {
    res.json(dbModel)
  })
 });

//FEEDBACK ROUTES
router.post("/feedback", (req, res) => {
  console.log("Working feedback!")
  db.Feedback.create(req.body)
})

module.exports = router;