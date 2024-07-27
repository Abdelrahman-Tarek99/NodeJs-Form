const path = require("path");
const express = require("express");
const rootDir = require("../util/path"); // to get the root directory
const router = express.Router();

const usersData = [];

router.get("/", (req, res, next) => {
  res.render("home", {
    pageTitle: "Home",
    path: "/",
  });
});

router.post("/add-user", (req, res, next) => {
  usersData.push({ name: req.body.name });
  res.redirect("/users");
});

exports.routes = router;
exports.usersData = usersData;