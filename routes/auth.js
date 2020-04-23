const express = require("express");
const router = new express.Router();

const bcrypt = require("bcrypt");
const Users = require("../models/User");

router.get("/signin", (req, res) => {
  res.render("/signin", {
    error: req.flash("error"),
  });
});

router.post("/signin", (req, res, next) => {
  const { name, lastname, email, password } = req.body;

  Users.findOne({
    email: email,
  })
    .then((dbSuccess) => {
      if (!dbSuccess) {
        req.flash("error", "No Username");
        res.redirect("/signin");
      } else {
        if (bcrypt.compareSync(password, foundUser.password)) {
          req.session.currentUser = foundUser;
          res.redirect("/");
        } else {
          req.flash("error", "Password Problem");
          res.redirect("/signin");
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/signup", (req, res) => {
  res.render("/signup", {
    error: req.flash("error"),
  });
});

router.post("/signup", (req, res, next) => {
  const { name, lastname, email, password } = req.body;

  Users.findOne({
    email: email,
  })
    .then((dbFound) => {
      if (dbFound) {
        req.flash("error", "email already assigned to an other account");
        res.redirect("/signup");
      } else {
        const salt = 10;
        const hashPasswd = bcrypt.hashSync(password, salt);
        const newSignup = {
          email,
          password: hashPasswd,
        };
        Users.create(newSignup)
          .then((dbNewSignup) => {
            res.redirect("/signin");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/signout", (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
});

module.exports = router;
