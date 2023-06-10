const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const cookieParser = require("cookie-parser");
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("view engine", "ejs");

secret = "my-name-is-talha";
const api = "/api/t1";
connection = "mongodb://127.0.0.1:27017/semester_project";
const productRouter = require("./routers/proProducts");
const catagoriesRouter = require("./routers/catagories");
const orderRouter = require("./routers/orders");
const userRouter = require("./routers/users");

app.get("/", (req, res) => {
  res.render("navbar");
});

app.get("/test", (req, res) => res.render("index"));
app.use(`${api}/users`, userRouter);
app.use(`${api}/products`, productRouter);
app.use(`${api}/categories`, catagoriesRouter);
app.use(`${api}/orders`, orderRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/semester_project")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
