const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

app.use(bodyParser.json());

const productsRoutes = require("./routes/products");

const api = "/api";

app.use(`${api}/products`, productsRoutes);
app.use(express.static(path.join(__dirname, "public")));

mongoose
  .connect("mongodb://127.0.0.1:27017/final_paper", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(4000, () => {
  console.log("server is running http://localhost:3000");
});
