const express = require("express");
const Bat = require("../models/bat");
const batRouter = express.Router();

batRouter.get("/", async (req, res) => {
  const bats = await Bat.find();
  res.render("homepage", { bats });
});

batRouter.post("/", async (req, res) => {
  const bat = new Bat(req.body);
  await bat.save();
  res.redirect("/");
});

batRouter.get("/form", (req, res) => {
  res.render("batForm");
});

batRouter.get("/cart/:id", async (req, res) => {
  let cart = req.cookies.cart ? req.cookies.cart : [];
  cart.push(req.params.id);
  res.cookie("cart", cart);
  return res.redirect("back");
});

batRouter.get("/cart/remove/:id", async (req, res) => {
  let cart = req.cookies.cart ? req.cookies.cart : [];
  let index = cart.findIndex((c) => c == req.params.id);
  cart.splice(index, 1);
  res.cookie("cart", cart);
  return res.redirect("back");
});

module.exports = batRouter;
