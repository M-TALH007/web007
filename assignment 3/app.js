const express = require("express");
const mongoose = require("mongoose");
const Bat = require("./models/bat");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var expressLayouts = require("express-ejs-layouts");
let app = express();
app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(
  session({
    secret: "My Secret String",
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true,
  })
);
app.use(require("./middlewares/siteSettings"));
app.use("/api/auth", require("./routes/api/auth/index"));
app.use("/", require("./routes/auth"));
app.use("/bat", require("./routes/bat"));
app.get("/contact-us", (req, res) => {
  //   res.send("Hello");
  res.render("contact-us");
});
app.get(
  "/cart",
  require("./middlewares/checkSessionAuth"),
  async (req, res) => {
    let cart = req.cookies.cart ? req.cookies.cart : [];
    let bats = await Bat.find({ _id: { $in: cart } });
    let total = 0;
    bats.forEach((b) => {
      total += Number(b.price);
    });
    return res.render("cart", { bats, total });
  }
);
app.get("/cookie-test", (req, res) => {
  let views = req.cookies.views ? req.cookies.views : 0;
  views = Number(views) + 1;
  res.cookie("views", views);
  return res.send(`You Visited ${views} times`);
});

app.get("/", (req, res) => {
  //   res.send("Hello");
  res.redirect("/bat");
});

let port = 1000;
app.listen(port, () => {
  //this is a call back function which will be executed when the express app started listening
  console.log(`App Listening on http://localhost:` + port);
});
let connectionString = "mongodb://127.0.0.1:27017/fa20-b-bookstore";
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("connected: " + connectionString);
  })
  .catch(() => {
    console.log("unable to connect");
  });
