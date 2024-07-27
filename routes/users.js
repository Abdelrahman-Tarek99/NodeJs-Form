const path = require("path");
const express = require("express");
const rootDir = require("../util/path"); // to get the root directory
const router = express.Router();

const DataFromHomeForm = require("./home");

router.get("/users", (req, res, next) => {
  console.log(DataFromHomeForm.usersData);
  res.render("users", {
    pageTitle: "Users",
    path: "/users",
    users: DataFromHomeForm.usersData,
  });
});

exports.routes = router;