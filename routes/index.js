const express = require("express");
const router = new express.Router();
const Sneaker = require("../models/Sneaker");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/sneakers/:cat", (req, res) => {
  console.log(req.params.cat);
  // console.log(req.params.id);
  Sneaker.find({
      category: req.params.cat
    })
    // .populate("id_tags")
    .then(dbResult => {
      res.render("products.hbs", {
        sneakers: dbResult,
      });
    })
    .catch(dbErr => {
      console.log(dbErr);
    })
});

router.get("/one-product/:id", (req, res) => {
  Sneaker.findById(req.params.id)
    // .populate("id_tags")
    .then(dbResult => {
      res.render("one_product", {
        sneakers: dbResult
      })
    })
    .catch(dbErr => {
      console.log(dbErr);
    })
});


router.get("/products_add", (req, res) => {
  res.render("products_add");
});

router.post("/products_add", (req, res) => {
  console.log(req.body);
  Sneaker.create(req.body)

    .then((dbResult) => {

      req.flash("success", "Thanks for the new sneaker !");
      res.redirect("/products_add");
    })
    .catch(dbErr => {
      req.flash("error", "Your creation was rejected because it was too bad");
      res.redirect("/products_add");
    });
});

router.get("/products_manage", (req, res) => {
  res.render("products_manage");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/signin", (req, res) => {
  res.render("signin");
});


module.exports = router;