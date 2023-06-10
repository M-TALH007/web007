// server.js

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 3600000,
    },
  })
);

mongoose.connect("mongodb://localhost:27017/auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// User model and schema
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
});
const User = mongoose.model("User", userSchema);

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
