const express = require("express");
const router = express.Router();
const Sneaker = require("../models/Sneaker")

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/sneakers/:cat", (req, res) => {
  console.log(req.params);
  const cat = req.params.id;
  Sneaker.find(cat)
    .populate("id_tags")
    .then(dbResult => {
      res.render("/products_manage.hbs", {
        sneakers: dbResult,

      });
    })
    .catch(dbErr => {
      console.log(dbErr);
    })
});

router.get("/one-product/:id", (req, res) => {
  // Sneaker.find()
  // .populate("id_tags")
  // .then(dbResult => {
  //   sneakers: dbResult,

  // })
  // .catch(dbErr => {
  //   console.log(dbErr);
  // })
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/signin", (req, res) => {
  res.render("signin");
});


module.exports = router;