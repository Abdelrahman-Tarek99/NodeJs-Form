const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const homeRoutes = require("./routes/home");
const userRoutes = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(homeRoutes.routes);
app.use(userRoutes.routes);

app.use((req, res, next) => {
    console.log("404 page not found: ", req.url);
  res.status(404).render("404", { pageTitle: "Page Not Found", path: "" });
});

app.listen(3000);