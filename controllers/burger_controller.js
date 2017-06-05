var express = require("express");
var exphbs = require("express-handlebars");
var router = express.Router();

var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  db.Burger.create({
    name: req.body.name,
    eaten: req.body.eaten
  }).then(function(data) {
    res.redirect("/");
  })
})

router.put("/:id", function(req, res) {
  db.Burger.update({
    eaten: req.body.eaten
  }, {
    where: {
      id: req.params.id
    }
  }).then(function(data) {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
