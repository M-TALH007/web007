// routes/userRoutes.js

const express = require("express");
const User = require("../models/user");

const router = express.Router();

// Signup route
router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while signing up");
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      res.status(401).send("Invalid username or password");
      return;
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      res.status(401).send("Invalid username or password");
      return;
    }

    req.session.user = user;
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while logging in");
  }
});

// Logout route
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login.html");
});

module.exports = router;
